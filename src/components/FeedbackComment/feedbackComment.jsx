import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackComment() {

    const history = useHistory();
    const handleNext = () => {
        history.push('/5');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>

            <form>
                <input type='number' placeholder='Comments' />
                <button onClick={handleNext}>NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackComment;