import { useEffect } from "react";
import {getRedirectResult} from 'firebase/auth';
import {auth, signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.util";
import SignUpForm from './../../components/sign-up/sign-up-form.component'
const Sign=()=>{
//    useEffect(()=>{
//     const use=async()=>{
//     const response=await getRedirectResult(auth);
//     console.log(response);    
//    }},[]);
    const logGoogleUser = async()=>{
        const {user}=await signInWithGooglePopup();
       const userDocRef=await createUserDocumentFromAuth(user);
    };
   

    return(
        <div>
            
            <h5>Sign In</h5>
            <button onClick={logGoogleUser}>
                Sign with Google account
            </button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign with Google Redirect
            </button> */}
        </div>
    )
}

export default Sign;