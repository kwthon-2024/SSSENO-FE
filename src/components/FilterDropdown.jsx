import React from "react";
import styled from "styled-components";
import { MenuItem, Select, FormControl, InputLabel, FormHelperText } from "@mui/material";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const departmentOptions = {
    "인공지능융합대학": ["정보융합학부", "컴퓨터정보공학부", "로봇학부", "소프트웨어학부"],
    "전자정보공학대학": ["전자재료과", "전자융합학부"],
    "인문사회대학": ["산업심리학과", "영어산업학과"],
    "공과대학": ["화학공학과", "건축공학과"],
    "기타": ["외부 강사"],
};

const FilterDropdown = ({ filters, setFilters }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const currentDepartments = departmentOptions[filters.college] || [];

    return (
        <FilterContainer>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="college-select-label">단과대</InputLabel>
                <Select
                    labelId="college-select-label"
                    id="college-select"
                    name="college"
                    value={filters.college || ""}
                    onChange={handleFilterChange}
                    label="단과대"
                >
                    <MenuItem value=""><em>전체</em></MenuItem>
                    {Object.keys(departmentOptions).map((college) => (
                        <MenuItem key={college} value={college}>{college}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 150 }} disabled={!filters.college}>
                <InputLabel id="department-select-label">학과</InputLabel>
                <Select
                    labelId="department-select-label"
                    id="department-select"
                    name="department"
                    value={filters.department || ""}
                    onChange={handleFilterChange}
                    label="학과"
                >
                    <MenuItem value=""><em>전체</em></MenuItem>
                    {currentDepartments.map((dept) => (
                        <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </FilterContainer>
    );
};


export default FilterDropdown;
