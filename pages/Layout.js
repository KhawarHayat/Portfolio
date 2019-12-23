import Nav from "../component/Nav";

export default function Layout(props) {
    return (
        <>
        <Nav/>
        <br/>
        {props.children}
        </>
    )
}