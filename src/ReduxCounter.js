import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ThirdComponent from './ThirdComponent'
export default function ReduxCounter () {

    const dispatch=useDispatch()
    const count = useSelector(state => state.count)



    return (
        <div>
            <h1>counter</h1>
            <p>Count:{count}</p>
            <button OnClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>  
            <button OnClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>


            <ThirdComponent />
        </div>
    )
}

