import React, { useState, useEffect } from 'react'
import Note from 'Components/Note/Note'
import { componentStyle, inputStyle, buttonStyle } from 'Styles/base'

export default () => {
  const [ title, setTitle ] = useState('')
  const [ body, setBody ]   = useState('')
  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))
    if (notesData) setNotes(notesData)
  }, [])

  useEffect(() => {
    const notesString = JSON.stringify(notes)
    localStorage.setItem('notes', notesString)
  }, [ notes ])

  const addNote = e => {
    e.preventDefault()
    setNotes([ ...notes, { title, body }])

    setTitle('')
    setBody('')
  }

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title))
  }

  return (
    <div style={componentStyle}>
      <h1>Notes</h1>
      <div style={ notesContainerStyle }>
        { notes.map(note => <Note note={note} removeNote={removeNote} key={note.title} /> )}
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

const formStyle = {
  display       : 'flex',
  flexDirection : 'column',
  alignItems    : 'center'
}