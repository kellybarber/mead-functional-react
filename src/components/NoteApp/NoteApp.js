import React, { useState, useEffect, useReducer } from 'react'
import Note from 'Components/Note/Note'
import notesReducer from 'Reducers/notes'
import { componentStyle, inputStyle, buttonStyle } from 'Styles/base'

export default () => {
  const [ notes, dispatch ] = useReducer(notesReducer, [])
  const [ title, setTitle ] = useState('')
  const [ body, setBody ]   = useState('')

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if (notes) dispatch({ type : 'POPULATE_NOTES', notes })
  }, [])

  useEffect(() => {
    const notesString = JSON.stringify(notes)
    localStorage.setItem('notes', notesString)
  }, [ notes ])

  const addNote = e => {
    e.preventDefault()
    dispatch({ type : 'ADD_NOTE', note : { title, body } })

    setTitle('')
    setBody('')
  }

  const removeNote = title => {
    dispatch({ type : 'REMOVE_NOTE', title })
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