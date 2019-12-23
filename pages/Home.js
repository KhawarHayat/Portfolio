import { makeStyles } from '@material-ui/core/styles';
import { Mail, PhoneAndroid, LocationOn, Facebook, Instagram, GitHub } from '@material-ui/icons'
import Layout from './Layout';
const useStyles = makeStyles(theme => ({
    rounded: {
        width: "16%",
        padding: '1% 2% 1% 2%',
        backgroundColor: '#5bc0de',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        color: 'white',
        fontWeight: 'bold'
    },
    name: {
        fontSize: '350%',
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif',
        marginTop: '1%',
        color: '0f0f0f',
        opacity: '0.7',
        padding: '0px',
        margin: '0%'
    },
    techName: {
        fontSize: '150%',
        fontWeight: '700',
        fontFamily: 'Arial, Helvetica, sans-serif',
        marginTop: '1%',
        opacity: '0.7',
        paddind: '0px',
        margin: '0px'
    },
    container: {
        margin: '0% 5% 0% 5%',
        display: "flex",
        flexDirection: "row",
    },
    align: {

        marginLeft: '10px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: '500',
        opacity: '0.8'
    },
    inline: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    media: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        marginTop: '2%'
    },
    space: {
        marginRight: '5%',
        textDecoration:'none',
        color: 'black'
    },
    part: {
        width: "50%",
    },
    image: {
        borderRadius: '230px',
        borderStyle: 'solid',
        borderWidth: '20px',
        borderColor: '#B9BBC2',
        boxShadow: `0 0 0 15px hsl(0, 0%, 90%)`,
        marginLeft: '20%',
        marginTop: '25%',
        height: '300px',
        width: '300px'
    },
    part1: {
        width: "50%",
        marginTop: '10%'
    }
}));

const Home = () => {
    const classes = useStyles()
    return (
        <Layout>
        <div className={classes.container}>
            <div className={classes.part1}>
                <p className={classes.rounded}>Hello I'm</p>
                <p className={classes.name}>Khawar Hayat</p>
                <p className={classes.techName}>Full-Stack Developer</p>
                <br />
                <div className={classes.inline}>
                    <Mail />
                    <p className={classes.align}>  khawarhayat1997@gmail.com</p>
                </div>
                <div className={classes.inline}>
                    <PhoneAndroid />
                    <p className={classes.align}> +92 300 6012057</p>
                </div>
                <div className={classes.inline}>
                    <LocationOn />
                    <p className={classes.align}> Sargodha, Punjab, Pakistan</p>
                </div>
                <div className={classes.media}>
                    <a href='https://web.facebook.com/khawar.bhatti.50' className={classes.space}><Facebook/></a>
                    <a href='https://web.facebook.com/khawar.bhatti.50' className={classes.space}><Instagram /></a>
                    <a href='https://github.com/KhawarHayat' className={classes.space}><GitHub /></a>
                </div>
            </div>
            <div className={classes.part}>
            <img src='Profile.jpg' alt='Profile' className={classes.image} />
            </div>
        </div>
        </Layout>
    )

}
export default Home;