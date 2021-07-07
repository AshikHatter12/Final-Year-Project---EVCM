import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: '100%',
    
  },
  firstElement:{
    marginTop:'2vh'
  }
}));

export default function Welcome() {
  const classes = useStyles();
  return (
    <React.Fragment >
      <CssBaseline />
      <Grid container className={classes.firstElement} >   
        <Grid item xs={12} sm={6}>
        <Container maxWidth="md">
        <Typography component="div" >
        <img className={classes.gridList} src={'https://lh5.googleusercontent.com/p/AF1QipMabH-LLSSKDQvheRg2F0VolLaJy9mUqo89DGrP'} />
        </Typography>
      </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Container maxWidth="md">
        <Typography variant="h5" style={{ marginLeft: '2vh' }} gutterBottom>
        BAPUJI INSTITUTE OF ENGINEERING & TECHNOLOGY
        DAVANGERE
      </Typography>
        <Typography component="div" variant="h8" style={{ padding: '2vh' }}>
        Bapuji Educational Association (BEA) is a conglomerate of over 50 educational institutions across the city of Davangere. 
        The Association was established in the year 1958 with the inception of a first grade college in Davangere. 
        Team BIET is headed by Professor Y. Vrushabhendrappa, Director and Dr. H.B. Aravind, Principal. 
        They are assisted by Dr. S. Suresh, Dean-Student Welfare, Dr. B. E. Rangaswamy, Dean-Research and Development, Dr. K Sadashivappa, Dean-Academics, 
        Dr. M. S. Nagaraja, Dean-Training and Placement, Dr. S. Kumarappa, Dean-Examinations, Dr. G.P Desai, Dean-Public Relation,
        and all the Heads of the Departments.
         </Typography>
      </Container>
        </Grid>
         
        <Container maxWidth="sm" style={{ marginTop: '10vh' }}>
            <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
              Explore B.I.E.T Video Library
              
            </Typography>
            <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button href="/home" variant="contained" color="primary">
                    EXPLORE
                  </Button>
                </Grid>
                
              </Grid>
          </Container>
      </Grid>
      
     
    </React.Fragment>
  );
}
