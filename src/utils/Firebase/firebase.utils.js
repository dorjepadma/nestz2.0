import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPFl2JIA2pN79uHvUyLkM8wM3Dre48phM",
  authDomain: "nestz-a4b67.firebaseapp.com",
  projectId: "nestz-a4b67",
  storageBucket: "nestz-a4b67.appspot.com",
  messagingSenderId: "426027335974",
  appId: "1:426027335974:web:386a91caa53f54266901e7",
  measurementId: "G-HNNNRCZM0G"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);
export const signInWithFacebookRedirect = () => signInWithRedirect(auth, facebookProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

const userSnapshot = await getDoc(userDocRef);

//if user data does not exist, create it
if(!userSnapshot.exists()) {
  const { displayName, email,} = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
    });
  } catch (error) {
    console.log('error creating user', error.message);
  };
  
}
return userDocRef
//return user data
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password);
}