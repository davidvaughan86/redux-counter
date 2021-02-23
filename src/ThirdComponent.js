  
import React from 'react'
import { useSelector } from "react-redux";

export default function ThirdComponent() {
    const count = useSelector(state => state.count)
    return (
      <div>
        <h1>I'm the third component</h1>
        <p>I want to display the count as well</p>
        <p>Count: {count}</p>
      </div>
    );
}