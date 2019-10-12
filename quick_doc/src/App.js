import React, { useState, useEffect} from 'react';
import "rbx/index.css";
import {Container,Message, Title } from "rbx";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';



const QaWrapper = ({questions}) => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
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
      width: 200,
    },
  }));

  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  

  return(
    <form className={classes.container} noValidate autoComplete="off">
    {
      questions.map(question=>(
        <TextField
        // id="standard-name"
        label={question.question}
        className={classes.textField}
        // value={}
        onChange={handleChange('name')}
        margin="normal"
        />  
    ))
    }
    </form>
  )
}


const Questions =[
  {
    question: 'What is your age?',
    answer :[
      '<10',
      '10-18',
      '18>30',
      '30-40',
      '40-60',
      '60-80',
      '80>'
    ],
    page: 1
  },
  {
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
    question: 'What is your symptoms?',
    answer :[
      'fever',
      'sore throat',
      'sneezing',
      'inflammation',
    ],
    page: 3
  }
]


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
  const maxSteps = Questions.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

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
      <QaWrapper questions = {questions}/>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
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



const App =() => {
  return (
    <Container>
      <Title align="center">
        QuickDoc
      </Title>
      <Pagination/>
    </Container>
  );
}



export default App;
