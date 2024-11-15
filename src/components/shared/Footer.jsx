import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#b91c1c",
                color: "white",
                textAlign: "center",
                padding: "10px 0",
                position: "fixed", // 화면 하단에 고정
                width: "100%",
                bottom: 0,
            }}
        >
            <Typography variant="body2">© 2024 Your Organization. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;
