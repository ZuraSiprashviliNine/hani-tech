
const reducer = (state = {
    location: null,
}, action) => {
    switch(action.type){

        case 'INIT:COMMON_FULFILLED': {
            state = {
                ...state,
                location: action.payload.location
            };
            break;
        }
        
        default: {
            
            break;
        }
    }

    return state;
};

export default reducer;