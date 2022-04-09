import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>
        SIGN IN
      </button>
      <SignUp />
    </div>
  );
}

export default SignIn;
