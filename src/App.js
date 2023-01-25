
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';

import Header from './Shered/Header';


function App() {
  return (
    <div>
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  );
}

export default App;
