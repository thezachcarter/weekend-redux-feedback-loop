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

function FeedbackFeel() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feeling, setFeeling] = useState(0);

    //MUI
    const classes = useStyles();

    const handleFeeling = (event) => {
        event.preventDefault();
        console.log('in handle feeling', event.target.value);
        setFeeling(event.target.value);
    }

    const handleNext = (event) => {
        console.log('submit feeling');
        event.preventDefault();
        if(feeling == 0){
            alert('Enter a number between 1 and 5')
        }
        else{ 
            dispatch({ type: 'ADD_FEELING', payload: feeling })
            history.push('/2')
        }
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>

            <form className={classes.root} noValidate autoComplete="off"
            onSubmit={(event) => handleNext(event)}>
                
                
                {/* INPUT BEFORE MUI 
                <input type='number' placeholder='Feeling?' 
                    onChange={handleFeeling} 
                    min='1' max='5'/> */}
                
                <TextField
                id="outlined-number"
                label="Feeling?"
                type="number"
                min="1" max="5"
                variant="outlined"
                size="small"
                onChange={handleFeeling}
                />

                {feeling == 0 ? <Button type='submit' variant='contained' color='default'>NEXT</Button> :
                <Button type='submit' variant='contained' color='primary'>NEXT</Button>}
                
            </form>

        </div>
    )
}

export default FeedbackFeel;