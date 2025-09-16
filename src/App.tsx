import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { AdminLayout, MainLayout } from '@/layouts'

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            
          </Route>
          <Route path={ROUTES.ADMIN} element={<AdminLayout />}>

          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;