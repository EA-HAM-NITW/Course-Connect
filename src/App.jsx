import "./App.css";
import React from 'react';
import Feedback from './components/feedback.jsx';
import Assignments from "./components/assignments.jsx";

function App() {
  const courses = ['course1','course2','course3','course4'];
  return (
    <>
      
      <Feedback courses = {courses}/>
      <Assignments/>
    </>
  );
}

export default App;
