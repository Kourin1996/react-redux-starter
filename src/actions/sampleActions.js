import createTypes from 'redux-create-action-types';

const Types = createTypes (
    'SAMPLE'
);

export function sample() {
    //redux-thunk
    return (dispatch, getState) => {
        return dispatch({type: 'SAMPLE', sample: 'sample'});
    }
}

export default Types;