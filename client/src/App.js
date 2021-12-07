import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getBooks } from './actions/books'

import Books from "./components/Books/Books";
import BookForm from "./components/Form/BookForm";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])
  
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Books
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Books setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BookForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
