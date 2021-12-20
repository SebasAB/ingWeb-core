import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";

import Books from "../Books/Books";
import BookForm from "../Form/BookForm";

import { getBooks } from "../../actions/books";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
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
  );
};

export default Home;
