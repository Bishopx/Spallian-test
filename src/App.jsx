import { Outlet, RouterProvider, createBrowserRouter, NavLink } from 'react-router-dom'
import { Weather } from './components/Weather'
import { Pokemon } from './components/Pokemon'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
      {
        path: "/weather", 
        element: <Weather/>
      },
      {
        path: "/pokemon", 
        element: <Pokemon/>
      },
      ]
    }
  ])

function Home() {
  return <>
  <header>
    <nav className='navBar'>
      <NavLink className="navCell" to="/weather">Meteo</NavLink>
      <NavLink className="navCell" to="/pokemon">Pokemon</NavLink>
    </nav>
    <div>
      <Outlet/>
    </div>
  </header>
  </>
}
function App() {

  return <RouterProvider router={router}/>
}

export default App;