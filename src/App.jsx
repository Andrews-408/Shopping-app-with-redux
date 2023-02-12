import './App.css';
import {useEffect} from 'react'
import LoginPage from './Components/Login/LoginPage';
import SignUp from './Components/SignUp/signUp';
import {useDispatch, useSelector} from 'react-redux'
import Shopping from './Components/Shopping/Shopping';
import Notification from './Components/Notification/Notification';
import { uiActions } from './Redux-Store/Ui-slice';
let isFirstRender = true
function App() {
  const login = useSelector(state=> state.auth.loggedIn)
  const register = useSelector(state=>state.signUp.signedUp)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const notification = useSelector(state=>state.ui.notification)

  useEffect(()=>{
    if(isFirstRender){
      isFirstRender = false
      return
    }
    const sendRequest = async () => {
      
      //Sending request
      const res = await  fetch('https://redux-http-807d2-default-rtdb.firebaseio.com/cartitem.json', {
        method: 'PUT',
        body : JSON.stringify(cart)
      })  
      dispatch(uiActions.showNotification({
        type:'warning',
        message: 'sending request to server',
        open: true
      }))

      // request successful
      const data = res.json()
      dispatch(uiActions.showNotification({
        type:'success',
        message: 'successfully sent request to database',
        open: true
      }))
    }

    // error occured
    sendRequest().catch(err=>{
      dispatch(uiActions.showNotification({
        type:'error',
        message: 'request failed',
        open: true
      }))
    })
  },[cart.itemList])

  return (
    <>
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {login ? <Shopping /> : register ? <LoginPage />: <SignUp />}
    </>
  )
}

export default App;
