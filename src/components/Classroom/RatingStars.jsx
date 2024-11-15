import React from "react";
import { Rating } from "@mui/material";

const RatingStars = ({ value, onChange, readOnly = false }) => {
    return (
        <Rating
            name="rating"
            value={value}
            onChange={(e, newValue) => {
                if (onChange) {
                    onChange(newValue); // 새로운 값 전달
                }
            }}
            readOnly={readOnly}
        />
    );
};

export default RatingStars;
