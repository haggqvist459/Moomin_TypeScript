import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { MainLayout } from '@/layouts'
import { AdminPage, DetailsPage, HomePage, ErrorPage } from './pages';

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<HomePage /> }/>
            <Route path={ROUTES.DETAILS} element={<DetailsPage />} />
            <Route path={ROUTES.ADMIN} element={<AdminPage />}/>
            <Route path={ROUTES.ERROR} element={<ErrorPage />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;