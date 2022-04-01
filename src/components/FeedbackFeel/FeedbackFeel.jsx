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

            <form>
                <input type='number' placeholder='Feeling?' />
                <button onClick={handleNext}>NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackFeel;