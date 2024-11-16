import React from "react";
import { Box, Select, MenuItem, FormControl, InputLabel, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ProfessorSearchSection = ({
    filters,
    setFilters,
    searchType,
    setSearchType,
    searchTerm,
    setSearchTerm,
    onSearch,
}) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm, filters, searchType);
    };

    const departmentOptions = {
        "인공지능융합대학": ["정보융합학부", "컴퓨터정보공학부", "로봇학부", "소프트웨어학부"],
        "전자정보공학대학": ["전자재료과", "전자융합학부"],
        "인문사회대학": ["산업심리학과", "영어산업학과"],
        "공과대학": ["화학공학과", "건축공학과"],
        기타: ["외부 강사"],
    };

    const currentDepartments = departmentOptions[filters.college] || [];

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                backgroundColor: "grey.100",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                padding: 2,
                alignItems: "center", // 수직 정렬
                flexWrap: "wrap", // 좁은 화면에서 줄바꿈
            }}
        >
            {/* 단과대 */}
            <FormControl sx={{ minWidth: 150 }}>
                <InputLabel
                    id="college-select-label"
                    sx={{
                        color: "#b91c1c",
                        "&.Mui-focused": { color: "#b91c1c" },
                    }}
                >
                    단과대
                </InputLabel>
                <Select
                    labelId="college-select-label"
                    id="college-select"
                    name="college"
                    value={filters.college || ""}
                    onChange={handleFilterChange}
                    label="단과대"
                    sx={{
                        height: 40,
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#9e1d1d" },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                    }}
                >
                    <MenuItem value="">
                        <em>전체</em>
                    </MenuItem>
                    {Object.keys(departmentOptions).map((college) => (
                        <MenuItem key={college} value={college}>
                            {college}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* 학과 */}
            <FormControl sx={{ minWidth: 150 }} disabled={!filters.college}>
                <InputLabel
                    id="department-select-label"
                    sx={{
                        color: "#b91c1c",
                        "&.Mui-focused": { color: "#b91c1c" },
                    }}
                >
                    학과
                </InputLabel>
                <Select
                    labelId="department-select-label"
                    id="department-select"
                    name="department"
                    value={filters.department || ""}
                    onChange={handleFilterChange}
                    label="학과"
                    sx={{
                        height: 40,
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#9e1d1d" },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                    }}
                >
                    <MenuItem value="">
                        <em>전체</em>
                    </MenuItem>
                    {currentDepartments.map((dept) => (
                        <MenuItem key={dept} value={dept}>
                            {dept}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* 검색 유형 */}
            <FormControl sx={{ minWidth: 150 }}>
                <InputLabel
                    id="search-type-label"
                    sx={{
                        color: "#b91c1c",
                        "&.Mui-focused": { color: "#b91c1c" },
                    }}
                >
                    검색 유형
                </InputLabel>
                <Select
                    labelId="search-type-label"
                    value={searchType}
                    onChange={handleSearchTypeChange}
                    label="검색 유형"
                    sx={{
                        height: 40,
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#9e1d1d" },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                    }}
                >
                    <MenuItem value="교수명">교수명</MenuItem>
                    <MenuItem value="과목명">과목명</MenuItem>
                </Select>
            </FormControl>

            {/* 검색어 입력 */}
            <TextField
                variant="outlined"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={handleInputChange}
                sx={{
                    width: 300,
                    height: 40,
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#9e1d1d" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                }}
            />

            {/* 검색 버튼 */}
            <Button
                variant="outlined"
                color="error"
                onClick={handleSearch}
                sx={{
                    height: 40,
                    px: 2,
                    borderColor: "#b91c1c",
                    "&:hover": { backgroundColor: "#b91c1c", color: "white" },
                }}
                startIcon={<SearchIcon />}
            >
                검색
            </Button>
        </Box>
    );
};

export default ProfessorSearchSection;
