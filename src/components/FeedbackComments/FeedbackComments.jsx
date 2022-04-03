import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function FeedbackComments() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [comments, setComments] = useState(0);

    const handleComments = (event) => {
        event.preventDefault();
        console.log('in handle comments', event.target.value);
        setComments(event.target.value);
    }

    const handleNext = (event) => {
        event.preventDefault();
        console.log('submit comment');
        dispatch({ type: 'ADD_COMMENTS', payload: comments })
        history.push('/5');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>

            <form onSubmit={(event) => handleNext(event)}>
                <input type='text' placeholder='Comments' onChange={handleComments} />
                <Button type='submit' variant='contained' color='primary'>NEXT</Button>
            </form>

        </div>
    )
}

export default FeedbackComments;