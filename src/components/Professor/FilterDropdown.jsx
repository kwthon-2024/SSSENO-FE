import React from "react";
import styled from "styled-components";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const departmentOptions = {
    "인공지능융합대학": ["정보융합학부", "컴퓨터정보공학부", "로봇학부", "소프트웨어학부"],
    "전자정보공학대학": ["전자재료과", "전자융합학부"],
    "인문사회대학": ["산업심리학과", "영어산업학과"],
    "공과대학": ["화학공학과", "건축공학과"],
    기타: ["외부 강사"],
};

const FilterDropdown = ({ filters, setFilters }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const currentDepartments = departmentOptions[filters.college] || [];

    return (
        <FilterContainer>
            {/* 단과대 드롭다운 */}
            <FormControl
                sx={{
                    m: 1,
                    minWidth: 150,
                    "& .MuiFormLabel-root": {
                        color: "#b91c1c", // 라벨 기본 색상
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: "#b91c1c", // 포커스 시 라벨 색상
                    },
                }}
            >
                <InputLabel id="college-select-label">단과대</InputLabel>
                <Select
                    labelId="college-select-label"
                    id="college-select"
                    name="college"
                    value={filters.college || ""}
                    onChange={handleFilterChange}
                    label="단과대"
                    displayEmpty
                    sx={{
                        height: 40, // 드롭다운 높이
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#9e1d1d" },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                        "& .MuiSelect-select": {
                            display: "flex",
                            alignItems: "center", // 글씨 수직 정렬
                            padding: "10px 12px",
                        },
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

            {/* 학과 드롭다운 */}
            <FormControl
                sx={{
                    m: 1,
                    minWidth: 150,
                    "& .MuiFormLabel-root": {
                        color: "#b91c1c",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: "#b91c1c",
                    },
                }}
                disabled={!filters.college}
            >
                <InputLabel id="department-select-label">학과</InputLabel>
                <Select
                    labelId="department-select-label"
                    id="department-select"
                    name="department"
                    value={filters.department || ""}
                    onChange={handleFilterChange}
                    label="학과"
                    displayEmpty
                    sx={{
                        height: 40,
                        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#9e1d1d" },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#b91c1c" },
                        "& .MuiSelect-select": {
                            display: "flex",
                            alignItems: "center", // 글씨 수직 정렬
                            padding: "10px 12px",
                        },
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
        </FilterContainer>
    );
};

export default FilterDropdown;
