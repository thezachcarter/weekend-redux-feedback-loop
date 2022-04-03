import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

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
        event.preventDefault();
        console.log('submit feeling');
        dispatch({ type: 'ADD_FEELING', payload: feeling })
        history.push('/2');
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>

            <form onSubmit={(event) => handleNext(event)}>
                <input type='number' placeholder='Feeling?' 
                    onChange={handleFeeling} 
                    min='1' max='5'/>
                <button type='submit'>NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackFeel;