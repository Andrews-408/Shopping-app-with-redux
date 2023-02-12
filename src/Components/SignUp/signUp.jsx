import {useDispatch} from "react-redux"
import { signedUpActions } from "../../Redux-Store/SignUp-slice";

const SignUp = () => {
    const dispatch = useDispatch();
    const signUpHandler = () => {
        dispatch(signedUpActions.signUp())
    }
    return(
        <div className="form-wrapper">
            <form className="form-container">
                <h2>Sign Up</h2>
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
                    placeholder="New Password" 
                    className="form-input" 
                />
                <input 
                    type='password' 
                    placeholder="Confirm Password" 
                    className="form-input" 
                />
                <button 
                    onClick={signUpHandler}
                    className='submit-btn'>
                        Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp