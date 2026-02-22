import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setUserData } from '../redux/userSlice'

const getCurrentUser = () => {
  // useDispatch helps send data to Redux
    const dispatch = useDispatch()
      // useEffect runs when component loads
  useEffect(()=>{
    // Function to fetch user from backend
    const fetchUser = async ()=>{
        try {
           // Call backend API to get current logged-in user
           const result = await axios.get(serverUrl + "/api/users/getcurrentuser", {withCredentials:true} ) // sends cookies (for login session)
           // Save user data in Redux store
            dispatch(setUserData(result.data))
        } catch (error) {
           // If error happens (user not logged in)
            console.log(error)
            // Set userData as null in Redux
            dispatch(setUserData(null))
        }
    }
    // Call the function
    fetchUser() //Empty dependency → runs only once when component loads

  },[])
}

export default getCurrentUser

