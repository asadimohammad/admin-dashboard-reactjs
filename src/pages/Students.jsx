// @ts-nocheck
import React, { Suspense } from 'react'
import { httpInterceptedServices } from '../services/http-requests'
import { Await, defer, useLoaderData } from 'react-router-dom'
import StudentList from '../views/components/students/student-list'

const Students = () => {
  const dataloader = useLoaderData()
  return (
    <div className='students'>
      <Suspense fallback={<h2>در حال دریافت اطلاعات...</h2>}>
        <Await resolve={dataloader.students}>
          {
            students => <StudentList students = {students}/>
          }
        </Await>
      </Suspense>
    </div>
  )
}

export default Students

export const studentsLoader = async () => {
  return defer({
    students : loadedStudents()
  })
}

const loadedStudents = async () => {
  const response = await httpInterceptedServices.get('users')
  return response.data
}