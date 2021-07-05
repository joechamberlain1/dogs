import {
  Button,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Paper,
  Switch,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./dogs.css";
import { green } from "@material-ui/core/colors";
// import Dropdown from "./Dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 400,
    height: 450,
  },
}));

const Dogs = () => {
  const [dog, setDog] = useState([]);

  useEffect(() => {
    axios
      .request("https://dog.ceo/api/breeds/image/random/1")
      .then(function (response) {
        console.log(response.data.message);
        setDog(response.data.message);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const tenDogs = () => {
    axios
      .request("https://dog.ceo/api/breeds/image/random/10")
      .then(function (response) {
        console.log(response.data.message);
        setDog(response.data.message);
      })

      .catch(function (error) {
        console.error(error);
      });
  };

  const twentyDogs = () => {
    axios
      .request("https://dog.ceo/api/breeds/image/random/20")
      .then(function (response) {
        console.log(response.data.message);
        setDog(response.data.message);
      })

      .catch(function (error) {
        console.error(error);
      });
  };
  const FiftyDogs = () => {
    axios
      .request("https://dog.ceo/api/breeds/image/random/50")
      .then(function (response) {
        console.log(response.data.message);
        setDog(response.data.message);
      })

      .catch(function (error) {
        console.error(error);
      });
  };
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
      <div className={classes.root}>
        <Paper className="dogs">
          <h1>A Gallery of Good Dogs</h1>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <p>{darkMode ? "change to light mode" : "change to dark mode"}</p>
          <div className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={() => tenDogs()}
            >
              Fetch 10 Dogs
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => twentyDogs()}
            >
              Fetch 20 Dogs
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => FiftyDogs()}
            >
              Fetch 50 Dogs
            </Button>
          </div>
          <div className={classes.root}>
            <GridList cellHeight={200} className={classes.gridList} cols={3}>
              {dog.map((dogs) => (
                <GridListTile key={dogs} cols={1}>
                  <img src={dogs} alt="a very good dog" />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default Dogs;
