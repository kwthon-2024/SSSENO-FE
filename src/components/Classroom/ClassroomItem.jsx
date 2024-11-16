const ClassroomItem = ({ classroom, onDetailClick }) => {
    return (
        <Paper
            sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                boxShadow: 1,
                "&:hover": {
                    backgroundColor: "#fdecec",
                },
            }}
        >
            <Stack spacing={0.5}>
                {/* 건물 이름과 강의실 번호 */}
                <Typography variant="subtitle1" fontWeight="bold">
                    {classroom.Building_title} {classroom.Place_title}
                </Typography>

                {/* 수용 인원 */}
                <Typography variant="body2" color="text.secondary">
                    수용 인원: {classroom.capacity}명
                </Typography>
            </Stack>

            <Stack spacing={1} alignItems="center">
                {/* 별점 표시 */}
                <RatingStars value={classroom.rating} readOnly />

                {/* 상세보기 버튼 */}
                <Button
                    size="small"
                    variant="outlined"
                    onClick={() => onDetailClick(classroom)}
                    sx={{
                        borderColor: "#b91c1c",
                        color: "#b91c1c",
                        "&:hover": {
                            backgroundColor: "#fdecec",
                            borderColor: "#b91c1c",
                        },
                    }}
                >
                    상세보기 →
                </Button>
            </Stack>
        </Paper>
    );
};

export default ClassroomItem;