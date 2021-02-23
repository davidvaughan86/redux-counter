import 
{incrementCounter} from '../actions/action'
import actionTypes from '../action-types/actions'

const initialState = {
    count:0
}


const RootReducer =(state=initialState, action) => { // declaring the function and using state=object. object will cotain the initial values. Action as the second argument.
    switch(action.type) { // switch (action dot type) function
        case actionTypes.INCREMENT: // actions are allCaps end with colon
            return {count: state.count +1} // return ACTION'S action
        case actionTypes.DECREMENT:
            return {count: state.count -1}
        default:
            return state
    }
}

export default RootReducer