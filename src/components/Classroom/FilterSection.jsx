import React from "react";
import {
    Box,
    Select,
    MenuItem,
    TextField,
    Button,
    InputAdornment,
    Typography,
    Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterSection = ({
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    onOpenAdvancedSearch,
    onSearchResults, // 부모에서 전달된 검색 처리 함수
}) => {
    // 필터 값 변경 핸들러
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
        console.log(`필터 변경: ${name} = ${value}`); // 필터 변경 시 로그
    };

    // 검색 버튼 클릭 핸들러
    const handleSearchClick = () => {
        console.log("검색 버튼 클릭");
        console.log("현재 필터:", filters); // 현재 필터 로그
        if (onSearchResults) {
            onSearchResults(filters.building, parseInt(filters.capacity, 10)); // 검색 요청
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "grey.100",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                p: 2,
                mb: 3,
            }}
        >
            <Grid container spacing={2} alignItems="center">
                {/* Dropdown for Filters */}
                <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            color="text.primary"
                            sx={{ mr: 1 }}
                        >
                            필터
                        </Typography>
                        <Select
                            name="building"
                            value={filters.building || ""}
                            onChange={handleFilterChange}
                            variant="outlined"
                            displayEmpty
                            sx={{
                                height: 36,
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "grey.400",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#b91c1c",
                                },
                                "& .MuiSelect-select": {
                                    padding: "8px 12px",
                                },
                            }}
                        >
                            <MenuItem value="">
                                <em>전체 건물</em>
                            </MenuItem>
                            {["새빛관", "비마관", "한울관", "참빛관", "기념관", "한천재"].map(
                                (building) => (
                                    <MenuItem key={building} value={building}>
                                        {building}
                                    </MenuItem>
                                )
                            )}
                        </Select>
                        <Select
                            name="capacity"
                            value={filters.capacity || ""}
                            onChange={handleFilterChange}
                            variant="outlined"
                            displayEmpty
                            sx={{
                                height: 36,
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "grey.400",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#b91c1c",
                                },
                                "& .MuiSelect-select": {
                                    padding: "8px 12px",
                                },
                            }}
                        >
                            <MenuItem value="">
                                <em>전체 인원</em>
                            </MenuItem>
                            {["20명 이상", "40명 이상", "50명 이상", "70명 이상"].map(
                                (capacity, index) => (
                                    <MenuItem key={index} value={capacity}>
                                        {capacity}
                                    </MenuItem>
                                )
                            )}
                        </Select>
                    </Box>
                </Grid>

                {/* SearchBar */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        placeholder="강의실 번호를 입력해 주세요."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{
                            width: "100%",
                            height: 36,
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "grey.400",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#b91c1c",
                            },
                            "& .MuiInputBase-input": {
                                padding: "6px 12px",
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        variant="text"
                                        sx={{
                                            minWidth: "auto",
                                            p: 0,
                                            color: "#b91c1c",
                                            "&:hover": {
                                                color: "#b91c1c",
                                            },
                                        }}
                                        onClick={handleSearchClick} // 검색 핸들러 연결
                                    >
                                        <SearchIcon />
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                {/* Advanced Search Button */}
                <Grid item xs={12} sm={2}>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={onOpenAdvancedSearch}
                        sx={{
                            height: 36,
                            borderColor: "#b91c1c",
                            color: "#b91c1c",
                            "&:hover": {
                                backgroundColor: "#b91c1c",
                                color: "white",
                            },
                        }}
                        startIcon={<SearchIcon />}
                    >
                        상세 검색
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FilterSection;
