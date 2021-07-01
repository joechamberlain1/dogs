import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./dogs.css";
// import Dropdown from "./Dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "noWrap",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  gridList: {
    width: 1080,
    height: 305,
    display: "flex",
    justifyContent: "center",
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

  const classes = useStyles();
  return (
    <>
      <div className="dogs">
        <h1>A Gallery of Good Dogs</h1>

        <div className="button-container">
          <Button variant="contained" onClick={() => tenDogs()}>
            Fetch 10 Dogs
          </Button>
          <Button variant="contained" onClick={() => twentyDogs()}>
            Fetch 20 Dogs
          </Button>
          <Button variant="contained" onClick={() => FiftyDogs()}>
            Fetch 50 Dogs
          </Button>
        </div>
        <div className={classes.root}>
          <GridList
            cellHeight={300}
            className={classes.gridList}
            cols={4}
            spacing={12}
          >
            {dog.map((dogs) => (
              <GridListTile cols={1}>
                <img key={dogs.id} src={dogs} alt="a very good dog" />
              </GridListTile>
            ))}
          </GridList>
        </div>
        {/* <Dropdown /> */}
      </div>
    </>
  );
};

export default Dogs;
