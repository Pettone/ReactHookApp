import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { MultipleCustomHooks } from './exampless/MultipleCustomHooks'
import { HooksApp } from './HooksApp'
import './index.css'
import { CallbackHook } from './memo/CallbackHook'
import { MemoHook } from './memo/MemoHook'
import { Memorize } from './memo/Memorize'
import { Padre } from './tareaMemo/Padre'
import { SimpleForm } from './useEffect/SimpleForm'
import { SimpleFormWithCustomHook } from './useEffect/SimpleFormWithCustomHook'
import { Layout } from './useLayoutEffect/Layout'
import { FocusScreen } from './useRef/FocusScreen'
import { CounterApp } from './useState/CounterApp'
import { CounterCustomHook } from './useState/CounterCustomHook'
import './useReducer/intro-reducer';
import { TodoApp } from './useReducer/TodoApp'
import { MainApp } from './useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/*<React.StrictMode>*/}
    <MainApp />
    {/*</React.StrictMode>*/}
  </BrowserRouter>
)
