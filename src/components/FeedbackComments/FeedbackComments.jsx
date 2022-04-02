import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory  } from 'react-router-dom';

function FeedbackComments() {
    const dispatch = useDispatch();
    const history = useHistory();
    let [comment, setComment] = useState(0);

    const handleComments = (event) => {
        event.preventDefault();
        console.log('in handle comments', event.target.value);
        setComments(event.target.value);
    }

    const handleNext = (event) => {
        event.preventDefault();
        console.log('submit comment');     
        dispatch({type: 'ADD_COMMENTS', payload: comment})
        history.push('/5');
    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>

            <form onSubmit={(event) => handleNext(event)}>
                <input type='text' placeholder='Comments' onChange={handleComments}/>
                <button>NEXT</button>
            </form>

        </div>
    )
}

export default FeedbackComments;