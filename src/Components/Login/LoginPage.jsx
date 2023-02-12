import { useDispatch } from "react-redux";
import { authActions } from "../../Redux-Store/Auth-slice";
import { signedUpActions } from "../../Redux-Store/SignUp-slice";
import "./LoginPage.css"


const LoginPage = () => {
    const dispatch = useDispatch();

    const signUpHandler = () => {
        dispatch(signedUpActions.signUp())
    }

    const signInHandler = () => {
        dispatch(authActions.login())
    }
    
    return(
        <div className="form-wrapper">
            <form className="form-container">
                <h2>Login</h2>
                <input 
                    type='text' 
                    placeholder='Username' 
                    className="form-input"
                />
                <input 
                    type='email' 
                    placeholder='Email' 
                    className='form-input'
                />
                <input 
                    type='password' 
                    placeholder="Password" 
                    className="form-input" 
                />
                <button 
                    onClick={signInHandler} 
                    className='submit-btn'>
                        Login
                </button>
                <p>Do not have an account? {' '}
                    <span onClick={signUpHandler}>Sign up</span>
                </p>
            </form>   
        </div>
    )
}

export default LoginPage