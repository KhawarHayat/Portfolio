import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import About from '../pages/About'


const useStyles = makeStyles(theme => ({
    header: {
        height: "100px",
        width: "70%",
        backgroundColor: 'white',
        fontWeight: "bold",
        display: "flex",
        flexDirection: "row",
        color: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '120%',
        position: 'sticky',
        marginLeft: '15%',
        marginRight: '15%',
        fontFamily: 'Arial, Helvetica, sans-serif',
        opacity: '0.7'
    },
    margin: {
        '&:hover': {
            textDecoration: "underline"
        },
        textDecoration: 'none',
        cursor: 'default',
        marginBottom: '3%',
        backgroundColor: 'white'
    },
    color: {
        width: "100%",
        height: '100px',
        backgroundColor: 'white'
    }
}));

export default function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.color}>
        <div className={classes.header}>
            <Link href='/Home'><p className={classes.margin}>Home</p></Link>
            <Link href='/About'><p className={classes.margin}>About</p></Link>
            <Link href='/Skills'><p className={classes.margin}>Skills</p></Link>
            <Link href='/Experience'><p className={classes.margin}>Experience</p></Link>
            <Link href='/Portfolio'><p className={classes.margin}>Portfolio</p></Link>
            <Link href='/Contact'><p className={classes.margin}>Contact</p></Link>
        </div>
        </div>
    )
}