import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import MediaList from '../media/MediaList'
import {listPopular} from '../media/api-media.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.bietdvg.edu/">
        BIET DVG Enterprise Video Content Management
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles(theme => ({
  card: {
    margin: `${theme.spacing(5)}px 30px`
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px 0px`,
    color: theme.palette.text.secondary,
    fontSize: '1em'
  },
  media: {
    minHeight: 330
  },


  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

}))


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Home(){
  const classes = useStyles()
  const [media, setMedia] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listPopular(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setMedia(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
  return (
      

      <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
              B.I.E.T Video Library
            </Typography>
            <Typography variant="h7" align="center" color="textSecondary" paragraph>
              Access to all the academic video content to learn whenever necessary at ease from any part of the world.   
            </Typography>
          </Container>
        </div>


       <Card className={classes.card}>
          {/* <Typography variant="h4" align="center" >
            POPULAR VIDEOS
          </Typography> */}
          <MediaList media={media}/>
       </Card>



        {/* <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Bapuji Institute of Engineering and Technology
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Davanagere - 577004
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>




  )
}
