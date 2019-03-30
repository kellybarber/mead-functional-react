import React, { useContext } from 'react'

import NotesContext from 'Context/notes-context'
import Note         from 'Components/Note/Note'

export default () => {
  const { notes } = useContext(NotesContext)

  return (
    <div style={notesContainerStyle}>
      {notes.map(note => <Note note={note} key={note.title}/>)}
    </div>
  )
}

const notesContainerStyle = {
  position            : 'relative',
  display             : 'grid',
  gridTemplateColumns : 'repeat(4, 1fr)',
  gridGap             : '20px',
  maxWidth            : '1000px',
  margin              : '0 0 20px'
}