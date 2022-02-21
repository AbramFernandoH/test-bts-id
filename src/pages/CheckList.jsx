import { useContext, useEffect, useState } from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
import './CheckList.css'
import axios from 'axios'

function CheckList() {
  const [checklists, setChecklists] = useState([])
  const { token } = useContext(AuthContext)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/checklist`, { 'headers': { 'Authorization': `Bearer ${token}` } })
    setChecklists(res.data.data)
  }
  
  if(!token){
    return <Navigate to="/login" />
  }
  
  return (
    <div className='checklists d-flex flex-column container'>
      <h1 className='text-center'>Checlists</h1>
      {
        checklists.map(c => 
          <div className='checklist-wrapper my-2 p-3 d-flex align-items-center justify-content-between' key={c.id}>
            <Link to={`/detail/${c.id}`} className='checklist'>
              <div className='title-checklist'>
                <h1 className={
                  c.checklistCompletionStatus === false 
                  ? '' 
                  : 'text-decoration-line-through'
                }>
                  {c.name}
                </h1>
              </div>
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default CheckList;