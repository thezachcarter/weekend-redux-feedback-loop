import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function FeedbackSupport() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [support, setSupport] = useState(0);

    const handleSupport = (event) => {
        event.preventDefault();
        console.log('in handle support', event.target.value);
        setSupport(event.target.value);
    }

    const handleNext = (event) => {
        event.preventDefault();
        console.log('submit support');
        if(support == 0){
            alert('Enter a number between 1 and 5')
        }
        else{ 
            dispatch({ type: 'ADD_SUPPORT', payload: support})
            history.push('/4')
        }
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>

            <form onSubmit={(event) => handleNext(event)}>
                <input type='number' placeholder='Support?' 
                    onChange={handleSupport} 
                    min='1' max='5'/>
                    
                {support == 0 ? <Button type='submit' variant='contained' color='disabled'>NEXT</Button> :
                <Button type='submit' variant='contained' color='primary'>NEXT</Button>}
            </form>

        </div>
    )
}

export default FeedbackSupport;