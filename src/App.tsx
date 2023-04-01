import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { increaseCounter } from './stores/features/common/counterSlice';
import { Route,Routes } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { mainRouter } from './router/indexRouter';
function App() {
  const dispatch = useDispatch();
  const {counter} = useSelector((state:any) => state.counterReducer)
  return (
    <Routes>
      {
        mainRouter.map((element) => {
          return element.map((subelem) => {
            return <Route element = {<subelem.component/>} path = {subelem.path}></Route>
          })
        })
      }

    </Routes>
  )
}

export default App
