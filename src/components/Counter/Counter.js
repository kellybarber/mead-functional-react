import React, { useState } from 'react'

export default ({ initialCount = 0 }) => {
  const [ count, setCount ] = useState(initialCount)

  const buttonStyle = {
    margin       : '0 20px',
    padding      : '10px',
    borderRadius : '5px',
    cursor       : 'pointer'
  }

  return (
    <div>
      <h1 style={{ margin : '20px' }} >
        Hello, this is count: {count}
      </h1>
      <button style={ buttonStyle } onClick={() => setCount(count + 1)}>
        Increment Me
      </button>
      <button style={ buttonStyle } onClick={() => count > 0 && setCount(count - 1)}>
        Decrement Me
      </button>
      <button style={ buttonStyle } onClick={() => setCount(0)}>
        Reset Me
      </button>
    </div>
  )
}