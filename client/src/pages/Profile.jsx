import React, { useEffect, useState } from 'react'
import './Profile.scss'
import { viewProfile } from '../ApiCalls';

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      try {
        const apiData = await viewProfile();
        setData(apiData)
        console.log('api data', apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile()
  }, [])
  return (
    <div className='Profile'>
      <div className="container">
        <h1>Username : {data.username}</h1>
        <h1>Email : {data.email}</h1>
      </div>
    </div>
  )
}

export default Profile