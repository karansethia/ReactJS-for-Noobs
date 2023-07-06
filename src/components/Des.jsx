import React from 'react'

const Des = () => {

  console.log('Description rendered');
  return (
    <p>Hi this is a description section</p>
  )
}

export default React.memo(Des);