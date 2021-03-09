import {ADD, SUBSTRACT} from './type'

const initData = {
    counter: 0
}

export const reducerCounter = (state = initData, action) => {
    switch(action.type){
        case ADD:
            console.log('add');
            return{
                ...state,
                counter:action.data + 1
            }
        case SUBSTRACT:
            console.log('kurang');
            return{
                ...state,
                counter: (action.data === 0) ?  0 :  action.data - 1
            }
        default: return state;
    }
}
