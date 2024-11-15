import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Modal,
    Stack,
    ToggleButtonGroup,
    ToggleButton,
    Divider,
} from "@mui/material";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "500px",
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
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
        onApplyFilters(filters);
        onClose(); // 모달 닫기
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" textAlign="center" fontWeight="bold" mb={2}>
                    상세 검색
                </Typography>

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

                {/* 검색 버튼 */}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={handleSearch}
                >
                    검색하기
                </Button>
            </Box>
        </Modal>
    );
};

export default AdvancedSearchModal;
