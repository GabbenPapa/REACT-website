import PropTyes from 'prop-types'

function UserGreeting(props) {
    // if (prop.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } else {
    //     return <h2>Please login</h2>
    // }
    
    // return ( props.isLoggedIn ? <h2 className="wellcome-message">Welcome {props.username}</h2> : <h2 className="login-message">Please login</h2>);

    const wellcomeMessage = <h2 className="wellcome-message">Welcome {props.username}</h2>
    const loginMessage = <h2 className="login-message">Please login</h2>;
    
    return ( props.isLoggedIn ? wellcomeMessage : loginMessage);

}

UserGreeting.propTypes = {
    isLoggedIn: PropTyes.bool,
    username: PropTyes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting