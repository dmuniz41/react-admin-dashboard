import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar } = useProSidebar();

  return (
    // <Box
    //   sx={{
    //     "& .pro-sidebar-inner": {
    //       background: `$(colors.primary[400]) !important`,
    //     },
    //     "& .pro-icon-wrapper": {
    //       backgroundColor: "transparent !important",
    //     },
    //     "& .pro-inner-item": {
    //       padding: "5px 35px 5px 20px !important",
    //     },
    //     "& .pro-inner-item: hoover": {
    //       color: "#868dfb !important",
    //     },
    //     "& .pro-inner-item.active": {
    //       color: "#6870fa !important",
    //     },
    //   }}
    // >
    //   </Box>
    <ProSidebar
      collapsed={isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.primary[400],
        },
      }}
    >
      <Menu
        iconShape="square"
        rootStyles={{
          [`.${menuClasses.button}`]: {
            backgroundColor: "transparent",
            padding: "5px 35px 5px 20px",
            "&:hover": { backgroundColor: "transparent", color: "#868dfb" },
          },
        }}
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: active ? "#6870fa" : undefined,
              };
          },
        }}
      >
        {/* Logo and menu icon */}
        <MenuItem
          onClick={() => collapseSidebar(setIsCollapsed(!isCollapsed))}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMIN
              </Typography>
              <IconButton
                onClick={() => collapseSidebar(setIsCollapsed(!isCollapsed))}
              >
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
