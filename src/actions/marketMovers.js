import {MARKETGAINERS_FETCHING, MARKETGAINERS_SUCCESS, MARKETGAINERS_FAILURE,} from 'constants';
import axios from "axios";

export const fetchMarketGainers= () => {
    return dispatch => {
        dispatch({ type: MARKETGAINERS_FETCHING });

        axios
            .get('endpoint')
            // .then(response => console.log (response.data, "From MARKETGAINERS API"))
            .then(response => dispatch({ type: MARKETGAINERS_SUCCESS, payload: response.data })
            )
            
        .catch(error => dispatch({ type: MARKETGAINERS_FAILURE, payload: error.response }))

    };
};

