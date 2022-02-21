import { useEffect, useState, useContext } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'
import axios from 'axios'

function CheckListItems() {
  const { token } = useContext(AuthContext)
  const { id } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/checklist/${id}/item`)
    console.log(res)
    setItems(res.data.data)
  }

  if(!token){
    return <Navigate to="/login" />
  }

  return (
    <div>
      {
        items.map(item => 
          <div className="checklist-item">
            <h1>{item.name}</h1>
          </div>
        )
      }
      <Link to="/" className="mt-3">Back to home</Link>
    </div>
  );
}

export default CheckListItems;