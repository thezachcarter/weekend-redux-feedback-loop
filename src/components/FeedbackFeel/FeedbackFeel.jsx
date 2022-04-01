import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function FeedbackFeel() {
    
    const history = useHistory();
    const handleNext = () => {
        history.push('/2');
    }

    return (
        <div>
            <h2>How are you feeling today?</h2>

            <button onClick={handleNext}>NEXT</button>
        </div>
    )
}

export default FeedbackFeel;