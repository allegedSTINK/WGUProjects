import React from 'react'

const SectionWithClass = ({title, body, classes}) => {
  return (
    <sectionWithClass>
      <h2>{title}</h2>
      <div className={classes}>
        {body}
      </div>
    </sectionWithClass>
  )
}

export default SectionWithClass
