import { useState } from "react";
import FormInput from '../form-input/form-input.component'
import { signInWithGooglePopup, createUserDocumentFromAuth,signInUserLoginWithEmailAndPassword } from "../../utils/firebase/firebase.util";
import './sign-in.styles.scss'
import Button from "../button/button.component";
const defaultFormFields = {

    email: '',
    password: '',

}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  email, password } = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    };
    const signInWithGoogle = async()=>{
        const {user}=await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }; 
    const handleSubmit = async (event) => {
        event.preventDefault();

   
       
        try {
            const res=await signInUserLoginWithEmailAndPassword(email,password);
            console.log(res);
            
            resetFormField();

        } catch (error) {
           
            switch(error.code)
            {
                case 'auth/wrong-password':
                    alert("Incorrect Password")
                    break;
                case 'auth/user-not-found':
                    alert("User not Found")
                    break;
                default:
                    console.log(error);

            }
           
        }
    }



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });

    };

    return (<div className="sign-up-container">
        <h2>Already have an account</h2>
        <span>Sign In with email and password</span>
        <form onSubmit={handleSubmit}>
            
        <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />

        <FormInput  label='Password' type="password" required onChange={handleChange} name="password" value={password} />
        
        <div className="buttons">
            <Button  type="submit">Sign In</Button>
            <Button buttonType={'google'} onClick={signInWithGoogle}>Google sign in </Button>
        </div>
    </form>
    </div>

    );
}

export default SignInForm;