import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

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
        dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding })
        history.push('/3');
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>

            <form onSubmit={(event) => handleNext(event)}>
                <input type='number' placeholder='Understand?' 
                onChange={handleUnderstanding} 
                min='1' max='5'/>
                <button>NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackUnderstand;