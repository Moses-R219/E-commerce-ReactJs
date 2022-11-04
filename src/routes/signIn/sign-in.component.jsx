import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
const SignIn=()=>{
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
       const userDocRef=await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <button onClick={logGoogleUser}>
                Sign with Google account
            </button>
        </div>
    )
}

export default SignIn;