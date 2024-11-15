import React, { useState, useMemo } from "react";
import { Container, Stack, Divider, Button, Grid, TextField } from "@mui/material";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import ClassroomList from "../components/ClassroomList";
import ClassroomModal from "../components/ClassroomModal";
import Header from "../components/Header";
import Pagination from "@mui/material/Pagination";
import classroomFilterSearchData from "../mock/ClassroomFilterSearch";
import AdvancedSearchModal from "../components/AdvancedSearchModal";

const ClassroomPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [filters, setFilters] = useState({ building: "", capacity: "" });
    const [advancedFilters, setAdvancedFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClassroom, setSelectedClassroom] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // 상세 검색 데이터 필터링
    const filteredClassrooms = useMemo(() => {
        return classroomFilterSearchData.classrooms
            .filter((classroom) => {
                const matchesBuilding =
                    !filters.building || classroom.Building_title === filters.building;
                const matchesCapacity =
                    !filters.capacity ||
                    classroom.capacity >= parseInt(filters.capacity, 10);
                const matchesSearchTerm =
                    !searchTerm || classroom.Place_title.includes(searchTerm);

                const matchesType =
                    !advancedFilters.type || classroom.Type === advancedFilters.type;
                const matchesMic =
                    !advancedFilters.hasMic ||
                    String(classroom.Has_mic) === advancedFilters.hasMic;
                const matchesProjector =
                    !advancedFilters.hasProjector ||
                    String(classroom.Has_projector) === advancedFilters.hasProjector;
                const matchesDesk =
                    !advancedFilters.deskType ||
                    classroom.Desk_type === advancedFilters.deskType;

                return (
                    matchesBuilding &&
                    matchesCapacity &&
                    matchesSearchTerm &&
                    matchesType &&
                    matchesMic &&
                    matchesProjector &&
                    matchesDesk
                );
            })
            .map((classroom) => ({
                Building_title: classroom.Building_title,
                Place_title: classroom.Place_title,
                capacity: classroom.capacity,
                rating: Math.floor(Math.random() * 5) + 1,
            }));
    }, [filters, advancedFilters, searchTerm]);

    // 페이지네이션 처리
    const totalItems = filteredClassrooms.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const paginatedClassrooms = filteredClassrooms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (event, value) => setCurrentPage(value);

    return (
        <>
            <Header />
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={2} alignItems="center">
                    {/* 건물 필터 */}
                    <Grid item xs={12} sm={4}>
                        <FilterDropdown filters={filters} setFilters={setFilters} />
                    </Grid>

                    {/* 검색창 */}
                    <Grid item xs={12} sm={6}>
                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            label="강의실 번호를 입력하세요"
                        />
                    </Grid>

                    {/* 상세 검색 버튼 */}
                    <Grid item xs={12} sm={2}>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={() => setModalOpen(true)}
                            sx={{
                                height: "56px", // 검색창 높이와 동일하게 설정
                                textAlign: "center",
                            }}
                        >
                            상세 검색
                        </Button>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* 강의실 리스트 */}
                <ClassroomList
                    classrooms={paginatedClassrooms}
                    onClassroomClick={setSelectedClassroom}
                />

                {/* 페이지네이션 */}
                <Stack alignItems="center" sx={{ mt: 2 }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        size="small"
                    />
                </Stack>

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
                    onApplyFilters={setAdvancedFilters}
                />
            </Container>
        </>
    );
};

export default ClassroomPage;
