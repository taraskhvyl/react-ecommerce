import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSX5wWMyYEyiAcf5aobfa8ay496EqSU_g",
  authDomain: "react-ecommmerce-v2.firebaseapp.com",
  projectId: "react-ecommmerce-v2",
  storageBucket: "react-ecommmerce-v2.appspot.com",
  messagingSenderId: "1020845474209",
  appId: "1:1020845474209:web:bac32e8c509cd23d5ecbe0"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userDocRef;
}
