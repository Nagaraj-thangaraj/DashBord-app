import React, { useEffect, useState } from "react";
import "../DashBord/Dashbord.css";
import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const barDataoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "company Profit",
    },
  },
};
const PieDataoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "exam Results",
    },
  },
};
const tableColumns = [
  {
    id: "Id",
    name: "Id",
  },
  {
    id: "Name",
    name: "Name",
  },
  {
    id: "Email",
    name: "Email",
  },
  {
    id: "PhoneNo",
    name: "PhoneNo",
  },
];
export default function Dashbord() {
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState({ labels: [], datasets: [] });
  const [row, rowChange] = useState([]);
  const [page, setPageChange] = useState(0);
  const [rowPer, rowPerChange] = useState(5);
  const dataSet = {
    labels: barData.map((data) => data.year),
    datasets: [{ label: "Gain", data: barData.map((data) => data.usergain) }],
  };
  const LoginPage = useNavigate();

  //PAGENATION FUNCTION

  function handlePageChange(event, newPage) {
    setPageChange(newPage);
  }
  function handleRow(event) {
    rowPerChange(event.target.value);
    setPageChange(0);
  }
  //BAR DATA API
  const barDataApi = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/0411248715d4fa2d6d6a"
      );
      const result = await response.json();
      setBarData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //PIE DATA API
  const pieDataApi = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/87f4373b1b36b097acc9"
      );
      const result = await response.json();
      setPieData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //TABLE DATA API
  const tableDataApi = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/861ffdb31310a041283c"
      );
      const result = await response.json();
      rowChange(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    barDataApi();
    pieDataApi();
    tableDataApi();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1,position:'sticky',top:0 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DashBoard
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => LoginPage("/")}
            >
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className="grid-box">
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select">
                <img
                  src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png"
                  alt="folder"
                  width="80px"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr5Nh1v0Jghr6RtUDbWg9PsAqqWsPjOzmxA&usqp=CAU"
                  alt="folder"
                  width="80px"
                />

                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                  alt="folder"
                  width="80px"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="background-img">
                <img src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select">
                <h1>welcome to my Dashboard</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select">
                <Bar data={dataSet} options={barDataoptions} />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select pie">
                <Pie
                  style={{ width: "100%", height: "100%" }}
                  data={pieData}
                  options={PieDataoptions}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select">
             <h1>Hello world</h1>
               
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
              <Paper sx={{margin:3}}
              >
                <TableContainer sx={{ maxHeight: 540 }}  >
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        {tableColumns.map((column, i) => (
                          <TableCell
                            key={column.id}
                            sx={{ background: "black", color: "white" }}
                          >
                            {column.name}{" "}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row &&
                        row
                          .slice(page * rowPer, page * rowPer + rowPer)
                          .map((row, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell key={row.id}>{row.id}</TableCell>
                                <TableCell key={row.name}>{row.name}</TableCell>
                                <TableCell key={row.email}>
                                  {row.email}
                                </TableCell>
                                <TableCell key={row.phoneNo}>
                                  {row.phoneNo}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPage={rowPer}
                  rowsPerPageOptions={[10, 20, 30, 40, 50, 60]}
                  page={page}
                  count={row.length}
                  component="div"
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleRow}
                 
                ></TablePagination>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
