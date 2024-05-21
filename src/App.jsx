import "./App.css";
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Feedback from './components/feedback.jsx';
import Assignments from "./components/assignments.jsx";
import Login from './components/login'
import Profile from './components/profile'

function App() {
  const student = {
    name: 'John Doe',
    roll: '22ECB0B31',
    degree : 'B.Tech',
    class: 'II Year, 2 Semester',
    major: 'Electronics and Communication Engineering',
    bio: 'John is a computer science student who loves coding and open-source projects.',
    profilePicture: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  }
  const courses = ['course1','course2','course3','course4'];
  return (
    <>
      <ChakraProvider>
      <Login/>
      <Profile student={student}/>
      <Feedback courses = {courses}/>
      <Assignments/>
    </ChakraProvider>
    </>
  );
}

export default App;
