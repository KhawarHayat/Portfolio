import Layout from "./Layout";
import { Line, Circle } from 'rc-progress';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        margin: '2% 5% 0% 10%',
        display: 'flex',
        flexDirection: 'row'
         
    },
    line: {
        width: '400px',
        marginTop: '0%',
        marginBottom: '4%'
    },
    circle: {
        width: '100px',
        marginBottom: '3%',
        marginTop: '15%'
    },
    circleGraph: {
        flex: "0 50%",
       display: 'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems: 'center',
    },
    part1: {
        width: '45%'
    },
    part2: {
        width: '45%'
    },
    heading: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        opacity: '0.7'
    },
    lineGraph: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    label: {
        fontSize: '100%',
        fontFamily: 'Arial, Helvetica, sans-serif',
        margin: '0% 0% 1% 0%',
        fontWeight: 'bold',
        opacity: '0.7'
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}))
const Skills = () => {
    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.part1}>
                    <center><h2 className={classes.heading}>Technical Skills</h2></center>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>JavaScript</label>
                        <Line percent="85" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>React</label>
                        <Line percent="90" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>Redux</label>
                        <Line percent="88" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>Semantic UI</label>
                        <Line percent="75" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>Material UI</label>
                        <Line percent="70" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>MongoDB</label>
                        <Line percent="80" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>MySQL</label>
                        <Line percent="80" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>Node</label>
                        <Line percent="70" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>Express</label>
                        <Line percent="85" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                    <div className={classes.lineGraph}>
                        <label className={classes.label}>Rest APIs</label>
                        <Line percent="90" strokeWidth="2" strokeColor="#5bc0de" className={classes.line} />
                    </div>
                </div>
                <div className={classes.part2}>
                    <center><h2 className={classes.heading}>Professional Skills</h2></center>
                    <div className={classes.flex}>
                    <div className={classes.circleGraph}>
                    <Circle percent="80" strokeWidth="5" strokeColor="#5bc0de" className={classes.circle} />
                    <label className={classes.label}>Communication</label>
                    </div>
                    <div className={classes.circleGraph}>
                    <Circle percent="85" strokeWidth="5" strokeColor="#5bc0de" className={classes.circle} />
                    <label className={classes.label}>Team Work</label>
                    </div>
                    <div className={classes.circleGraph}>
                    <Circle percent="80" strokeWidth="5" strokeColor="#5bc0de" className={classes.circle} />
                    <label className={classes.label}>Project Management</label>
                    </div>
                    <div className={classes.circleGraph}>
                    <Circle percent="60" strokeWidth="5" strokeColor="#5bc0de" className={classes.circle} />
                    <label className={classes.label}>Creativity</label>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Skills