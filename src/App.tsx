import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import GettingStartedPage from './pages/GettingStartedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: 'getting-started',
    element: <GettingStartedPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
