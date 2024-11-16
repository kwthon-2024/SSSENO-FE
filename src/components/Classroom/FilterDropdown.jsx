import React, { useState } from "react";
import styled from "styled-components";
import { MenuItem, Select, FormControl, InputLabel, CircularProgress, Button } from "@mui/material";
import { searchRooms } from "../../api/classroomAPI";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FilterDropdown = ({ onSearchResults }) => {
    const [filters, setFilters] = useState({ building_title: "", capacity_max: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const buildingOptions = [
        "새빛관",
        "비마관",
        "한울관",
        "참빛관",
        "기념관",
        "한천재",
    ]; // Default buildings
    const capacityOptions = ["20", "40", "50", "70", "100"]; // Default capacity options

    // 필터 변경 핸들러
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        console.log(`필터 변경: ${name} = ${value}`); // 필터 변경 로그
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };


    const handleSearch = async () => {
        console.log("검색 시작:", filters); // 필터 값 로그
        setLoading(true);
        setError(null);
        try {
            const response = await searchRooms(filters.building_title, Number(filters.capacity_max));
            console.log("검색 성공. 응답 데이터:", response.data); // 응답 로그
            onSearchResults(response.data); // 부모 컴포넌트로 데이터 전달
        } catch (err) {
            console.error("검색 실패:", err); // 에러 로그
            setError("검색 중 오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <FilterContainer>
            {/* 건물 선택 드롭다운 */}
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="building-select-label">건물</InputLabel>
                <Select
                    labelId="building-select-label"
                    id="building-select"
                    name="building_title"
                    value={filters.building_title}
                    onChange={handleFilterChange}
                    label="건물"
                >
                    <MenuItem value="">
                        <em>전체</em>
                    </MenuItem>
                    {buildingOptions.map((building) => (
                        <MenuItem key={building} value={building}>
                            {building}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* 수용 인원 선택 드롭다운 */}
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="capacity-select-label">수용 인원</InputLabel>
                <Select
                    labelId="capacity-select-label"
                    id="capacity-select"
                    name="capacity_max"
                    value={filters.capacity_max}
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

            {/* 검색 버튼 */}
            <Button
                variant="contained"
                onClick={handleSearch}
                disabled={loading}
                sx={{ m: 1 }}
            >
                {loading ? <CircularProgress size={20} color="inherit" /> : "검색"}
            </Button>

            {/* 오류 메시지 */}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </FilterContainer>
    );
};

export default FilterDropdown;
