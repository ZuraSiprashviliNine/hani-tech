
export function INIT_COMMON(){
    return {
        type: 'INIT:COMMON',
        payload: new Promise((resolve, reject) => {
            resolve(require('../../../api/common.json'))
        })
    }
}