import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { deleteBook } from "../../../actions/books";

import {
  deleteFromShelf,
  getShelf,
  updateShelf,
} from "../../../actions/shelfs";

import { getBooks } from "../../../actions/books";

import useStyles from "./styles";
const Book = ({ book, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  var email = null;

  const user = JSON.parse(localStorage.getItem("profile"));

  user !== null ? (email = user.result.email) : (email = null);

  const bookId = book._id;

  const addToShelf = () => {
    console.log("addToShelf");
    dispatch(updateShelf(email, { book: bookId }));
  };

  const removeFromShelf = () => {
    console.log("deleting from shelf");
    console.log(bookId);
    dispatch(deleteFromShelf(email, bookId));
  };

  const shelf = useSelector((state) => state.shelfs);
  console.log(shelf);

  const isInShelf = () => {
    for (var i in shelf.books) {
      if (shelf.books[i].bookID === book._id) {
        return true;
      }
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="primary">
          {book.author}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          {book.genre}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" onClick={addToShelf}>
          {isInShelf() ? "Remove from shelf" : "Add to shelf"}
        </Button> */}
        {isInShelf() ? (
          <Button size="small" onClick={removeFromShelf}>
            Remove from shelf
          </Button>
        ) : (
          <Button size="small" onClick={addToShelf}>
            Add to shelf
          </Button>
        )}
        <Button size="small" onClick={() => setCurrentId(book._id)}>
          Update
        </Button>
        <Button size="small" onClick={() => dispatch(deleteBook(book._id))}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Book;
