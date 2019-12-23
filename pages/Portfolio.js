import Layout from "./Layout";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        margin: '5%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img: {
        width: '350px',
        height: '200px',
        borderRadius: '5px',
        marginBottom: '5%',
        transition: "width 1s, height 1s",
        '&:hover': {
            width: '400px',
            height: '250px'
        },
    },
    heading: {
        fontSize: '200%',
        opacity: '0.7',
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }

}))

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Layout>
            <center><h2 className={classes.heading}>Recent Portfolio</h2></center>
            <div className={classes.container}>
                <img src='addNode.png' className={classes.img} />
                <img src='Antenna.png' className={classes.img} />
                <img src='Search.png' className={classes.img} />
                <img src='E-Selling.png' className={classes.img} />
                <img src='MilkMan.png' className={classes.img} />
                <img src='LandingPage.png' className={classes.img} />
                <img src='LandingPage2.png' className={classes.img} />
                <img src='LandingPage3.png' className={classes.img} />
                <img src='ResponsivePage1.png' className={classes.img} />
                <img src='ResponsivePage2.png' className={classes.img} />
                <img src='ResponsivePage3.png' className={classes.img} />
            </div>
        </Layout>
    )
}

export default Portfolio