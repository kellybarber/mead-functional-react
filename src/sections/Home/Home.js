import React from 'react'
import NoteApp from 'Components/NoteApp/NoteApp'
import Counter from 'Components/Counter/Counter'

export default () => (
  <div style={sectionStyle}>
    <NoteApp/>
    <Counter/>
  </div>
)

const sectionStyle = {
  padding : '20px'
}