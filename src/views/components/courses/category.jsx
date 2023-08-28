import React from 'react'

const Category = ({categories}) => {
  return (
    <div>
      {
        categories.map(item => <p>{item}</p>)
      }
    </div>
  )
}

export default Category