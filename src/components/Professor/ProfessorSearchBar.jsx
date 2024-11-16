import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const ProfessorSearchBar = ({ searchTerm, setSearchTerm, label }) => {
    const handleInputChange = (event, newInputValue) => {
        setSearchTerm(newInputValue || "");
    };

    return (
        <Autocomplete
            disablePortal
            options={[]} // 자동완성 옵션 비활성화
            value={searchTerm}
            onInputChange={handleInputChange}
            sx={{
                width: 300,
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#b91c1c", // 테두리 색상 설정
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9e1d1d", // hover 시 색상
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#b91c1c", // 포커스 시 색상
                },
                "& .MuiAutocomplete-inputRoot": {
                    height: 40, // 높이 설정
                    display: "flex",
                    alignItems: "center", // 글씨 수직 정렬
                },
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant="outlined"
                    fullWidth
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 40, // 입력 필드 높이
                        },
                    }}
                />
            )}
        />
    );
};

export default ProfessorSearchBar;
