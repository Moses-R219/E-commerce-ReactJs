import SignUpForm from '../../components/sign-up/sign-up-form.component'
import SignInForm from "../../components/sign-in/sign-in-form.component";
import './authentication.styles.scss'
const Authentication=()=>{
//    useEffect(()=>{
//     const use=async()=>{
//     const response=await getRedirectResult(auth);
//     console.log(response);    
//    }},[]);
    return(
        <div className='auth-container'>
            <SignInForm/>
            <SignUpForm/>
            
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign with Google Redirect
            </button> */}
        </div>
    )
}

export default Authentication;