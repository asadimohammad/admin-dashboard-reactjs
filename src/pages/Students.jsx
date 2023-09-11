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

export const studentsLoader = async ({request}) => {
  return defer({
    students : loadedStudents(request)
  })
}

const loadedStudents = async (request) => {
  const page = new URL(request.url).searchParams.get('page') || 1
  const pageSize = 5
  const totalRecords = 10
  let url = 'users'
  url += `?page=${page}&limit=${pageSize}`
  let response = await httpInterceptedServices.get(url)
  response = response.data
  return {response , pageSize , totalRecords}
}