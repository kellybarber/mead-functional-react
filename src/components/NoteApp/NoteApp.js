import React, { useState, useEffect, useReducer }  from 'react'
import { componentStyle } from 'Styles/base'

import NoteList     from 'Components/NoteList/NoteList'
import NoteForm     from 'Components/NoteForm/NoteForm'
import notesReducer from 'Reducers/notes'

export default () => {
  const [ notes, dispatch ] = useReducer(notesReducer, [])

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if (notes) dispatch({ type : 'POPULATE_NOTES', notes })
  }, [])

  useEffect(() => {
    const notesString = JSON.stringify(notes)
    localStorage.setItem('notes', notesString)
  }, [ notes ])

  return (
    <div style={componentStyle}>
      <h1>Notes</h1>
      <NoteList notes={notes} dispatch={dispatch} />
      <p style={{ margin : '0' }}>Add Note:</p>
      <NoteForm dispatch={dispatch} />
    </div>
  )
}