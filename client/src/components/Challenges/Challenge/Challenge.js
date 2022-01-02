import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

const Challenge = ({ challenge }) => {
  const classes = useStyles();
  const deleteChallenge = () => {};
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Category: {challenge.category}
        </Typography>
        <Typography variant="body2" color="primary">
          Parameter: {challenge.categoryParameter}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          Quantity: {challenge.quantity}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          Progress: {challenge.progress}/{challenge.quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteChallenge}>
          Delete challenge
        </Button>
      </CardActions>
    </Card>
  );
};

export default Challenge;
