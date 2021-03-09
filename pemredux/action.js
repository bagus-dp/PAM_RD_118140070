import {ADD, SUBSTRACT} from './type'

export const addCounter = (counter) => ({
    type:ADD,
    data:counter
})

export const subCounter = (counter) => ({
    type:SUBSTRACT,
    data:counter
})
