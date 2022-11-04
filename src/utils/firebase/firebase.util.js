import {initializeApp} from 'firebase/app';
import 
{getAuth,
signInWithPopup,
signInWithRedirect,
GoogleAuthProvider} from 'firebase/auth';
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

const provider=new GoogleAuthProvider();


provider.setCustomParameters(
    {
        prompt:"select_account"
    }
);


export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);


export const db=getFirestore();

export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot.exists());


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
            });
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
}