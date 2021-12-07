import React from "react";
import { useDispatch } from 'react-redux'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { deleteBook } from '../../../actions/books'

import useStyles from "./styles";
const Book = ({ book, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {book.genre}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to shelf</Button>
        <Button size="small" onClick={() => setCurrentId(book._id)}>
          Update
        </Button>
        <Button size="small" onClick={() => dispatch(deleteBook(book._id))} >Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
