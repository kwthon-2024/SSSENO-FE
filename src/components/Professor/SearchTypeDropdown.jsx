import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SearchTypeDropdown = ({ searchType, setSearchType }) => {
    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="search-type-label">검색 유형</InputLabel>
            <Select
                labelId="search-type-label"
                value={searchType}
                onChange={handleSearchTypeChange}
                label="검색 유형"
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#b91c1c", // 테두리 색상 설정
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#9e1d1d", // hover 시 색상
                    },
                    "&.Mui-focused .MuiaOutlinedInput-notchedOutline": {
                        borderColor: "#b91c1c", // 포커스 시 색상
                    },
                }}
            >
                <MenuItem value="교수명">교수명</MenuItem>
                <MenuItem value="과목명">과목명</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SearchTypeDropdown;
