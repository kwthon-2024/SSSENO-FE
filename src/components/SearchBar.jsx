import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const SearchBar = ({ searchTerm, setSearchTerm, label }) => {
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
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label} // 동적 레이블
                    variant="outlined"
                    fullWidth
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: "56px",
                        },
                    }}
                />
            )}
        />
    );
};

export default SearchBar;
