// Top-level actions go here, e.g. API calls needed on start-up

// import axios from 'axios';
// import { createAction } from 'redux-actions';

// const someSuccessAction = createAction('SOME_SUCCESS_ACTION');


// const someFailedAction = (error, url) => ({
//     type: 'SOME_FAILED_ACTION',
//     error: true,
//     payload: error
// });

// export const getSomeData = () => {
//     return dispatch => {
//         axios.get(
//             url,
//             options
//         ).then(
//             resp => {
//                 dispatch(someSuccessAction(resp.data));
//             },
//             err => {
//                 dispatch(someFailedAction(err));
//             }
//         )
//     }
// }