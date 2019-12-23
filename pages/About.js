import Layout from "./Layout";
import { Typography, Chip, Fab, makeStyles } from "@material-ui/core";
import { GetApp } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    container: {
    margin: "7% 5% 0% 5%",
    display: 'flex',
    flexDirection: 'row',
    },
    part1: {
        width: '45%',
        backgroundColor:'white'
    },
    part2: {
        width: '45%',
    },
    img : {
        width: '400px',
        height: '400px',
        backgroundColor: 'white',
        marginTop: '10%'
    },
    title: {
        fontSize: '200%',
        opacity: '0.7',
        fontWeight: 'bold',
        fontFamily: 'Arial, Helvetica, sans-serif',
        margin: '20% 0% 5% 10%'
    },
    para: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '100%',
        alignContent: 'justify',
        marginLeft: '10%',
        opacity: '0.7'
    },
    chip: {
    display: 'inline-block',
    marginLeft: '10%',   
    },
    space:{
        margin: '1%'
    },
    fab: {
        margin: '2% 0% 0% 10%'
    },
    decor: {
        textDecoration: 'none',
        color: 'transparent'
    }
}))

const About = () => {
    const classes = useStyles()

    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.part1}>
                    <img src='engineer3.jpg' alt='Thumbnail' className={classes.img}/>
                </div>
                <div className={classes.part2}>
                    <p className={classes.title}>About Me</p>
                    <p className={classes.para}>I am expert in front-end and the back-end. Have a strong technical and logical problem solving expertise & experience in core infrastructure development. I hold a deep understanding of MERN stack, have good fortunate on working medium to large projects.</p>
                    <div className={classes.chip}>
                        <Chip
                            label="React"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Redux"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Semantic UI"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Material UI"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Css"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Sass"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Node"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Express"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Restful APIs"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="GraphQL APIs"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="MongoDB"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="MySQL"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                        <Chip
                            label="Git"
                            color="primary"
                            variant="outlined"
                            className={classes.space}
                        />
                    </div>

                   <a href='Resume.pdf' download className={classes.decor}> <Fab color='primary' variant="extended" className={classes.fab}>
                        <GetApp/>
                        Download CV
                    </Fab> </a>
                </div>
            </div>
        </Layout>

    )
}

export default About