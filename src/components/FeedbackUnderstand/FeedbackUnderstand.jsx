import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackUnderstand() {

    const history = useHistory();
    const handleNext = () => {
        history.push('/3');
    }

    return (
        <div>
            <h2>How well are you understanding the content?</h2>

            <form>
                <input type='number' placeholder='Understand?' />
                <button onClick={handleNext}>NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackUnderstand;