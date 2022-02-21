import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(data.username && data.email && data.password){
      const res = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/register`, data)
      if(res.data.message === 'Proses save berhasil' && res.data.statusCode === 2000){
        setData({})
        return navigate('/login')
      }
    }
  }

  return (
    <div className="Register container">
      <h1>Register</h1>
      <form method="post" onSubmit={handleSubmit} className='container'>
        <div>
          <label className="form-label">Username: </label>
          <input type="text" name="username" onChange={handleChange} className='form-control' />
        </div>
        <div>
          <label className="form-label">Email: </label>
          <input type="email" name="email" onChange={handleChange} className='form-control' />
        </div>
        <div>
          <label className="form-label">Password: </label>
          <input type="password" name="password" onChange={handleChange} className='form-control' />
        </div>
        <button className='btn btn-primary mt-2'>Register</button>
      </form>
    </div>
  );
}

export default Register;