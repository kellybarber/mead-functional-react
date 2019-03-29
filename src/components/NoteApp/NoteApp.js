import React, { useState, useEffect } from 'react'
import { componentStyle, inputStyle, buttonStyle } from 'Styles/base'

const notesData = JSON.parse(localStorage.getItem('notes'))

export default () => {
  const [ title, setTitle ] = useState('')
  const [ body, setBody ]   = useState('')
  const [ notes, setNotes ] = useState(notesData || [])

  useEffect(() => {
    const notesString = JSON.stringify(notes)
    localStorage.setItem('notes', notesString)
  })

  const addNote = e => {
    e.preventDefault()
    setNotes([ ...notes, { title, body }])

    setTitle('')
    setBody('')
  }

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title))
  }

  const renderNote = note => (
    <div style={ noteStyle } key={note.title}>
      <h3 style={{ wordBreak : 'break-all' }}>{ note.title }</h3>
      <p style={{ wordBreak : 'break-all' }}>{ note.body }</p>
      <button
        style={ removeButtonStyle }
        onClick={() => removeNote(note.title)}
      >&times;</button>
    </div>
  )

  return (
    <div style={componentStyle}>
      <h1>Notes</h1>
      <div style={ notesContainerStyle }>
        { notes.map(note => renderNote(note) )}
      </div>
      <p style={{ margin : '0' }}>Add Note:</p>
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
    </div>
  )
}

//Styles
const notesContainerStyle = {
  position            : 'relative',
  display             : 'grid',
  gridTemplateColumns : 'repeat(4, 1fr)',
  gridGap             : '20px',
  maxWidth            : '800px',
  margin              : '0 0 20px'
}

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

const formStyle = {
  display       : 'flex',
  flexDirection : 'column',
  alignItems    : 'center'
}