import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './component/home';
import { crudAction } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Create from './component/create';
import Nav from './component/nav';
import Update from './component/update';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'create', element: <Create /> },
      { path: 'update/:id', element: <Update /> }

    ]
  }
]);


function App() {
  
  return <RouterProvider router={router}/>;
}

export default App;
