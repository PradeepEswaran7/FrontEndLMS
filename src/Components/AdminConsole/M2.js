import React from 'react'
import { Route, Router } from 'react-router-dom'
import Navbar from '../../UserMangementSystem/layout/Navbar'
import UserManagement from '../../UserMangementSystem/pages/UserMangement'
import AddUser from '../../UserMangementSystem/Users/AddUser'
import EditUser from '../../UserMangementSystem/Users/EditUser'

const M2 = () => {
  return (
    <div>
        
        <Navbar/>
        <UserManagement/> 
        
        
        
    </div>
  )
}

export default M2