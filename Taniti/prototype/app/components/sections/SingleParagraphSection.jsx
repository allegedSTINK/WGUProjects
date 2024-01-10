import React from 'react'

const SingleParagraphSection = ({title, body}) => {
  return (
    <section>
      <h2 className='underline mb-5'>{title}</h2>
      <p className='ms-3 indent-4'>{body}</p>
    </section>
  )
}

export default SingleParagraphSection
