import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import NoticeTabs from "../components/Petition/NoticeTabs";
import NoticeHeader from "../components/Petition/NoticeHeader";
import Categories from "../components/Petition/Categories";
import SearchBar from "../components/Petition/SearchBar";
import NoticeItem from "../components/Petition/NoticeItem";
import ModalDialog from "../components/Petition/ModalDialog";
import { detailMockData } from "../mock/Petition/detailMockData";
import Header from '../components/shared/Header';

const ITEMS_PER_PAGE = 5;

const PetitionPage = () => {
  const [mockData, setMockData] = useState(detailMockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("전체");
  const [selectedPetition, setSelectedPetition] = useState(null); // 모달 표시용

  const handleSavePetition = (newPetition) => {
    setMockData((prevData) => [newPetition, ...prevData]);
    setCurrentPage(1);
  };

  const handleOpenDetailModal = (id) => {
    const petition = mockData.find((item) => item.Petition_id === id);
    setSelectedPetition(petition);
  };

  const handleCloseModal = () => {
    setSelectedPetition(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
    setCurrentPage(1);
  };

  const handleSearch = (query, option) => {
    setSearchQuery(query);
    setSearchOption(option);
    setCurrentPage(1);
  };

  const filteredData = mockData
    .filter((item) => selectedCategory === "전체" || item.Category === selectedCategory)
    .filter((item) => (selectedTab === 0 ? !item.answer?.contents : item.answer?.contents))
    .filter((item) => {
      if (searchOption === "제목") {
        return item.Complaint_title.toLowerCase().includes(searchQuery.toLowerCase());
      }
      if (searchOption === "내용") {
        return item.Description.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return (
        item.Complaint_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" p={3}>
        <Box maxWidth="900px" width="100%" mx={3}>
          <Typography variant="h4" mb={3}>
            청원 게시판
          </Typography>

          <NoticeTabs selectedTab={selectedTab} onTabChange={handleTabChange} />
          <NoticeHeader />
          <Categories selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
          <SearchBar onAddPetition={handleSavePetition} onSearch={handleSearch} />

          <Divider sx={{ my: 2 }} />

          <Box>
            {currentData.map((item) => (
              <NoticeItem
                key={item.Petition_id}
                data={item}
                handleOpenModal={() => handleOpenDetailModal(item.Petition_id)}
              />
            ))}
          </Box>

          <Box display="flex" justifyContent="center" mt={3}>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                variant={currentPage === index + 1 ? "contained" : "outlined"}
                onClick={() => handleChangePage(index + 1)}
                sx={{ mx: 0.5 }}
              >
                {index + 1}
              </Button>
            ))}
          </Box>

          {selectedPetition && (
            <ModalDialog
              open={Boolean(selectedPetition)}
              handleClose={handleCloseModal}
              petition={selectedPetition}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default PetitionPage;
