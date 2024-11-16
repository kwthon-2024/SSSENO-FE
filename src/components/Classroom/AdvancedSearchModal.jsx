import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Modal,
    Stack,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 24,
    p: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    maxHeight: "90vh",
};

const contentStyle = {
    flex: 1,
    overflow: "auto",
    padding: "16px",
};

const footerStyle = {
    padding: "16px",
    borderTop: "1px solid #ddd",
};

const AdvancedSearchModal = ({ open, onClose, onApplyFilters }) => {
    const [filters, setFilters] = useState({
        building: "",
        capacity: "",
        type: "",
        hasMic: "",
        hasProjector: "",
        deskType: "",
    });

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleSearch = () => {
        const parsedFilters = {
            building_title: filters.building || null,
            capacity_max: filters.capacity ? parseInt(filters.capacity, 10) : null,
            type: filters.type || null,
            has_projector: filters.hasProjector === "true",
            has_mic: filters.hasMic === "true",
            desk_type: filters.deskType || null,
        };

        console.log("Parsed filters for search:", parsedFilters); // 전송 데이터 로그

        onApplyFilters(parsedFilters); // 부모 컴포넌트로 필터 전달
        onClose();
    };


    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                {/* 헤더 */}
                <Box sx={{ p: 2, borderBottom: "1px solid #ddd", textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold">
                        세부 검색
                    </Typography>
                </Box>

                {/* 스크롤 가능한 콘텐츠 */}
                <Box sx={contentStyle}>
                    <Stack spacing={3}>
                        {/* 건물 */}
                        <Box>
                            <Typography fontWeight="bold">건물</Typography>
                            <ToggleButtonGroup
                                value={filters.building}
                                exclusive
                                onChange={(e, value) => handleFilterChange("building", value)}
                                fullWidth
                            >
                                <ToggleButton value="">전체</ToggleButton>
                                <ToggleButton value="새빛관">새빛관</ToggleButton>
                                <ToggleButton value="비마관">비마관</ToggleButton>
                                <ToggleButton value="한울관">한울관</ToggleButton>
                                <ToggleButton value="참빛관">참빛관</ToggleButton>
                                <ToggleButton value="기념관">기념관</ToggleButton>
                                <ToggleButton value="한천재">한천재</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                        {/* 인원 */}
                        <Box>
                            <Typography fontWeight="bold">인원</Typography>
                            <ToggleButtonGroup
                                value={filters.capacity}
                                exclusive
                                onChange={(e, value) => handleFilterChange("capacity", value)}
                                fullWidth
                            >
                                <ToggleButton value="">전체</ToggleButton>
                                <ToggleButton value="20">20명 이상</ToggleButton>
                                <ToggleButton value="40">40명 이상</ToggleButton>
                                <ToggleButton value="50">50명 이상</ToggleButton>
                                <ToggleButton value="70">70명 이상</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                        {/* 강의실 형태 */}
                        <Box>
                            <Typography fontWeight="bold">강의실 형태</Typography>
                            <ToggleButtonGroup
                                value={filters.type}
                                exclusive
                                onChange={(e, value) => handleFilterChange("type", value)}
                                fullWidth
                            >
                                <ToggleButton value="">전체</ToggleButton>
                                <ToggleButton value="교실형">교실형</ToggleButton>
                                <ToggleButton value="계단식">계단식</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                        {/* 마이크 */}
                        <Box>
                            <Typography fontWeight="bold">마이크</Typography>
                            <ToggleButtonGroup
                                value={filters.hasMic}
                                exclusive
                                onChange={(e, value) => handleFilterChange("hasMic", value)}
                                fullWidth
                            >
                                <ToggleButton value="">불필요</ToggleButton>
                                <ToggleButton value="true">필요</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                        {/* 빔 프로젝터 */}
                        <Box>
                            <Typography fontWeight="bold">빔 프로젝터</Typography>
                            <ToggleButtonGroup
                                value={filters.hasProjector}
                                exclusive
                                onChange={(e, value) => handleFilterChange("hasProjector", value)}
                                fullWidth
                            >
                                <ToggleButton value="">불필요</ToggleButton>
                                <ToggleButton value="true">필요</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>

                        {/* 책상 형태 */}
                        <Box>
                            <Typography fontWeight="bold">책상 형태</Typography>
                            <ToggleButtonGroup
                                value={filters.deskType}
                                exclusive
                                onChange={(e, value) => handleFilterChange("deskType", value)}
                                fullWidth
                            >
                                <ToggleButton value="">전체</ToggleButton>
                                <ToggleButton value="일체형 책상">일체형</ToggleButton>
                                <ToggleButton value="분리형 책상">분리형</ToggleButton>
                                <ToggleButton value="반원형 책상">반원형</ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Stack>
                </Box>

                {/* 푸터 */}
                <Box sx={footerStyle}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSearch}
                    >
                        검색하기
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default AdvancedSearchModal;
