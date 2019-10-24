import React, { useState, useEffect} from 'react';
import "rbx/index.css";
import {Container,Title } from "rbx";
import firebase from 'firebase/app';
import 'firebase/database';

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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';

import {FormControl} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { sizing, spacing, positions } from '@material-ui/system';
import Card from '@material-ui/core/Card';
// import { Typography } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TypoGraphy from '@material-ui/core/Typography';

import Result from './results.js';

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



const Questions =[
  {
    id: 1,
    question: 'What is your age?',
    answer :[
      '<10',
      '10-18',
      '18-30',
      '30-40',
      '40-60',
      '60-80',
      '80>'
    ],
    page: 1
  },
  {
    id: 2,
    question: 'Where do you feel uncomfortable on your body?',
    answer :[
      'head',
      'heart',
      'throat',
      'stomach',
      'legs',
      'arms'
    ],
    page: 2
  },
  {
    id: 3,
    question: 'What are your symptoms?',
    answer :[
      'fever',
      'sore throat',
      'sneezing',
      'inflammation',
      'headache',
      'stomach ache',
    ],
    page: 3
  },
  {
    id: 4,
    question: 'Do you have any other symptoms?',
    answer:[
      'fever',
      'sore throat',
      'sneezing',
      'inflammation',
      'headache',
      'stomach ache',
    ],
    page: 4
  },
  {
    id: 5,
    question: 'Which city do you live in?',
    answer:[
      'Evanston',
      'Chicago',
      'New York',
      'Los Angeles'
    ],
    page: 5
  } 
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
      padding: 10,
      width: "50%",
      marginTop: 20,
  },
  gridList: {
    width: 200,
    height: 200,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    width: 50,
    height: 50,
  },
  disclaimer:{
      marginBottom: 30,
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    padding: 10,
    width: "30%",
    marginTop: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const QaWrapper = ({questions}) => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      marginBottom: 50
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 400,
    },
    select:{
      width: 400,
      marginTop: 20,
      marginLeft: 12
    },

  }));


  const [values, setValues] = React.useState({
    1: 'ddd',
    2: 'hai',
    3: 'ddd',
    4: 'hai',
    5: 'hai',
  });

  const handleChange = name => event => {
    setValues(({
      ...values,
      [name]: event.target.value,
    }));
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return(
    <form className={classes.container} noValidate autoComplete="off">

      {
      questions.map(question =>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={InputLabel} htmlFor="outlined-age-simple"
        className={classes.questionLabel}>
          {question.question}
        </InputLabel>
          <Select
            className={classes.select}
            value={values[question.id]}
            onChange={handleChange(question.id)}
          >
          <MenuItem value="Select an Option">
          <em>Select Options</em>
          </MenuItem>
          {question.answer.map(answer=>
             <MenuItem value={answer}>{answer}</MenuItem>
          )}
      </Select>
      </FormControl>
      )
      }
    </form>
  )
}



const Pagination = () =>{
  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 255,
      maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Questions[Questions.length-1].page + 1;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    TextField.value = "";
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleBackText = (text) =>{
    if (activeStep !== maxSteps - 2) return text;
    else return "Submit";
  }

  // const handleSubmit = () => {
  //     return null;
  // }

  const questions = Questions.filter(question=>question.page === activeStep + 1)

  return (
    <div>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{Questions[activeStep].label}</Typography>
      </Paper>
      <div> */}
        {/* Q:{Questions[activeStep].question}
        <br></br>
        A:
        <input>
        </input>
      </div> */}

      {activeStep===maxSteps-1? <Result/>:
        <QaWrapper questions = {questions}/>}
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          activeStep === maxSteps-1 ? <div /> :
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {handleBackText('next')}
            {activeStep===maxSteps-2 ? <div /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>

  )
}

const Pageone = ({pagestate}) => {
  const switch_page = () =>{
    pagestate.setpage(2)
  }
  return (
    <Button size = "large" onClick = {switch_page} align="center">
    Search
    </Button>
  )
}

const DocList = ({doctors}) => {
  return(
    <div>
    {doctors.map(
      doctor => (<div> {doctor.profile.first_name} {doctor.profile.last_name}
        </div>

    )
  )}
  </div>
  )
}

const Pagetwo = ({pagestate,doctors,settingdoctor}) => {
  const switch_page = () =>{
    pagestate.setpage(3)
  }
  const updatedoc = (doctor) =>{
    settingdoctor.setdoc(doctor)
  }
  return (
    // <FilterMenu/>
    <div className={styles.root}>
      <GridList cellHeight={500} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Here is your list of Doctors</ListSubheader>
        </GridListTile>
        {doctors.map(doctor => (
          <GridListTile key={doctor.profile.image_url}>
            <img src={doctor.profile.image_url}/>
            <GridListTileBar
              title={doctor.profile.first_name+ " " + doctor.profile.last_name}
              subtitle={<span>{doctor.profile.title}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${doctor.profile.first_name}`} onClick={updatedoc(doctor),switch_page} className={styles.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const PageThree = ({pagestate,doctors,settingdoctor}) => {
  return (
    // <FilterMenu/>
    <p>{settingdoctor.doc.profile.bio}</p>
  )
}

const App =() => {

  const style ={
    marginTop: 40
  }
  const [page, setpage] = React.useState(1)
  const [json, setjson] = React.useState({meta: {}, data: []});
  const [doc,setdoc] = React.useState('');
  const url = 'apiData/exampleData.json';

  useEffect(() => {
    const fetchjson = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setjson(json);
    }
    fetchjson();
  }, [])

  if (page === 1) {
    return (
    <Container>
      <Title align="center" style = {style}>
        QuickDoc
      </Title>
      <Pageone pagestate = {{page, setpage}}/>
      {/* <Pagination/> */}
    </Container>
  );
  }
  else if (page == 2) {
    return (
      <Container>
        <Title align="center" style = {style}>
          QuickDoc
        </Title>
        <Pagetwo pagestate = {{page,setpage}} doctors={json.data} settingdoctor = {{doc,setdoc}}/>
      </Container>
    );
  }
  else if (page == 3) {
    return (
      <Container>
        <Title align="center" style = {style}>
          QuickDoc
        </Title>
        <PageThree pagestate = {{page,setpage}} doctors={json.data} settingdoctor = {{doc,setdoc}}/>
      </Container>
    );
  }
  
}

export default App;