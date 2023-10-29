import React, { useContext } from "react";
import "../DashBord/Dashbord.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Bar } from "react-chartjs-2";
import { Context } from "../Context/Context";
import { Chart } from "chart.js/auto";
import { userData } from "../ChartData/ChartData";
import { Pie } from "react-chartjs-2";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 10, lastName: "venkatesh", firstName: "thangaraj", age: 25 },
  { id: 11, lastName: "gomadhi", firstName: "guna", age: 15 },
  { id: 12, lastName: "bala", firstName: "vinayagam", age: 35 },
  { id: 13, lastName: "bala", firstName: "vinayagam", age: 35 },
  { id: 14, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 15, lastName: "Lannister", firstName: "Cersei", age: 42 },
];

export const options = {
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
export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const dataSet = {
  labels: userData.map((data) => data.year),
  datasets: [{ label: "Gain", data: userData.map((data) => data.usergain) }],
};
export default function Dashbord() {
  const { barData, setBarData } = useContext(Context);
  const LoginPage = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
              DashBord
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

                <img
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
                  alt="folder"
                  width="80px"
                />

                <img
                  src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w240-h480-rw"
                  alt="folder"
                  width="80px"
                  style={{ borderRadius: "50px" }}
                />

                <img
                  src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png"
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
                <h1>welcome to my Dashbord</h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select">
                <Bar data={dataSet} options={options} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select pie">
                <Pie style={{ width: "100%", height: "100%" }} data={data} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="select table">
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
