// @ts-nocheck
import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { httpInterceptedServices } from '../services/http-requests'
import Category from '../views/components/courses/category'

const CourseCategories = () => {
  const dataCategories = useLoaderData()
  return (
    <div>
      <Suspense fallback={<h2>در حال دریافت اطلاعات...</h2>}>
        <Await resolve={dataCategories.categories}>
          {
            category => <Category categories={category}/>
          }
        </Await>
      </Suspense>
    </div>
  )
}

export default CourseCategories

export const CourseCategoriesLoader = async () => {
  return defer({
    categories : laodedCourseCategories()
  })
}

const laodedCourseCategories = async () => {
  const response = await httpInterceptedServices.get('products/categories')
  return response.data
}