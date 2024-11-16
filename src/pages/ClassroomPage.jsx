import React, { useState, useEffect } from "react";
import { Container, Stack, Divider, Pagination, CircularProgress, Typography } from "@mui/material";
import ClassroomList from "../components/Classroom/ClassroomList";
import ClassroomModal from "../components/Classroom/ClassroomModal";
import AdvancedSearchModal from "../components/Classroom/AdvancedSearchModal";
import FilterDropdown from "../components/Classroom/FilterDropdown"; // 필터 드롭다운 컴포넌트
import FilterPanel from "../components/Classroom/FilterSection";
import { fetchRoomList, fetchFilteredRooms, searchRooms } from "../api/classroomAPI";

const ClassroomPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [filters, setFilters] = useState({ building: "", capacity: "" });
    const [advancedFilters, setAdvancedFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClassroom, setSelectedClassroom] = useState(null);

    const [classrooms, setClassrooms] = useState([]); // 강의실 목록 데이터
    const [totalPages, setTotalPages] = useState(1); // 총 페이지 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    const itemsPerPage = 10;

    // 강의실 데이터 로딩 함수
    const loadClassrooms = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const { data } = await fetchRoomList(currentPage); // API 호출
            setClassrooms(data.classrooms || []);
            setTotalPages(data.pagination.total_pages || 1);
        } catch (error) {
            console.error("강의실 데이터를 불러오는 데 실패했습니다.", error);
            setError("데이터를 불러오는 중 문제가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    // 필터 적용 함수
    const handleApplyFilters = async (filters) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetchFilteredRooms({
                building_title: filters.building,
                capacity_max: parseInt(filters.capacity, 10) || null,
                type: filters.type || "",
                has_projector: filters.hasProjector === "true",
                has_mic: filters.hasMic === "true",
                desk_type: filters.deskType || "",
            });
            setClassrooms(response.data || []);
            setCurrentPage(1);
            setTotalPages(1); // 필터 적용 시 페이지네이션 초기화
        } catch (error) {
            console.error("필터를 적용하는 데 실패했습니다.", error);
            setError("필터를 적용하는 중 문제가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };
    // 필터 적용 및 검색 함수
    const handleSearch = async (building, capacity) => {
        console.log("검색 함수 호출됨:", { building, capacity }); // 검색 요청 로그
        setIsLoading(true);
        setError(null);
        try {
            const response = await searchRooms(building, capacity);
            console.log("검색 결과:", response.data); // 결과 로그
            setClassrooms(response.data || []); // 데이터 저장
        } catch (err) {
            console.error("강의실 검색 실패:", err); // 에러 로그
            setError("검색 중 오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setIsLoading(false);
        }
    };


    // 페이지 변경 핸들러
    const handlePageChange = (event, value) => setCurrentPage(value);

    // 데이터 로딩 트리거
    useEffect(() => {
        loadClassrooms();
    }, [currentPage]);

    return (
        <Container sx={{ mt: 4 }}>
            {/* 필터 패널 */}
            <FilterPanel
                filters={filters}
                setFilters={setFilters}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearchResults={handleSearch}
                onOpenAdvancedSearch={() => setModalOpen(true)}
            />

            <Divider sx={{ my: 2 }} />

            {/* 강의실 리스트 */}
            {isLoading ? (
                <Stack alignItems="center" sx={{ mt: 4 }}>
                    <CircularProgress />
                </Stack>
            ) : error ? (
                <Typography variant="body1" color="error" align="center" sx={{ mt: 3 }}>
                    {error}
                </Typography>
            ) : (
                <ClassroomList
                    classrooms={classrooms}
                    onClassroomClick={(classroom) => setSelectedClassroom(classroom)}
                />
            )}

            {/* 페이지네이션 */}
            {!isLoading && !error && totalPages > 1 && (
                <Stack alignItems="center" sx={{ mt: 2 }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        size="small"
                    />
                </Stack>
            )}

            {/* 상세 보기 모달 */}
            {selectedClassroom && (
                <ClassroomModal
                    open={!!selectedClassroom}
                    onClose={() => setSelectedClassroom(null)}
                    classroom={selectedClassroom}
                />
            )}

            {/* 상세 검색 모달 */}
            <AdvancedSearchModal
                open={isModalOpen}
                onClose={() => setModalOpen(false)}
                onApplyFilters={(filters) => {
                    setAdvancedFilters(filters);
                    handleApplyFilters(filters);
                }}
            />
        </Container>
    );
};

export default ClassroomPage;