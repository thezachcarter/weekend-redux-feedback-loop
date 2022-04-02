import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

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
                <button type='submit'>Leave New Feedback</button>
            </form>
        </div>
    )
};

export default FeedbackThanks;