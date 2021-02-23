import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import firebase from "firebase/app";
import "firebase/auth";
export interface IUser {
  email: string;
  uid: string;
}

export interface IAuthContextValue {
  checkedAuth: boolean;
  user: IUser | null;
  signedIn: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  authModalIsOpen: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
}

export const DEFAULT_AUTH_CONTEXT_VALUE: IAuthContextValue = {
  checkedAuth: false,
  user: null,
  signedIn: false,
  authModalIsOpen: false,
  openAuthModal: () => {
    return;
  },
  closeAuthModal: () => {
    return;
  },
  resetPassword: async () => {
    return;
  },
  signOut: async () => {
    return;
  },
  signUp: async () => {
    return;
  },
  signIn: async () => {
    return;
  },
};

export const AuthContext = createContext<IAuthContextValue>(
  DEFAULT_AUTH_CONTEXT_VALUE
);
interface IAuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<IAuthContextProviderProps> = (
  props
) => {
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);

  const openAuthModal = useCallback(() => {
    setAuthModalIsOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setAuthModalIsOpen(false);
  }, []);

  const signOut = useCallback(() => {
    return firebase.auth().signOut();
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  }, []);

  const resetPassword = useCallback((email: string) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .catch(() => {});
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setCheckedAuth(true);
      if (!currentUser) {
        setSignedIn(false);
        setUser(null);
      } else {
        setUser({
          email: typeof currentUser.email === "string" ? currentUser.email : "",
          uid: currentUser.uid,
        });
        setSignedIn(true);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        checkedAuth,
        user,
        signedIn,
        authModalIsOpen,
        openAuthModal,
        closeAuthModal,
        resetPassword,
        signOut,
        signIn,
        signUp,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export function useAuth(): IAuthContextValue {
  return useContext(AuthContext);
}