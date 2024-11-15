import React from "react";
import { Pagination, Stack } from "@mui/material";

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <Stack alignItems="center" sx={{ mt: 2 }}>
            <Pagination
                count={totalPages} // 총 페이지 수
                page={currentPage} // 현재 페이지
                onChange={onPageChange} // 페이지 변경 핸들러
                size="small"
                color="primary"
            />
        </Stack>
    );
};

export default PaginationComponent;
