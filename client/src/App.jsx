import React from 'react'
import { AckBar } from './components/navigation/AckBar';
import { NavBar } from './components/navigation/NavBar';
import { Routing } from './components/navigation/Routing';

export const App = () => {
  return (
	  <>
      <NavBar/>
      <AckBar />
      <Routing />
    </>
  )
}
