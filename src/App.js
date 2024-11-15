import React, { useState } from "react";
import { Box } from "@mui/material";
import PetitionPage from "./pages/PetitionPage";
import ProfessorPage from "./pages/ProfessorPage";
import ClassroomPage from "./pages/ClassroomPage";
import HomePage from "./pages/Homepage";
import ResponsiveAppBar from "./components/shared/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // 현재 페이지 상태

  // 렌더링할 페이지 선택
  const renderPage = () => {
    switch (currentPage) {
      case "petition":
        return <PetitionPage />;
      case "professor":
        return <ProfessorPage />;
      case "classroom":
        return <ClassroomPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Box>
      {/* 상단바에 상태 전달 */}
      <ResponsiveAppBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </Box>
  );
};

export default App;
