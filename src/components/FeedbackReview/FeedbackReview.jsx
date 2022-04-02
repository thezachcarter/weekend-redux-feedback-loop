import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackReview() {

    const feedbackResults = useSelector(state => state.feedbackReducer)
    console.log('feedbackResults from FeedbackReview:', feedbackResults);

    const handleSubmit = (event) => {
        event.preventDefault();

        Axios.post('/', feedbackResults)
        .then(response => {
            console.log('feedback reviewed and sent');
        }).catch(err => {
            console.log('error in FeedbackReview POST', err);
        })
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>

            <ul>
                <li>Feeling: {feedbackResults.feeling}</li>
                <li>Understanding: {feedbackResults.understanding}</li>
                <li>Support: {feedbackResults.support}</li>
                <li>Comments: {feedbackResults.comments}</li>
            </ul>

            <form onSubmit={(event) => handleSubmit(event)}>
            <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default FeedbackReview;