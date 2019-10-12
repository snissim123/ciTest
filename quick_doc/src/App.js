import React, { useState, useEffect} from 'react';
import "rbx/index.css";
import {Button,Container,Message, Title } from "rbx";
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCPlCnToFlfovuDUaAGesBUNLZw8DAxTnQ",
    authDomain: "quickdoc-8a808.firebaseapp.com",
    databaseURL: "https://quickdoc-8a808.firebaseio.com",
    projectId: "quickdoc-8a808",
    storageBucket: "quickdoc-8a808.appspot.com",
    messagingSenderId: "578559822014",
    appId: "1:578559822014:web:8e9fcfc524bea78ae4f6ef"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

// Won't be using this API for this slice, but for future reference if needed
// const docLocKey = 'e98def16c263c71592c3c2f74e24097a';
// const docLocUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + docLocKey;


const App =() => {

  
  return (
    <Container>

    </Container>
  );
}

export default App;