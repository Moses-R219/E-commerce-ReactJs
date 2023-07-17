import {initializeApp} from 'firebase/app';
import 
{getAuth,
signInWithPopup,
signInWithRedirect,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
 doc,
 setDoc,
 getDoc
} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCOqips1DueJA9KWbmF-R7PFAe5Nv4hFRk",
    authDomain: "mycrown-cloth.firebaseapp.com",
    projectId: "mycrown-cloth",
    storageBucket: "mycrown-cloth.appspot.com",
    messagingSenderId: "447516350760",
    appId: "1:447516350760:web:c809ced3ca33e02b5b981d",
    measurementId: "G-3ZPJFDV2VG"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider=new GoogleAuthProvider();


googleProvider.setCustomParameters(
    {
        prompt:"select_account"
    }
);


export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

export const db=getFirestore();

export const createUserDocumentFromAuth=async(
    userAuth,
    additionalInformation={}
    )=>{
    if(!userAuth) return;
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot=await getDoc(userDocRef);
    if(!userSnapshot.exists())
    {
        const {displayName,email}=userAuth;
        const createAt=new Date();

        try 
        {
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt,
                ...additionalInformation,
            });
        }
        catch(error)
        {
            console.log('Error at creating ',error.message);
        }
    }
}

export const createUserLoginWithEmailAndPassword=async(email,password)=>
{
    if(!email || !password) return ;

    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInUserLoginWithEmailAndPassword=async(email,password)=>
{
    if(!email || !password) return ;

    return await signInWithEmailAndPassword(auth,email,password);
}


export const signOutUser=async()=> await signOut(auth)



//returns the listener whenever sign In or signout returns 
export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback)