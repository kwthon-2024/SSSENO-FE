import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchTerm, setSearchTerm, label }) => {
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <TextField
            value={searchTerm}
            onChange={handleInputChange}
            label={label}
            variant="outlined"
            fullWidth
            sx={{
                "& .MuiOutlinedInput-root": {
                    height: "56px",
                },
            }}
        />
    );
};

export default SearchBar;
