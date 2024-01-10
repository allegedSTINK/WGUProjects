import React from 'react'
import Button from './Button'

const MediumCard = ({title, body, buttonText}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      {body}
      <Button label={buttonText} />
    </div>
  )
}

export default MediumCard
