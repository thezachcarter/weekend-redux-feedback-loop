import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function FeedbackFeel() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [feeling, setFeeling] = useState(0);

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

            <form onSubmit={(event) => handleNext(event)}>
                <input type='number' placeholder='Feeling?' 
                    onChange={handleFeeling} 
                    min='1' max='5'/>

                {feeling == 0 ? <Button type='submit' variant='contained' color='disabled'>NEXT</Button> :
                <Button type='submit' variant='contained' color='primary'>NEXT</Button>}
                
            </form>

        </div>
    )
}

export default FeedbackFeel;