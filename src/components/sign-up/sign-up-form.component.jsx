import { useState } from "react";
import { createUserLoginWithEmailAndPassword,createUserDocumentFromAuth} from "../../utils/firebase/firebase.util";


const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}



const SignUpForm = () => {
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
   
    const resetFormField=()=>
    {
        setFormFields(defaultFormFields);
    }
    const handleSubmit=async(event)=>
    {
        event.preventDefault();

        if(password !== confirmPassword)
        {
            alert("Password doesnt match");
            return ;
        }
        try {
            const { user }=await createUserLoginWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormField();
            
        } catch (error) {
            if(error.code === 'auth/email-already-in-use')
            {
                alert("Cannot use email,already in use");
            }
            console.error('Error at creating user',error);
            
        }
    }



    const handleChange=(event)=>{
        const {name,value} =event.target;
        setFormFields({...formFields,[name]:value});

    };

    return (<div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <label >Display Name</label>
            <input type="text" required  onChange={handleChange} name="displayName" value={displayName}/>

            <label >Email</label>
            <input type="email" required onChange={handleChange} name="email" value={email}/>

            <label >Password</label>
            <input type="password" required onChange={handleChange} name="password" value={password}/>

            <label >Confirm Password</label>
            <input type="password" required onChange={handleChange}  name="confirmPassword" value={confirmPassword}/>
            <button type="submit">Sign Up</button>
        </form>
    </div>

    );
}

export default SignUpForm;