import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackReview() {

    const feedbackResults = useSelector(state => state.feedbackReducer)
    console.log('feedbackResults from FeedbackReview:', feedbackResults);

    const handleSubmit = (event) => {
        event.preventDefault();

        Axios.post()
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

            <form onSubmit={(event) => handleSubmit}>
            <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default FeedbackReview;