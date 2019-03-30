import React, { useState, useEffect, useReducer }  from 'react'
import { componentStyle } from 'Styles/base'

import NoteList     from 'Components/NoteList/NoteList'
import NoteForm     from 'Components/NoteForm/NoteForm'
import notesReducer from 'Reducers/notes'

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
      <NoteList notes={notes} removeNote={removeNote} />
      <p style={{ margin : '0' }}>Add Note:</p>
      <NoteForm addNote={addNote} title={title} setTitle={setTitle} body={body} setBody={setBody} />
    </div>
  )
}