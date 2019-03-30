import React from 'react'
import { inputStyle, buttonStyle } from 'Styles/base'

export default ({ addNote, title, setTitle, body, setBody }) => (
  <form style={ formStyle } onSubmit={addNote}>
    <input
      required
      style={inputStyle}
      placeholder={'Title'}
      value={title}
      onChange={e => setTitle(e.target.value)}
    />
    <textarea
      style={{...inputStyle, marginTop: '0'}}
      placeholder={'Body'}
      value={body}
      onChange={e => setBody(e.target.value)}
    />
    <button style={ buttonStyle }>Add Note</button>
  </form>
)

const formStyle = {
  display       : 'flex',
  flexDirection : 'column',
  alignItems    : 'center'
}