import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';


import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.arcBlue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    }, 
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute",
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: ".75rem",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "3em",
    }
}));


export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}> 
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(0)} to="/">
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} onClick={()=> {props.setValue(1); props.setSelectedIndex(0)}} to="/services">
                                Services
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> {props.setValue(1); props.setSelectedIndex(1)}} to="/customsoftware">
                                Custom Software Development
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> {props.setValue(1); props.setSelectedIndex(2)}} to="/mobileapps">
                                Mobile App Development
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> {props.setValue(1); props.setSelectedIndex(3)}} to="/websites">
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(2)} to="/revolution"> 
                                Revolution
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(2)} to="/revolution"> 
                                Vision
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(2)} to="/revolution"> 
                                Technology
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(2)} to="/revolution"> 
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(3)} to="/about">
                                About Us
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(3)} to="/about">
                                History
                            </Grid>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(3)} to="/about">
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}> 
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} onClick={()=> props.setValue(4)} to="/contact">
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
            </Hidden>
            <img 
                alt="black decorative slash" 
                src={footerAdornment} 
                className={classes.adornment} 
            />
            
        </footer>
    ) 
}