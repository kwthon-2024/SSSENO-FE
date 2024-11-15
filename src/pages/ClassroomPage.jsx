import React, { useState, useMemo } from "react";
import { Container, Stack, Divider } from "@mui/material";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import ClassroomList from "../components/ClassroomList";
import ClassroomModal from "../components/ClassroomModal";
import Header from "../components/Header";
import PaginationComponent from "../components/PaginationComponent";
import { getPageData } from "../mock/ClassroomData";

const ClassroomPage = () => {
    const [filters, setFilters] = useState({ building: "", capacity: "" });
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClassroom, setSelectedClassroom] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // 페이지 데이터 가져오기
    const { classrooms: allClassrooms, pagination } = getPageData(currentPage);

    // 필터링 로직
    const filteredClassrooms = useMemo(() => {
        return allClassrooms.filter((classroom) => {
            const matchesBuilding =
                filters.building === "" ||
                classroom.Building_title === filters.building ||
                (filters.building === "기타" &&
                    (classroom.Building_title === "기념관" || classroom.Building_title === "한천재"));
            const matchesCapacity =
                filters.capacity === "" || classroom.capacity >= parseInt(filters.capacity, 10);
            return matchesBuilding && matchesCapacity;
        });
    }, [allClassrooms, filters]);

    return (
        <>
            <Header />
            <Container sx={{ mt: 4 }}>
                <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                    {/* 필터 및 검색 */}
                    <Stack direction="row" spacing={2}>
                        <FilterDropdown filters={filters} setFilters={setFilters} />
                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            label="강의실 번호를 입력하세요"
                        />
                    </Stack>
                </Stack>
                <Divider sx={{ my: 2 }} />

                <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                    {/* 강의실 리스트 */}
                    <ClassroomList
                        classrooms={filteredClassrooms}
                        onClassroomClick={setSelectedClassroom}
                    />
                </Stack>

                {/* 페이지네이션 */}
                <PaginationComponent
                    totalPages={pagination.total_pages}
                    currentPage={pagination.current_page}
                    onPageChange={(e, page) => setCurrentPage(page)}
                />

                {/* 강의실 상세 모달 */}
                {selectedClassroom && (
                    <ClassroomModal
                        open={!!selectedClassroom}
                        onClose={() => setSelectedClassroom(null)}
                        classroom={selectedClassroom}
                    />
                )}
            </Container>
        </>
    );
};

export default ClassroomPage;
