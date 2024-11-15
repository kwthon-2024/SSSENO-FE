import React, { useState, useMemo } from "react";
import { Container, Stack, Divider } from "@mui/material";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar";
import ClassroomList from "../components/ClassroomList";
import ClassroomModal from "../components/ClassroomModal";
import Header from "../components/Header";
import Pagination from "@mui/material/Pagination";
import classroomData from "../mock/ClassroomData"; // 데이터 가져오기

const ClassroomPage = () => {
    const allClassrooms = classroomData.classrooms; // 데이터 정의
    const [filters, setFilters] = useState({ building: "", capacity: "" });
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClassroom, setSelectedClassroom] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // 필터링 로직
    const filteredClassrooms = useMemo(() => {
        return allClassrooms.filter((classroom) => {
            const matchesBuilding =
                filters.building === "" ||
                classroom.Building_title === filters.building;
            const matchesCapacity =
                filters.capacity === "" ||
                classroom.capacity >= parseInt(filters.capacity, 10);
            const matchesSearchTerm =
                searchTerm === "" ||
                classroom.Place_title.includes(searchTerm);
            return matchesBuilding && matchesCapacity && matchesSearchTerm;
        });
    }, [allClassrooms, filters, searchTerm]);

    const totalItems = filteredClassrooms.length;
    const totalPages = useMemo(() => {
        return Math.max(1, Math.ceil(totalItems / itemsPerPage));
    }, [totalItems, itemsPerPage]);
    const paginatedClassrooms = filteredClassrooms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (event, value) => setCurrentPage(value);

    return (
        <>
            <Header />
            <Container sx={{ mt: 4 }}>
                <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
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

                <ClassroomList
                    classrooms={paginatedClassrooms}
                    onClassroomClick={setSelectedClassroom}
                />

                <Stack alignItems="center" sx={{ mt: 2 }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        size="small"
                    />
                </Stack>

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
