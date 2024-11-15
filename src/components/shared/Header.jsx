import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import { grey } from "@mui/material/colors";

const pages = [
    { name: "청원", value: "petition" },
    { name: "강의실", value: "classroom" },
    { name: "교수", value: "professor" },
];
const settings = ["Dashboard", "Logout"];

function ResponsiveAppBar({ setCurrentPage }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // 메뉴 열기/닫기 핸들러
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#9e1d1d", height: "60px" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ padding: "0 8px", minHeight: "60px" }}>
                    {/* 로고 클릭 시 HomePage로 이동 */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => setCurrentPage("home")} // 홈으로 이동
                        sx={{
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 700,
                            color: "white",
                            textDecoration: "none",
                            letterSpacing: ".15rem",
                            fontSize: "24px",
                            cursor: "pointer", // 클릭 가능
                            flexGrow: 1,
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        광평
                    </Typography>

                    {/* 모바일 메뉴 */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation menu"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={() => {
                                        setCurrentPage(page.value);
                                        handleCloseNavMenu();
                                    }}
                                >
                                    <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* 데스크톱 메뉴 */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => setCurrentPage(page.value)}
                                sx={{
                                    color: "white",
                                    fontWeight: 300,
                                    fontSize: "16px",
                                    mx: 1,
                                    "&:hover": { backgroundColor: grey[700] },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/* 사용자 설정 메뉴 */}
                    <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <PersonIcon sx={{ color: "white", fontSize: "32px" }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
