import * as React from 'react';
import { Navigate } from 'react-router-dom';

const authContext = React.createContext();

export function useAuth() {
  const [authed, setAuthed] = React.useState(false);

  function setFalse(state, props) {
    return {...state, authed: false };
  }

  function setTrue(state, props) {
    return {...state, authed: true };
  }

  return {
    authed,
    login(password) {
      return new Promise(res => {
        setAuthed(setTrue);
        res();
      });
    },
    logout() {
      return new Promise(res => {
        setAuthed(setFalse);
        res();
      });
    }
  }
}

export default function RequireAuth({ children }) {
  const { authed } = useAuth();

  return authed ? children : <Navigate to="/login" replace />;
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function AuthConsume() {
  return React.useContext(authContext);
}