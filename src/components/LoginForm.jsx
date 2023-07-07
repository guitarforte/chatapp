import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import ChatFeed from "./ChatFeed";
import {useState , useEffect} from 'react'

function Modal() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const [user, setUser] = useState(null); // Add state to store the user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the user state when the authentication state changes
    });

    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged listener when the component unmounts
    };
  }, []);

  return (
    <>
      {user ? (
        <ChatFeed />
      ) : (
        <div className="wrapper">
          <div className="form">
            <h3 className="title">Marve-forte Chat Application</h3>
            <div align="center">
              <button onClick={signInWithGoogle} className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;




