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

function FeedbackSupport() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [support, setSupport] = useState(0);

    //MUI
    const classes = useStyles();

    const handleSupport = (event) => {
        event.preventDefault();
        console.log('in handle support', event.target.value);
        setSupport(event.target.value);
    }

    const handleNext = (event) => {
        event.preventDefault();
        console.log('submit support');
        if(support < 1 || support > 5){
            swal("Invalid Input", "Please, enter a number between 1 and 5", "error");
        }
        else{ 
            dispatch({ type: 'ADD_SUPPORT', payload: support})
            history.push('/4')
        }
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>

            <form className={classes.root} noValidate autoComplete="off"
            onSubmit={(event) => handleNext(event)}>

                {/* INPUT BEFORE MUI 
                <input type='number' placeholder='Support?' 
                    onChange={handleSupport} 
                    min='1' max='5'/> */}

                <TextField
                id="outlined-number"
                label="Support? scale of 1-5"
                type="number"
                min="1" max="5"
                variant="outlined"
                size="small"
                onChange={handleSupport}
                />
                    
                {support < 1 || support > 5 ? 
                <Button type='submit' variant='contained' color='default'>NEXT</Button> :
                <Button type='submit' variant='contained' color='primary'>NEXT</Button>
                }
                
            </form>

        </div>
    )
}

export default FeedbackSupport;