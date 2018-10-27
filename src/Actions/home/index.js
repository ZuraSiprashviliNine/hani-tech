
export function INIT_HOME(){
    return {
        type: 'INIT:HOME',
        payload: new Promise((resolve, reject) => {
            resolve(require('../../../api/home.json'));
        })
    }
}

export function SET_PENDING_SLIDE_HOME(id){
    return {
        type: 'SET:PENDING_SLIDE:HOME',
        payload: id
    }
}

export function SET_CURRENT_SLIDE_HOME(id){
    return {
        type: 'SET:CURRENT_SLIDE:HOME',
        payload: id
    }
}