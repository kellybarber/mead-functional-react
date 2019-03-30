import React, { useState, useContext } from 'react'
import { inputStyle, buttonStyle } from 'Styles/base'

import NotesContext from 'Context/notes-context'

export default () => {
  const { dispatch }        = useContext(NotesContext)
  const [ title, setTitle ] = useState('')
  const [ body, setBody ]   = useState('')

  const addNote = e => {
    e.preventDefault()
    dispatch({ type : 'ADD_NOTE', note : { title, body } })

    setTitle('')
    setBody('')
  }

  return (
    <form style={formStyle} onSubmit={addNote}>
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
      <button style={buttonStyle}>Add Note</button>
    </form>
  )
}

const formStyle = {
  display       : 'flex',
  flexDirection : 'column',
  alignItems    : 'center'
}