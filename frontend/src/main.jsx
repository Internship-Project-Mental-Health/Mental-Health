import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HealthproductPage from './pages/HealthproductPage.jsx';
import OurServicesPage from './pages/OurServicesPage.jsx';
import OurTeamPage from './pages/OurTeamPage.jsx';
import AboutOurTeam from './Components/OurTeam/OurTeam_Inner/AboutOurTeam.jsx';
import ProductDescriptionPage from './pages/ProductDescriptionPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Products",
    element: <HealthproductPage />,
  },
  {
    path: "/Services",
    element: <OurServicesPage />,
  },
  {
    path: "/OurTeam",
    element: <OurTeamPage />,
  },
  {
    path: "/OurTeam/Details",
    element: <AboutOurTeam />,
  },
  {
    path:  "/Product/Product_Description/:id",
    element: <ProductDescriptionPage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
