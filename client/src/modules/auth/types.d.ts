interface IUser {
  email: string;
  uid: string;
}

interface IAuthContextValue {
  checkedAuth: boolean;
  currentUser: firebase.User | undefined | null;
  signedIn: boolean;
  // openAuthModal: () => void;
  // closeAuthModal: () => void;
  // resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  // authModalIsOpen: boolean;
  signInWithGoogle: () => Promise<void>;
  // signUp: (email: string, password: string) => Promise<void>;
}

interface IAuthContextProviderProps {
  children: React.ReactNode;
}
