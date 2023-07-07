import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';

function SendMessage() {
  const [message, setMessage] = useState('');

  async function handleSendMessage(event) {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  }

  return (
    <>
      <form onSubmit={handleSendMessage} className="send-message">
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          className="form-input__input"
          placeholder="type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default SendMessage;

