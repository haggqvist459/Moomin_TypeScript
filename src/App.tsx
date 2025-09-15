import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/utils';
import { MainLayout } from '@/layouts'

const App = () => {

  return(
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>

          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;