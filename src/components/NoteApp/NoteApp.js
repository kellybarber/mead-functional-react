import React, { useEffect, useReducer }  from 'react'
import { componentStyle } from 'Styles/base'

import NotesContext from 'Context/notes-context'
import notesReducer from 'Reducers/notes'
import NoteList     from 'Components/NoteList/NoteList'
import NoteForm     from 'Components/NoteForm/NoteForm'

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
    <NotesContext.Provider value={{ notes, dispatch }}>
      <div style={componentStyle}>
        <h1>Notes</h1>
        <NoteList/>
        <NoteForm/>
      </div>
    </NotesContext.Provider>
  )
}