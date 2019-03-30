import React from 'react'
import Note  from 'Components/Note/Note'

export default ({ notes, dispatch }) => {
  const removeNote = title => dispatch({ type : 'REMOVE_NOTE', title })

  return (
    <div style={notesContainerStyle}>
      {notes.map(note => <Note note={note} removeNote={removeNote} key={note.title}/>)}
    </div>
  )
}

const notesContainerStyle = {
  position            : 'relative',
  display             : 'grid',
  gridTemplateColumns : 'repeat(4, 1fr)',
  gridGap             : '20px',
  maxWidth            : '800px',
  margin              : '0 0 20px'
}