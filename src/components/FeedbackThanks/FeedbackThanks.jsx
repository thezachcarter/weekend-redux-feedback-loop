import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function FeedbackThanks() {
    const history = useHistory();

    const handleNewFeedback = (event) => {
        event.preventDefault();
        history.push('/')
    }

    return (
        <div>
            <h3>Thank you for the feedback!</h3>
            <form onClick={(event) => handleNewFeedback(event)}>
                <Button type='submit' variant='contained' color='primary'>Leave New Feedback</Button>
            </form>
        </div>
    )
};

export default FeedbackThanks;