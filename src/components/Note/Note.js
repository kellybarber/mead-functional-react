import React from 'react'

export default ({ note, removeNote }) => (
  <div style={ noteStyle }>
    <h3 style={{ wordBreak : 'break-all' }}>{ note.title }</h3>
    <p style={{ wordBreak : 'break-all' }}>{ note.body }</p>
    <button
      style={ removeButtonStyle }
      onClick={() => removeNote(note.title)}
    >&times;</button>
  </div>
)

// Styles
const noteStyle = {
  position        : 'relative',
  maxWidth        : '100px',
  padding         : '10px 30px',
  backgroundColor : '#FFFF99'
}

const removeButtonStyle = {
  position   : 'absolute',
  top        : '-2px',
  right      : '0',
  fontSize   : '1.4em',
  cursor     : 'pointer',
  background : 'none',
  border     : 'none',
  outline    : 'none'
}