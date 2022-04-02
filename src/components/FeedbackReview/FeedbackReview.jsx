import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackReview() {

    const feedbackResults = useSelector(state => state.feedbackReducer)
    console.log('feedbackResults from FeedbackReview:', feedbackResults);

    return (
        <div>
            <h2>Review Your Feedback</h2>

            <ul>
                <li>Feeling: {feedbackResults.feeling}</li>
                <li>Understanding: {feedbackResults.understanding}</li>
                <li>Support: {feedbackResults.support}</li>
                <li>Comments: {feedbackResults.comments}</li>
            </ul>

            <button>SUBMIT</button>
        </div>
    )
}

export default FeedbackReview;