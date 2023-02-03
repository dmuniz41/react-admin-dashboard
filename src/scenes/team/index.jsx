import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData.js";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", headerClassName: "column-header" },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "column-header",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerClassName: "column-header",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerClassName: "column-header",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerClassName: "column-header",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerClassName: "column-header",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            margin="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manger" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0 "
        display="flex"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell:": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-virtualScroller:": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer:": {
            backgroundColor: colors.blueAccent[700],
            borderTop: "none",
          },
          "& .column-header": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
        }}
      >
        <DataGrid autoHeight rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
