import React from "react";
import Button from "@mui/material/Button";

const DetailButton = ({ onClick }) => {
    return (
        <Button size="small" variant="outlined" color="primary" onClick={onClick}>
            상세보기 &gt;
        </Button>
    );
};

export default DetailButton;
