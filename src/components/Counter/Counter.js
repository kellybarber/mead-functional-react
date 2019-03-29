import React, { useState } from 'react'

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
const componentStyle = {
  display       : 'flex',
  flexDirection : 'column',
  alignItems    : 'center',
  margin        : '50px 0',
  padding       : '20px 0',
  border        : '1px solid black',
  borderRadius  : '5px',
}

const buttonContainerStyle = {
  display        : 'flex',
  justifyContent : 'space-between',
  width          : '342px',
}

const buttonStyle = {
  padding      : '10px',
  borderRadius : '5px',
  cursor       : 'pointer'
}

const inputStyle = {
  width        : '320px',
  margin       : '20px 0',
  padding      : '10px',
  borderRadius : '5px',
}