import React from "react";
import styled from "styled-components";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const capacityOptions = ["20", "40", "50", "70", "100"];

const FilterDropdown = ({ filters, setFilters }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    return (
        <FilterContainer>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="building-select-label">건물</InputLabel>
                <Select
                    labelId="building-select-label"
                    id="building-select"
                    name="building"
                    value={filters.building || ""}
                    onChange={handleFilterChange}
                    label="건물"
                >
                    <MenuItem value="">
                        <em>전체</em>
                    </MenuItem>
                    {["새빛관", "비마관", "한울관", "참빛관", "기념관", "한천재"].map((building) => (
                        <MenuItem key={building} value={building}>
                            {building}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="capacity-select-label">수용 인원</InputLabel>
                <Select
                    labelId="capacity-select-label"
                    id="capacity-select"
                    name="capacity"
                    value={filters.capacity || ""}
                    onChange={handleFilterChange}
                    label="수용 인원"
                >
                    <MenuItem value="">
                        <em>전체</em>
                    </MenuItem>
                    {capacityOptions.map((capacity) => (
                        <MenuItem key={capacity} value={capacity}>
                            {capacity}명 이상
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </FilterContainer>
    );
};

export default FilterDropdown;
