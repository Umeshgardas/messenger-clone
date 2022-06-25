import './App.css';
import { useState, useEffect } from "react";
import {  FormControl,  Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';
import db from './firebase';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import { IconButton } from '@mui/material';


// import firebase from 'firebase/compat/app';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('')

  useEffect(() => {
    //runonce when the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, []);


  useEffect(() => {
    //run code here...
    //if its blank inside [], this code runs ONCE when the app component loads
    setUsername(prompt('Please enter your name'));
  }, [])  //condition(dependencies)

  console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="" />
      <h1>Hello Newton Developer</h1>
      <h2>Welcome {username} </h2>
      <form className='app__form' >
        <FormControl className='app__formcontrol'>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton className='app__iconButton' disabled={!input} type='submit' onClick={sendMessage} variant="contained">
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>


      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
