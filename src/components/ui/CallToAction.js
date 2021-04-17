import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    learnButton : {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down('md')] : {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        }
    },
    esitmateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.arcOrange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down('sm')] : {
            marginLeft: 0,
            marginRight: 0,
        }
    }

}))

export default function CallToAction (props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container 
            alignItems="center" 
            className={classes.background} 
            justify={matchesSM ? "center" : "space-between"}
            direction={matchesSM ? "column" : "row"}
        >
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em" , textAlign: matchesSM ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2"> Simple Software. <br/> Revolutionary Resulsts. </Typography>
                        <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}> Take advantage of the 21st century. </Typography>
                        <Grid container justify={matchesSM ? "center" : undefined} item>
                            <Button className={classes.learnButton} variant="outlined" component={Link} to="/revolution">
                                <span style={{marginRight: 5}}> Learn More </span> 
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                            </Button>
                        </Grid>  
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.esitmateButton} component={Link} to="/estimate">Free Estimate</Button> 
            </Grid>            
        </Grid>
    )
}
