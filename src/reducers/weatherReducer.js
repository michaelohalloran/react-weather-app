import {FETCH_WEATHER} from '../actions/index';

const initialState = [];

const weatherReducer = (state=initialState, action) => {
    // console.log('action received in reducer', action);
    switch(action.type) {
        case FETCH_WEATHER:
        console.log('action data', action);
        // console.log('full action data', action.payload.data.list);
            // return {
            //     ...state,
            //     weather: [...state.weather, action.payload.data]
            // }
            return [...state, action.payload.data];
        default:
            return state;
    }
}

export default weatherReducer;