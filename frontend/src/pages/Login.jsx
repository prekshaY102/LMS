import React,{useState} from 'react'
import logo from '../assets/logo.png'
import google from '../assets/google.png'
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { serverUrl } from '../App';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';


function Login() {
   // State to show/hide password
  const [show, setShow] = useState(false)
    // State to store email input
  const [email, setEmail] = useState("")
   // State to store password input
  const [password, setPassword] = useState("")
  // State for loading spinner
  const [loading ,setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleLogin = async ()=>{
       // Start loader
      setLoading(true)
      try {
        // Sending POST request to backend
        const result = await axios.post(serverUrl + "api/auth/login", {email, password}// Sending email & PASSWORD
        ,{withCredentials:true})// Allows cookies/session
         // Save user data in Redux store
        dispatch(setUserData(result.data))
        setLoading(false)
        toast.success("Login Successfully")
        navigate("/")
      } catch (error) {
        console.log(error)
         // Show error message from backend
        setLoading(false)
         // Show error message from backend
        toast.error(error.response.data.message)
      }
  }
    return (
      <div className='bg-[#dddbdb] w-screen h-screen flex items-center justify-center'>
          <form className='w-[90%] md:w-200 h-150 bg-[white] shadow-xl rounded-2xl flex' onSubmit={(e)=>e.preventDefault}>
              {/*Left div*/}
              <div  className='md:w-[50%] w-full h-full flex flex-col items-center justify-center gap-3'>
               <div>
                <h1 className='font-semibold text-[black] text-2xl'>Welcome Back!!</h1>
                <h2 className='text-[#999797] text-[18px]'>Login Your Account</h2>
               </div> 
               
               <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                <label htmlFor='email' className='font-semibold'>Email</label>
                <input id='email' type='email' className='border w-full h-8.75 border-[#e7e6e6] text-[15px] px-5' placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
               </div>
               <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
                <label htmlFor='password' className='font-semibold'>Password</label>
                <input id='password' type={show ? "text" : "password"} className='border w-full h-8.75 border-[#e7e6e6] text-[15px] px-5' placeholder='Your Password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
               { !show ? <IoMdEyeOff className='absolute w-5 h-5 cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/> :
                <IoEye className='absolute w-5 h-5 cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/>}
               </div>
          
              <button className='w-[80%] h-10 bg-[#3b2c81] text-white cursor-pointer flex items-center justify-center rounded-[5px]' disabled={loading} onClick={handleLogin}>{loading ? <ClipLoader size={30} color='white'/> : "Login"}</button>
              <span className='text-[13px] cursor-pointer text-[#585757]' onClick={()=>navigate("/forget")}>Forget your password?</span>
              <div className='w-[80%] flex items-center gap-2'>
                <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
                <div className='w-[50%] text-[15px] text=[#6f6f6f] flex items-center justify-center'>Or Countinue</div>
                <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
              </div>
              <div className='w-[80%] h-10 border border-[black] rounded-[5px] flex items-center justify-center'>
                <img src={google} className='w-6.25' alt='google'/>
                <span>oogle</span>
              </div>
              <div className='text-[#6f6f6f]'> Create new account <span className='underline underline-offset-1 text-[black] cursor-pointer' onClick={()=>navigate("/signup")} >SignUp</span></div>
              </div>

              {/*right div*/}
              <div  className='w-[50%] h-full rounded-r-2xl bg-[#3b2c81] md:flex items-center justify-center flex-col hidden'>
                  <img src={logo} alt='logo' className='w-80 '/>
                  <span className='text-3xl text-white shadow-amber-700'>E-LEARNING</span>
              </div>
          </form>
      </div>
  )
}

export default Login