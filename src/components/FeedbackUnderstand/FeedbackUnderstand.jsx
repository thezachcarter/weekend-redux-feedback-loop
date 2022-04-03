import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function FeedbackUnderstand() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [understanding, setUnderstanding] = useState(0);

    const handleUnderstanding = (event) => {
        event.preventDefault();
        console.log('in handle understanding', event.target.value);
        setUnderstanding(event.target.value);
    }

    const handleNext = (event) => {
        event.preventDefault();
        console.log('submit understanding');
        if(understanding == 0){
            alert('Enter a number between 1 and 5')
        }
        else{ 
            dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding })
            history.push('/3')
        }
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>

            <form onSubmit={(event) => handleNext(event)}>
                <input type='number' placeholder='Understand?' 
                onChange={handleUnderstanding} 
                min='1' max='5'/>
                
                {understanding == 0 ? <Button type='submit' variant='contained' color='disabled'>NEXT</Button> :
                <Button type='submit' variant='contained' color='primary'>NEXT</Button>}
            </form>

        </div>
    )
}

export default FeedbackUnderstand;