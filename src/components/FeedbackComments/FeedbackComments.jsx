import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

//MUI
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function FeedbackComments() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [comments, setComments] = useState(0);

    //MUI
    const classes = useStyles();

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

            <form className={classes.root} noValidate autoComplete="off"
                onSubmit={(event) => handleNext(event)}>

                {/* INPUT BEFORE MUI
                <input type='text' placeholder='Comments' onChange={handleComments} /> */}

                <TextField
                    id="outlined-multiline-static"
                    label="Comments?"
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={handleComments}
                />

                <br></br>
                {/* this break exists to center the form elements
                had issues with MUI cooperating with other layout modifications */}

                <Button type='submit' variant='contained' color='primary'>NEXT</Button>
            </form>
        </div>
    )
}

export default FeedbackComments;