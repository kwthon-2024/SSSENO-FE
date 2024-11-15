import React from "react";
import { Box, Button } from "@mui/material";
import Footer from "../components/shared/Footer";

const HomePage = ({ setCurrentPage }) => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* 상단 배경 */}
            <Box
                sx={{
                    height: "90%", // 상단 배경 높이 비율
                    backgroundColor: "#d6d6d6", // 상단 배경색
                }}
            ></Box>

            {/* 버튼 영역 */}
            <Box
                sx={{
                    position: "relative",
                    height: "300px", // 버튼 영역 높이
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffff", // 하단 배경색
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "30px", // 버튼 간격
                        position: "absolute",
                        top: "-150px", // 버튼이 경계선 중앙에 오도록 설정
                    }}
                >
                    {/* 청원 페이지 버튼 */}
                    <Button
                        variant="contained"
                        sx={{
                            width: 250,
                            height: 250,
                            backgroundColor: "#757575",
                            color: "white",
                            fontSize: "24px",
                            borderRadius: "16px",
                            "&:hover": {
                                backgroundColor: "#616161",
                            },
                        }}
                        onClick={() => setCurrentPage("petition")}
                    >
                        청원
                    </Button>

                    {/* 강의실 페이지 버튼 */}
                    <Button
                        variant="contained"
                        sx={{
                            width: 250,
                            height: 250,
                            backgroundColor: "#757575",
                            color: "white",
                            fontSize: "24px",
                            borderRadius: "16px",
                            "&:hover": {
                                backgroundColor: "#616161",
                            },
                        }}
                        onClick={() => setCurrentPage("classroom")}
                    >
                        강의실
                    </Button>

                    {/* 교수 페이지 버튼 */}
                    <Button
                        variant="contained"
                        sx={{
                            width: 250,
                            height: 250,
                            backgroundColor: "#757575",
                            color: "white",
                            fontSize: "24px",
                            borderRadius: "16px",
                            "&:hover": {
                                backgroundColor: "#616161",
                            },
                        }}
                        onClick={() => setCurrentPage("professor")}
                    >
                        교수
                    </Button>




                </Box>
            </Box>

            {/* 하단 배경 */}
            <Box
                sx={{
                    height: "10%", // 하단 배경 높이 비율
                    backgroundColor: "#ffffff",
                }}
            ></Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default HomePage;
