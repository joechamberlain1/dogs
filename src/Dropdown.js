// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { makeStyles } from "@material-ui/core";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "noWrap",
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: "hidden",
//   },

//   gridList: {
//     width: 1080,
//     height: 305,
//     display: "flex",
//     justifyContent: "center",
//   },
// }));

// const Dropdown = () => {
//   const classes = useStyles();

//   const [breed, setBreed] = useState([]);
//   const [bulldog, setBulldog] = useState([]);

//   //   useEffect(() => {
//   //     axios
//   //       .get("https://dog.ceo/api/breeds/list/all")
//   //       .then(function (response) {
//   //         console.log(response.data.message.bulldog);
//   //         setBreed(response.data.message.bulldog);
//   //       })

//   //       .catch(function (error) {
//   //         console.error(error);
//   //       });
//   //   }, []);

//   useEffect(() => {
//     axios
//       .get("https://dog.ceo/api/breed/bulldog/english/images/random/1")
//       .then(function (response) {
//         console.log(response.data.message);
//         setBulldog(response.data.message);
//       })

//       .catch(function (error) {
//         console.error(error);
//       });
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://dog.ceo/api/breed/bulldog/french/images/random/1")
//       .then(function (response) {
//         console.log(response.data.message);
//         setBulldog(response.data.message);
//       })

//       .catch(function (error) {
//         console.error(error);
//       });
//   }, []);

//   const bostonBulldog = () => {
//     axios
//       .get("https://dog.ceo/api/breed/bulldog/boston/images/random/1")
//       .then(function (response) {
//         console.log(response.data.message);
//         setBulldog(response.data.message);
//       })

//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <form>
//         <label for="bulldogs">Choose your favourite bulldog!</label>
//         <select name="bulldogs" id="bulldogs">
//           {/* {breed.map((breeds) => (
//             <option key={breeds.id}>{breeds}</option>
//           ))} */}
//           <option> English</option>
//           <option> French</option>
//           <option> Boston</option>
//         </select>
//       </form>
//       <GridList cellHeight={300} className={classes.gridList} cols={4}>
//         {bulldog.map((bulldogs) => (
//           <GridListTile cols={1}>
//             <img key={bulldogs.id} src={bulldogs} alt="a very good dog" />
//           </GridListTile>
//         ))}
//       </GridList>
//     </>
//   );
// };

// export default Dropdown;
