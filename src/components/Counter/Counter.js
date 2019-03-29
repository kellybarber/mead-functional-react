import React, { useState } from 'react'
import { componentStyle, inputStyle, buttonStyle } from 'Styles/base'

export default ({ initialCount = 0 }) => {
  const [ count, setCount ] = useState(initialCount)
  const [ text, setText]    = useState('count')

  return (
    <div style={ componentStyle }>
      <h1 style={{ margin : '20px 0' }} >
        The current {text} is: {count}
      </h1>
      <div style={ buttonContainerStyle }>
        <button style={ buttonStyle } onClick={() => setCount(count + 1)}>
          Increment Me
        </button>
        <button style={ buttonStyle } onClick={() => count > 0 && setCount(count - 1)}>
          Decrement Me
        </button>
        <button style={ buttonStyle } onClick={() => setCount(initialCount)}>
          Reset Me
        </button>
      </div>
      <input style={inputStyle} value={text} onChange={e => setText(e.target.value)}/>
    </div>
  )
}

// Styles
const buttonContainerStyle = {
  display        : 'flex',
  justifyContent : 'space-between',
  width          : '342px',
}