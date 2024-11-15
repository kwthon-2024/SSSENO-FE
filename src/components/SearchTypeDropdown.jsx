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
            >
                <MenuItem value="교수명">교수명</MenuItem>
                <MenuItem value="과목명">과목명</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SearchTypeDropdown;
