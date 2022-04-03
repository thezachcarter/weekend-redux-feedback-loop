import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//MUI
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function FeedbackThanks() {
    const history = useHistory();

    const handleNewFeedback = (event) => {
        event.preventDefault();
        history.push('/')
    }

    //MUI
    const classes = useStyles();

    return (
        <div>
            <h1>Thank you for the feedback!</h1>
            <form className={classes.root} noValidate autoComplete="off"
            onClick={(event) => handleNewFeedback(event)}>
                <Button type='submit' variant='contained' color='primary'>Leave New Feedback</Button>
            </form>
        </div>
    )
};

export default FeedbackThanks;