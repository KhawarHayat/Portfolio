import Layout from "./Layout";
import { makeStyles, Card, CardActionArea, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        margin: '2% 7% 7% 10%',
        display: 'flex',
        flexDirection: 'row'
    },
    part: {
        width: "45%",
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
    heading: {
        opacity: '0.7'
    },
    cardHead: {
        opacity: '0.8',
        fontWeight: 900,
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    card: {
        width: "450px",
        height: '200px',
        margin: '5% 0% 5% 0%',
        backgroundColor: '#f5f5dc'
    },
    init: {
        color: '#5bc0de'
    },
    pad: {
        margin: '4%'
    },
    date: {
        opacity: '0.8',
        fontWeight: 900,
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: '#5bc0de'
    },
    description:{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '80%',
        textAlign: 'justify',
        fontWeight: 900,
    }
}))

const Experience = () => {
    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.part}>
                    <h1 className={classes.heading}>Education</h1>
                    <Card className={classes.card}>
                        <div className={classes.pad}>
                            <h3 className={classes.cardHead}>Software Engineering from <i className={classes.init}> NUST </i></h3>
                            <p className={classes.date}>2015 - 2019</p>
                            <p className={classes.description}>The National University of Sciences & Technology is a public research university under administration of Pakistan Armed Forces with its main campus in Islamabad, Pakistan. The university offers undergraduate and graduate degrees, including doctoral and professional degrees.</p>
                        </div>
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.pad}>
                            <h3 className={classes.cardHead}>F.Sc from <i className={classes.init}> Punjab College Sargodha </i></h3>
                            <p className={classes.date}>2013 - 2015</p>
                            <p className={classes.description}>The inception of one of the best colleges and universities in Pakistan in 1985, laid the foundation of the Punjab Group with the aim of academic excellence at all levels for the purpose of shaping the future of its students. Over the span of almost 33 years, it has successfully emerged as the largest educational system in Pakistan, with over 490,000 students nationwide</p>
                        </div>
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.pad}>
                            <h3 className={classes.cardHead}>Matriculation from <i className={classes.init}> Sanai School System </i></h3>
                            <p className={classes.date}>2011 - 2013</p>
                            <p className={classes.description}>Sanai School System has become a legendary center of quality education in a short span of time. Its brilliance in teaching and novel activities. Remarkable results are the evidence of its wonderful performance. It is located in one of the most audacious city of the country, declared as City of Eagles, attracting students not only from the city but also acrosss the villages and towns located around the city.</p>
                        </div>
                    </Card>
                </div>
                <div className={classes.part}>
                <h1 className={classes.heading}>Experience</h1>
                <Card className={classes.card}>
                        <div className={classes.pad}>
                            <h3 className={classes.cardHead}>Milk Man for<i className={classes.init}> FYP </i></h3>
                            <p className={classes.date}>2018</p>
                            <p className={classes.description}>Web App for milk delivery using React for frontend and Express for backend. MySQL is used as database</p>
                        </div>
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.pad}>
                            <h3 className={classes.cardHead}>Frequency Management System for <i className={classes.init}> Pak Army </i></h3>
                            <p className={classes.date}>2019</p>
                            <p className={classes.description}>Managing the frequency of radios and antennas of officers and soldier. I made it using React, Semantic Ui, Express, MongoDB</p>
                        </div>
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.pad}>
                            <h3 className={classes.cardHead}>E-Selling for <i className={classes.init}> Upwork Client </i></h3>
                            <p className={classes.date}>2019</p>
                            <p className={classes.description}>Selling the goods online. I made it using Node, Express, GraphQL, React, Redux</p>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}
export default Experience