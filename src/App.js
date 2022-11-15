import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer'
import { HomePage, Projects, Resume } from './routes/index'
import './App.css';
import './Animation.css';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => (redirect('/home')) ,
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/resume',
    element: <Resume />
  }
])

function App() {
  return (
    <div id="cplacke-portfolio">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
