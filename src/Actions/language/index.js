
export function INIT_LANGUAGES(code){
    return {
        type: 'INIT:LANGUAGES',
        payload: new Promise((resolve, reject) => {
            resolve(require('../../../api/language.json'));
        })
    }
}

export function SET_LANGUAGE(code){
    return {
        type: 'SET:LANGUAGE',
        payload: code
    }
}