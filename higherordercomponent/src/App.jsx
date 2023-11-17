import { useState } from 'react'
import Home from './Home'
import {useSelector,useDispatch} from "react-redux"
import './App.css'
import MainHoc from './mainHoc'
import MainPassedAsProp from './mainPassedAsProp'
import MainPropsHoc from './mainPropsHoc'

import {setName , setEmail, setPassword} from './store/storeSlice.jsx'


function Counter(){
  const [count, setCount] = useState(0)
  return <div><span>{count}</span><button  onClick={()=>setCount(count-1)}>Decriment</button></div>
}

function Hoc({update}){
  return <div className='decriment'>{update}</div>

}

function HocGreen({update}){
  return <div className='green'>{update}</div>

}

function Hocolive({update}){
  return <div className='olive'>{update}</div>

}


function App() {
  const storeSlice = useSelector((state)=>state.storeSlice)
  console.log(storeSlice.name,storeSlice.email,storeSlice.password,'storeslice')
  const dispatch = useDispatch()
     const [name,setname] = useState("")
     const [email,setemail] = useState("")
     const [password,setpassword] = useState("")


    const handleName = (e)=>{
      e.preventDefault();
      dispatch(setName(e.target.value))
    
    }
    const handleEmail = (e)=>{
      e.preventDefault();
      dispatch(setEmail(e.target.value))
    
    }
    const handlePassword = (e)=>{
      e.preventDefault();
      dispatch(setPassword(e.target.value))
    
    }
  return (
    <>
     {/* use of hoc with props without redux  in one component, when we want to pass different value in the field then use props  */}

   <Hoc update={Counter()}/>
   <HocGreen update={Counter()}/>
   <Hocolive update={Counter()}/>
  {/* use of hoc with props and redux  in diffrent component, when we want to pass different value in the field then use props  */}





  {/* use of hoc with props and redux  in diffrent component, when we want to pass different value in the field then use props  */}
   <MainPassedAsProp form={<MainHoc  name={handleName}  value={storeSlice.name}
   email={handleEmail}  emailvalue={storeSlice.email}
   password={handlePassword}  passwordvalue={storeSlice.password}/>}/>
  {/* use of hoc with props and redux , when we want to pass different value in the field then use props  */}




     {/* use of hoc with props using usestate, when we want to pass different value in the field then use props  */}
   <MainPropsHoc form={<MainHoc  name={(e)=>setname(e.target.value)}  value={name}
    email={(e)=>setemail(e.target.value)}  emailvalue={email}
    password={(e)=>setpassword(e.target.value)}  passwordvalue={password}/>}/>
    {/* use of hoc with props and redux , when we want to pass different value in the field then use props  */}


    </>
  

  )
}


export default App
