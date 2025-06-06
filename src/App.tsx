
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ModalProvider } from '@/components/ui/modal/modal.context'
import { SearchProvider } from '@/components/ui/search/search.context'
import { CartProvider } from '@/store/quick-cart/cart.context'
import AppRoutes from './routes/AppRoutes'
import ManagedModal from '@/components/ui/modal/managed-modal'
import ManagedDrawer from '@/components/ui/drawer/managed-drawer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Router>
          <SearchProvider>
            <ModalProvider>
              <CartProvider>
                <AppRoutes />
                <ManagedModal />
                <ManagedDrawer />
                <ToastContainer autoClose={2000} theme="colored" />
              </CartProvider>
            </ModalProvider>
          </SearchProvider>
        </Router>
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default App
