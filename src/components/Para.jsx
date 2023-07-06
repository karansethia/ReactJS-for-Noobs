import React from 'react'

const Para = (props) => {
  console.log('Paragraph rendered')
  return (
    <p>
      {props.show ? 'This is a paragraph' : ' '}
    </p>
  )
}

export default Para