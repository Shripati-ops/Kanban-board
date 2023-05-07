import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { increaseCounter } from './stores/features/common/counterSlice';
import { Route,Routes } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { mainRouter } from './router/indexRouter';
import ProtectedRoutes from './utils/protectedRoutes';
function App() {
  return (
    <Routes>
      {
        mainRouter.map((element) => {
          return element.map((subelem) => {
            if(subelem.requiresAuthentication){
              return <Route element = {<ProtectedRoutes>
                            <subelem.component/>
                            </ProtectedRoutes>} path = {subelem.path}></Route>
            }
            else{
              return <Route element = {<subelem.component/>} path = {subelem.path}></Route>
            }
          })
        })
      }

    </Routes>
  )
}

export default App
