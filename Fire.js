import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

let getDisplayName = null;
let getChats = null;
let dataChat = null;
class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }
  
  // connection to the firebase database, unique credentials from Project Settings>Your apps
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBZS6w6VQFe_mrru8swjm0xfYINxHGiCI0",
        authDomain: "quedu-cb392.firebaseapp.com",
        databaseURL: "https://quedu-cb392-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "quedu-cb392",
        storageBucket: "quedu-cb392.appspot.com",
        messagingSenderId: "774485160438",
        appId: "1:774485160438:web:4632ad56413c62e14897d7",
        measurementId: "G-4K4J05YHWD"
      });
    }
  };

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  // authenticating user and allowing anonymous users
  onAuthStateChanged = user => {
    if (!user) {
        alert("Signed out!")
    //   try {
    //     firebase.auth().signInAnonymously();
    //   } catch ({ message }) {
    //     alert(message);
    //   }
    }
  };

  // getting unique credentials
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  get displayName(){
    firebase.database().ref('/users/' + this.uid).once('value').then((data) => {
      getDisplayName = data.val().firstname + " " + data.val().lastname
    })
    return (getDisplayName)
  }
  get chats() {
    firebase.database().ref('/users/' + this.uid + '/leaders').once('value').then((data) => {
      getChats = data.val()
    })
    return (getChats)
  }
  get email(){
    return (firebase.auth().currentUser || {}).email;
  }
  // get activeChat(){
  //   firebase.database().ref('users/' +  this.uid + '/activeChat').once('value').then((data) => {
  //     dataChat = data.val().chat
  //   })
  //   return (dataChat)
  // }
  // referencing the 'messages' table in the firebase database
  get ref() {
    firebase.database().ref('users/' +  this.uid + '/activeChat').once('value').then((data) => {
      dataChat = data.val().chat
    })
    return firebase.database().ref('chats/' + dataChat);
  }
  // get ref() {
  //   return firebase.database().ref('users/nick');
  // }

  //formating the message in order to be displayed nicely
  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  // getting messages to be displayed from the database
  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  // timestamp for the message
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // sending message to be stored in the database
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  // appening the message in the chat
  append = message => this.ref.push(message);

  // closing connection
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;