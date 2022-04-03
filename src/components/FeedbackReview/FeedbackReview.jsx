import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function FeedbackReview() {

    const history = useHistory();
    const feedbackResults = useSelector(state => state.feedbackReducer)
    console.log('feedbackResults from FeedbackReview:', feedbackResults);

    const handleSubmit = (event) => {
        event.preventDefault();

        Axios.post('/', feedbackResults)
            .then(response => {
                console.log('feedback reviewed and sent');
            }).catch(err => {
                console.log('error in FeedbackReview POST', err);
            });
        
        history.push('/6');
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
                <Button type='submit' variant='contained' color='primary'>SUBMIT</Button>
            </form>
        </div>
    )
}

export default FeedbackReview;