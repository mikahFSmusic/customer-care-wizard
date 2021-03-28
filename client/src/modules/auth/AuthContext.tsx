import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../firebase";
import firebase from "firebase/app";

export const DEFAULT_AUTH_CONTEXT_VALUE: IAuthContextValue = {
  checkedAuth: false,
  currentUser: null,
  signedIn: false,
  signInWithGoogle: async () => {
    return;
  },
  signOut: async () => {
    return;
  },
};

export const AuthContext = createContext<IAuthContextValue>(
  DEFAULT_AUTH_CONTEXT_VALUE
);

export const AuthProvider: React.FC<IAuthContextProviderProps> = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>();
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [checkedAuth, setCheckedAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithRedirect(provider);
  };

  const signOut = useCallback(() => {
    return auth.signOut();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log("unsubscribe triggered");
      setCheckedAuth(true);
      setLoading(false);
      if (!currentUser) {
        setSignedIn(false);
        setCurrentUser(null);
      } else {
        setCurrentUser(currentUser);
        setSignedIn(true);
        console.log("signed in");
        console.log(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signInWithGoogle, signOut, signedIn, checkedAuth }}
    >
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
