import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUser from './ViewUser';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main-page' element={<MainPage />}>
          <Route path='/main-page/view' element={<ViewUser />}></Route>
          <Route path='/main-page/create' element={<CreateUser />}></Route>
          <Route path='/main-page/update/:id' element={<UpdateUser />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
