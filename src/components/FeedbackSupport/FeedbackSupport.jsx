import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

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
        dispatch({ type: 'ADD_SUPPORT', payload: support })
        history.push('/4');
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>

            <form onSubmit={(event) => handleNext(event)}>
                <input type='text' placeholder='Support?' onChange={handleSupport} />
                <button type="submit">NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackSupport;