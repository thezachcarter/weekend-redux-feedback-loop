import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
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

function FeedbackReview() {

    const history = useHistory();
    const feedbackResults = useSelector(state => state.feedbackReducer)
    console.log('feedbackResults from FeedbackReview:', feedbackResults);

    //MUI
    const classes = useStyles();

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

    const handleRestart = () => {
        history.push('/');
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>

                <h4>Feeling: {feedbackResults.feeling}</h4>
                <h4>Understanding: {feedbackResults.understanding}</h4>
                <h4>Support: {feedbackResults.support}</h4>
                <h4>Comments: {feedbackResults.comments}</h4>
            
            <form className={classes.root} noValidate autoComplete="off" 
            onSubmit={(event) => handleSubmit(event)}>
                <Button type='submit' variant='contained' color='primary'>SUBMIT</Button>
            </form>

            <Button onClick={handleRestart} variant='contained' color='secondary'>START OVER</Button>

        </div>
    )
}

export default FeedbackReview;