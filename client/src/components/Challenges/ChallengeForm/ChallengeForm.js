import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
  Typography,
  Button,
  DesktopDatePicker,
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

import useStyles from "./styles";

const ChallengeForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [isQuantity, setIsQuantity] = useState(false);

  const email = JSON.parse(localStorage.getItem("profile")).result.email;

  const [challengeData, setChallengeData] = useState({
    owner: email,
    category: "Quantity",
    categoryParameter: "",
    quantity: 0,
    endDate: new Date(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("creating challenge");
    // if () {
    //   // dispatch(updateBook(currentId, bookData));
    // } else {
    //   // dispatch(createBook(bookData));
    // }
    clear();
  };

  const clear = () => {
    console.log("clearing");
    setChallengeData({
      owner: email,
      category: "",
      categoryParameter: "",
      quantity: 0,
      endDate: new Date(),
    });
  };

  useEffect(() => {
    challengeData.category.localeCompare("Quantity") === 0
      ? setIsQuantity(true)
      : setIsQuantity(false);
  }, [challengeData]);

  console.log(challengeData);

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Challenge Form</Typography>
        <Select
          fullWidth
          id="categoryID"
          label="Category"
          value={setChallengeData.category}
          onChange={(e) =>
            setChallengeData({
              ...challengeData,
              category: e.target.value,
            })
          }
        >
          <MenuItem value={"Quantity"}>Quantity</MenuItem>
          <MenuItem value={"By Author"}>By Author</MenuItem>
          <MenuItem value={"By Category"}>By Category</MenuItem>
        </Select>
        <FormHelperText>Category</FormHelperText>
        {isQuantity ? (
          <></>
        ) : (
          <>
            {challengeData.category.localeCompare("By Author") === 0 ? (
              <>
                <Select
                  fullWidth
                  id="authorID"
                  label="Author"
                  value={setChallengeData.categoryParameter}
                  onChange={(e) =>
                    setChallengeData({
                      ...challengeData,
                      categoryParameter: e.target.value,
                    })
                  }
                >
                  <MenuItem value={"Stephen King"}>Stephen King</MenuItem>
                  <MenuItem value={"Federico Axat"}>Federico Axat</MenuItem>
                  <MenuItem value={"George RR Martin"}>
                    George RR Martin
                  </MenuItem>
                  <MenuItem value={"Tolkien"}>Tolkien</MenuItem>
                </Select>
                <FormHelperText>Author</FormHelperText>
              </>
            ) : (
              <>
                <Select
                  fullWidth
                  id="genreID"
                  value={setChallengeData.categoryParameter}
                  label="Genre"
                  onChange={(e) =>
                    setChallengeData({
                      ...challengeData,
                      categoryParameter: e.target.value,
                    })
                  }
                >
                  <MenuItem value={"Misterio"}>Misterio</MenuItem>
                  <MenuItem value={"Terror"}>Terror</MenuItem>
                  <MenuItem value={"Suspenso"}>Suspenso</MenuItem>
                  <MenuItem value={"Histórico"}>Histórico</MenuItem>
                  <MenuItem value={"Biográfico"}>Biográfico</MenuItem>
                  <MenuItem value={"Juvenil"}>Juvenil</MenuItem>
                </Select>
                <FormHelperText>Genre</FormHelperText>
              </>
            )}
          </>
        )}
        <TextField
          type="number"
          fullWidth
          onChange={(e) =>
            setChallengeData({ ...challengeData, quantity: e.target.value })
          }
        />
        <FormHelperText>Quantity</FormHelperText>
        <br />
        <input
          type="date"
          onChange={(e) =>
            setChallengeData({ ...challengeData, endDate: e.target.value })
          }
        />
        <FormHelperText>End Date</FormHelperText>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Create Challenge
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear Fields
        </Button>
      </form>
    </Paper>
  );
};

export default ChallengeForm;
