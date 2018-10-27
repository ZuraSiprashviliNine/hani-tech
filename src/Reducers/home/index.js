
const reducer = (state = {
    slides: null,
    pendingId: -1,
    currentSlideId: 1,
}, action) => {
    switch(action.type){

        case 'INIT:HOME_FULFILLED': {
            state = {
                ...state,
                slides: action.payload.slides
            };
            break;
        }

        case 'SET:PENDING_SLIDE:HOME': {
            state = {
                ...state,
                pendingId: action.payload
            };
            break;
        }
        
        case 'SET:CURRENT_SLIDE:HOME': {
            state = {
                ...state,
                currentSlideId: action.payload
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