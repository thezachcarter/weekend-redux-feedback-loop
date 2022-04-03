import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//MUI
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function FeedbackUnderstand() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [understanding, setUnderstanding] = useState(0);

    //MUI
    const classes = useStyles();

    const handleUnderstanding = (event) => {
        event.preventDefault();
        console.log('in handle understanding', event.target.value);
        setUnderstanding(event.target.value);
    }

    const handleNext = (event) => {
        event.preventDefault();
        console.log('submit understanding');
        if (understanding < 1 || understanding > 5) {
            swal("Invalid Input", "Please, enter a number between 1 and 5", "error");
        }
        else {
            dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding })
            history.push('/3')
        }
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>

            <form className={classes.root} noValidate autoComplete="off"
                onSubmit={(event) => handleNext(event)}>

                {/* INPUT BEFORE MUI 
                <input type='number' placeholder='Understand?' 
                onChange={handleUnderstanding} 
                min='1' max='5'/> */}

                <TextField
                    id="outlined-number"
                    label="Understand? scale of 1-5"
                    type="number"
                    min="1" max="5"
                    variant="outlined"
                    size="small"
                    onChange={handleUnderstanding}
                />

                {understanding < 1 || understanding > 5 ?
                    <Button type='submit' variant='contained' color='default'>NEXT</Button> :
                    <Button type='submit' variant='contained' color='primary'>NEXT</Button>
                }

            </form>

        </div>
    )
}

export default FeedbackUnderstand;