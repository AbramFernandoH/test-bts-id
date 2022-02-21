import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
import axios from 'axios'

function Login() {
  const { dispatchAuth } = useContext(AuthContext)
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(data.username && data.password){
      const res = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/login`, data)
      if(res.data.message === 'Proses view detail berhasil' && res.data.statusCode === 2110){
        dispatchAuth({ type: 'LOGIN', payload: { token: res.data.data.token } })
        setData({})
        return navigate('/')
      }
    }
  }

  return(
    <div className="Register container">
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit} className='container'>
        <div>
          <label className="form-label">Username: </label>
          <input type="text" name="username" onChange={handleChange} className='form-control' />
        </div>
        <div>
          <label className="form-label">Password: </label>
          <input type="password" name="password" onChange={handleChange} className='form-control' />
        </div>
        <div className="d-flex flex-column">
          <button className='btn btn-primary mt-2'>Login</button>
          <Link to='/register'>Didn't have account yet register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;