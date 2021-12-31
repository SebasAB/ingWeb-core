import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles";

import Challenge from "./Challenge/Challenge.js";
import ChallengeForm from "./ChallengeForm/ChallengeForm";
import { getChallenges } from "../../actions/challenges";

const Challenges = () => {
  const classes = useStyles();

  const challenges = useSelector((state) => state.challenges);
  const state = useSelector((state) => state);

  console.log(challenges);
  console.log(state);
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12}>
        <ChallengeForm />
      </Grid>
      {challenges.map((challenge) => (
        <Grid item key={challenge._id} xs={12}>
          <Challenge challenge={challenge} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Challenges;
