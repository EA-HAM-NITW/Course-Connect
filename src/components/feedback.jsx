import React from 'react';
import CourseList from './courselist.jsx'

function Feedback(props) {
    const courses = props.courses;
  return (
    <>
    <h1>Feedback Form</h1>
    <h1>Courses</h1>
    <CourseList list = {courses} />
  </>
  )
}

export default Feedback;
