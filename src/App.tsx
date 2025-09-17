import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { AdminLayout, MainLayout } from '@/layouts'
import { AdminPage, HomePage } from './pages';

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<HomePage /> }/>
          </Route>
          <Route path={ROUTES.ADMIN} element={<AdminLayout />}>
              <Route index element={<AdminPage />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;