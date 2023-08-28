// @ts-nocheck
import React from 'react'
import Course from './course'

const CourseList = ({courses}) => {
  return (
    <div className='course-list d-flex gap-3 flex-wrap jc-center p-3'>
        {
          courses.map((course) => (
              <Course key={course.id} {...course}/>
            ))
        }
    </div>
  )
}

export default CourseList