import {setName , setEmail, setPassword} from './store/storeSlice.jsx'
import {useSelector,useDispatch} from "react-redux"
import {useRef} from 'react'

const MainHoc = ({name,value,email,emailvalue,password,passwordvalue}) => {
  const storeSlice = useSelector((state)=>state.storeSlice)
  console.log(storeSlice.name,storeSlice.email,storeSlice.password,'storeslice')
  const dispatch = useDispatch()
  const inputRefElement = useRef("")
 

  const handleName = (e)=>{
    e.preventDefault();



    dispatch(setName(e.target.value))
  
  }
  const handleEmail = (e)=>{
    e.preventDefault();
    inputRefElement.current.style.cssText = "color: white; padding: 10px; background-color: green;";

    inputRefElement.current.focus();
    dispatch(setEmail(e.target.value))
  
  }
  const handlePassword = (e)=>{
    e.preventDefault();

    // inputRefElement.current.focus();

    dispatch(setPassword(e.target.value))
  
  }
  return (
    <div>
    <form>
       <input type="text" name="name" placeholder='name'  onChange={handleName}  value={storeSlice.name} />
       <input  type="email" name="email" placeholder='email' onChange={handleEmail}  value={storeSlice.email}  ref={inputRefElement}/>
       <input type="password"  name="password" placeholder='password' onChange={handlePassword}  value={storeSlice.password}  />

    </form> 
    </div>
  )
}

export default MainHoc