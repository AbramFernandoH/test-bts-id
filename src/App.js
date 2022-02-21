import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import CheckList from './pages/CheckList'
import CheckListItems from './pages/CheckListItems'
import CheckListItemDetail from './pages/CheckListItemDetail'
import { AuthProvider } from './context/auth/AuthContext'
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CheckList />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='detail/:id' element={<CheckListItems />} />
            <Route path='detail/:id/detail/:itemId' element={<CheckListItemDetail />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
