import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import Challenge from "./Challenge/Challenge.js";
import ChallengeForm from "./ChallengeForm/ChallengeForm";

const Challenges = () => {
  const classes = useStyles();
  const challenges = useSelector((state) => state.challenges);
  return challenges.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {/* {challenges.map((challenge) => (
        <Grid item key={challenge._id} xs={12} sm={7}>
          <Challenge />
        </Grid>
      ))} */}
      <Grid item xs={12} sm={7}>
        <Challenge />
        <Challenge />
        <Challenge />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ChallengeForm />
      </Grid>
    </Grid>
  );
};

export default Challenges;
