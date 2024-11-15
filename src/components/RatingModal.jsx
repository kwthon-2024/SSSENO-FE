import React, { useState } from "react";
import { Modal, Box, Typography, Stack, Divider, Button, Slider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
};

const marks = [
    { value: -3, label: "왼쪽" },
    { value: 0, label: "중간" },
    { value: 3, label: "오른쪽" },
];

const RatingModal = ({ open, onClose, onSubmit }) => {
    const [ratings, setRatings] = useState([0, 0, 0, 0, 0]);

    const handleSliderChange = (index) => (event, value) => {
        const newRatings = [...ratings];
        newRatings[index] = value;
        setRatings(newRatings);
    };

    const handleSubmit = () => {
        onSubmit(ratings);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">양방향 평가하기</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={3}>
                    {["친절 - 엄격", "필기 - 디지털", "옵션 1 - 옵션 2", "옵션 3 - 옵션 4", "옵션 5 - 옵션 6"].map(
                        (label, index) => (
                            <Stack key={index} direction="row" alignItems="center" spacing={2}>
                                <Typography sx={{ minWidth: 120 }}>{label.split(" - ")[0]}</Typography>
                                <Slider
                                    value={ratings[index]}
                                    onChange={handleSliderChange(index)}
                                    step={1}
                                    marks={marks}
                                    min={-3}
                                    max={3}
                                    valueLabelDisplay="auto"
                                    sx={{ flexGrow: 1 }}
                                />
                                <Typography sx={{ minWidth: 120, textAlign: "right" }}>{label.split(" - ")[1]}</Typography>
                            </Stack>
                        )
                    )}
                </Stack>

                <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }} onClick={handleSubmit}>
                    완료하기
                </Button>
            </Box>
        </Modal>
    );
};

export default RatingModal;
