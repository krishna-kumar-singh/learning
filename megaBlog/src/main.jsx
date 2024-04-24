import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Protected} from './component/index.js'
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import LoginPage from './pages/Login.jsx'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/sign-in',
          element:(
            <Protected authentication={false}>
              <LoginPage/>
            </Protected>
          ) 
        },
        {
          path:'/signup',
          element:(
            <Protected authentication={false}>
              <Signup/>
            </Protected>
          ) 
        },
        {
          path:'/all-posts',
          element:(
            <Protected authentication>
              <AllPost/>
            </Protected>
          ) 
        },
        {
          path:'/add-post',
          element:(
            <Protected authentication>
              {' '}
              <AddPost/>
            </Protected>
          ) 
        },
        {
          path:'/edit-post/:slug',
          element:(
            <Protected authentication>
              {' '}
              <EditPost/>
            </Protected>
          ) 
        },
        {
          path:'/post/:slug',
          element:<Post/>
        }
      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
