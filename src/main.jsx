import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from '../layout/index.jsx';
import { ContactPage } from '../pages/ContactPage.jsx';
import { ProductPage } from '../pages/ProductPage.jsx';
import { CheckoutPage } from '../pages/CheckoutPage.jsx';
import { CheckoutSuccessPage } from '../pages/CheckoutSuccessPage.jsx';
import { Home } from '../pages/Home.jsx';
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />,
            },
            {
                path: 'checkout',
                element: <CheckoutPage />,
            },
            {
                path: 'checkoutSuccess',
                element: <CheckoutSuccessPage />,
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
