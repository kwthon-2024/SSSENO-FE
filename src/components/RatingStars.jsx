import React from "react";
import { Rating } from "@mui/material";

const RatingStars = ({ value }) => {
    return <Rating name="read-only" value={value} readOnly />;
};

export default RatingStars;
