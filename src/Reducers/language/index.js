
const reducer = (state = {
    active: null,
    keywords: null,
    languages: null
}, action) => {
    switch(action.type){
        case 'INIT:LANGUAGES_FULFILLED': {
            state = {
                ...state,
                active: action.payload.active,
                keywords: action.payload.keywords,
                languages: action.payload.languages
            }
            break;
        }

        case 'SET:LANGUAGE': {
            state = {
                ...state,
                active: action.payload
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