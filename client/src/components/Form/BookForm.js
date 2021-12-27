import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { createBook, updateBook } from "../../actions/books";

import useStyles from "./styles";

const BookForm = ({ currentId, setCurrentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const book = useSelector((state) =>
    currentId ? state.books.find((b) => b._id === currentId) : null
  );

  useEffect(() => {
    if (book) setBookData(book);
  }, [book]);

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("creating book");
    if (currentId) {
      dispatch(updateBook(currentId, bookData));
    } else {
      dispatch(createBook(bookData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setBookData({
      title: "",
      author: "",
      genre: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {!currentId ? "Create " : "Edit "}a book
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={bookData.title}
          onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
        />
        <TextField
          name="author"
          variant="outlined"
          label="Author"
          fullWidth
          value={bookData.author}
          onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
        />
        <Select
          fullWidth
          name="genre"
          value={bookData.genre}
          label="Genre"
          onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
        >
          <MenuItem value={"Misterio"}>Misterio</MenuItem>
          <MenuItem value={"Terror"}>Terror</MenuItem>
          <MenuItem value={"Suspenso"}>Suspenso</MenuItem>
          <MenuItem value={"Histórico"}>Histórico</MenuItem>
          <MenuItem value={"Biográfico"}>Biográfico</MenuItem>
          <MenuItem value={"Juvenil"}>Juvenil</MenuItem>
        </Select>
        <FormHelperText>Genre</FormHelperText>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {!currentId ? "Create " : "Edit "}a book
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

export default BookForm;
