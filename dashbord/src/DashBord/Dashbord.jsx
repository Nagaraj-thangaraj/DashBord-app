import React from "react";
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
export default function Dashbord() {
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
        <div >
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <div className="select">

                <img
                  src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png"
                  alt="folder"
                  width='80px'
                  
                />
              
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr5Nh1v0Jghr6RtUDbWg9PsAqqWsPjOzmxA&usqp=CAU"
                  alt="folder"
                  width='80px'
                  
                />
             

                 <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
                  alt="folder"
                  width='80px'
                  
                />
              
                <img
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
                  alt="folder"
                  width='80px'
                />
             
                  <img
                  src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w240-h480-rw"
                  alt="folder"
                  width='80px'
                  style={{borderRadius:'50px'}}
                  
                />
             
                  <img
                  src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png"
                  alt="folder"
                  width='80px'

                  
                />
             
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="select">
              
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="select">
               
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="select">
            
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="select">
              
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="select">
              
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </>
  );
}
