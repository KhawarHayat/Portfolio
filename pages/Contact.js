import Layout from "./Layout";
import { makeStyles, Card } from '@material-ui/core'
import { NearMe, MailOutline, Phone } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    container: {
        margin:'5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: '200%',
        opacity: '0.7',
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
    card: {
        width: '300px',
        height: '400px',
        // backgroundColor:'gray'

    },
    center: {
        margin: '25% 0% 0% 30%',
        padding: '15%',
        borderColor: 'black',
        borderRadius: '100px',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#5bc0de',
        height: "23px",
        width: '23px'
    },
    contant: {
    marginTop: '20%',
    fontSize: '100%',
        opacity: '0.7',
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
}))
const Contact = () => {
    const classes = useStyles()
    return (
        <Layout>
            <center><h2 className={classes.heading}>Contact Me</h2></center>
            <div className={classes.container}>
                <Card className={classes.card}>
                 <NearMe className={classes.center}/>
                 <center><p className={classes.contant}>Sargodha, Punjab, Pakistan</p></center>
                </Card>
                <Card className={classes.card}>
                 <MailOutline className={classes.center}/>
                 <center><p className={classes.contant}>khawarhayat1997@gmail.com</p></center>
                </Card>
                <Card className={classes.card}>
                 <Phone className={classes.center}/>
                 <center><p className={classes.contant}>+92 300 6012057</p></center>
                </Card>
            </div>
        </Layout>
    )
}
export default Contact