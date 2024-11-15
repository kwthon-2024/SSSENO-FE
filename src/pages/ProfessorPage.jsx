import React, { useState, useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Container, Stack, Divider, Pagination } from "@mui/material";
import ProfessorList from "../components/Professor/ProfessorList";
import SearchBar from "../components/Professor/SearchBar";
import FilterDropdown from "../components/Professor/FilterDropdown";
import SearchTypeDropdown from "../components/Professor/SearchTypeDropdown";
import ProfessorName from "../mock/Professor/ProfessorName";
import SubjectData from "../mock/Professor/SubjectData";
import ProfessorDetail from "../mock/Professor/ProfessorDetail";
import ProfessorModal from "../components/Professor/ProfessorModal";
import Header from "../components/shared/Header";

// 테마 정의
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // 기본 색상
    },
    secondary: {
      main: "#757575", // 보조 색상
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
});

const ProfessorPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [filters, setFilters] = useState({ college: "", department: "" }); // 필터 상태
  const [searchType, setSearchType] = useState("교수명"); // 검색 유형 상태
  const [selectedProfessor, setSelectedProfessor] = useState(null); // 선택된 교수 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const itemsPerPage = 10; // 페이지당 항목 수

  // 필터링된 교수 리스트 계산
  const filteredProfessors = useMemo(() => {
    if (searchType === "교수명") {
      // 교수명 검색
      return ProfessorName.filter((professor) => {
        const matchesSearch = professor.Professor_name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCollege = filters.college ? professor.College === filters.college : true;
        const matchesDepartment = filters.department ? professor.Department === filters.department : true;
        return matchesSearch && matchesCollege && matchesDepartment;
      });
    } else {
      // 과목명 검색
      const professorsFromSubjects = SubjectData.filter((subject) => {
        const matchesSubject = subject.Subject_name.toLowerCase().includes(searchTerm.toLowerCase());

        // 과목에 속한 교수들 필터링
        const filteredProfessorsInSubject = subject.Professors.filter((professor) => {
          const matchesCollege = filters.college ? professor.College === filters.college : true;
          const matchesDepartment = filters.department ? professor.Department === filters.department : true;
          return matchesCollege && matchesDepartment;
        });

        return matchesSubject && filteredProfessorsInSubject.length > 0;
      }).flatMap((subject) => subject.Professors);

      // 중복 제거 (Professor_id 기준)
      const uniqueProfessors = professorsFromSubjects.filter(
        (prof, index, self) => self.findIndex((p) => p.Professor_id === prof.Professor_id) === index
      );

      return uniqueProfessors;
    }
  }, [searchTerm, filters, searchType]);

  // 선택된 교수의 상세 데이터를 가져오기
  const detailedProfessor = useMemo(() => {
    if (!selectedProfessor) return null;
    return ProfessorDetail.find((prof) => prof.Professor_id === selectedProfessor.Professor_id);
  }, [selectedProfessor]);

  // Pagination 관련 계산
  const totalItems = filteredProfessors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProfessors = filteredProfessors.slice(startIndex, endIndex);

  // Pagination 변경 핸들러
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Header */}

      {/* Page Content */}
      <Container sx={{ mt: 4 }}>
        {/* Filter Section */}
        <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
          {/* Search Section */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Filter Dropdown */}
            <FilterDropdown filters={filters} setFilters={setFilters} />

            {/* 검색 유형 드롭다운 */}
            <SearchTypeDropdown searchType={searchType} setSearchType={setSearchType} />

            {/* Search Bar */}
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              label={searchType === "교수명" ? "교수님 성함을 입력하세요" : "과목명을 입력하세요"}
            />
          </Stack>
        </Stack>

        {/* Professors List */}
        <ProfessorList
          professors={paginatedProfessors}
          onProfessorClick={setSelectedProfessor} // 교수 클릭 시 상태 업데이트
        />

        {/* Pagination */}
        {totalPages > 1 && ( // 페이지가 1개 이상일 때만 표시
          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size="small"
            />
          </Stack>
        )}

        {/* Professor Modal */}
        {detailedProfessor && (
          <ProfessorModal
            open={Boolean(detailedProfessor)}
            onClose={() => setSelectedProfessor(null)}
            professor={detailedProfessor} // 상세 데이터 전달
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ProfessorPage;
