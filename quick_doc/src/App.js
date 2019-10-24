import React, { useState, useEffect} from 'react';
import "rbx/index.css";
import {Container,Title } from "rbx";
import firebase from 'firebase/app';
import 'firebase/database';
import page1 from './page1'
import Autocomplete from 'react-google-autocomplete';

import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'

import {FormControl} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

const googleKey = "AIzaSyCfjp7ZKwdAFhg773PBrwMinONqf_cGBlU";

// Won't be using this API for this slice, but for future reference if needed
// const docLocKey = 'e98def16c263c71592c3c2f74e24097a';
// const docLocUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + docLocKey;


const Pageone = ({pagestate, coordinatestate}) => {
  const switch_page = () => {
    pagestate.setpage(2)
  }
  const set_coordinates = (lat, long) => {
    coordinatestate.setcoordinates(lat + "," + long)
  }
  return(
    <div>
      <Button size = "large" onClick = {switch_page} align="center">
      Search
    </Button>
    <Autocomplete
        style={{width: '90%'}}
        onPlaceSelected={(place) => {
          var lat = place.geometry.location.lat().toString();
          var lng = place.geometry.location.lng().toString();
          set_coordinates(lat, lng);
        }}
        types={[]}
        componentRestrictions={{country: "usa"}}
    />
    </div>
    
  )
}


const App =() => {

  const style ={
    marginTop: 40
  }
  const [page, setpage] = React.useState(1)
  const [coordinates, setcoordinates] = React.useState("")

  if (page === 1){
    return (
      <Container>
        <Title align="center" style = {style}>
          QuickDoc
        </Title>
        <Pageone pagestate = {{page, setpage}} coordinatestate = {{coordinates, setcoordinates}} />
      </Container>
    );
  }
  else {
    return (
      <Container>
        <Title align="center" style = {style}>
          QuickDoc Page 2
        </Title>
        {coordinates}
      </Container>
    );
  }
  
}

export default App;