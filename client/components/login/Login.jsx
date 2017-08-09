import React from 'react';
// import {
//     Bootstrap,
//     From,
//     FormControl,
//     FormGroup,
//     Col,
//     Button,
//     Checkbox,
//     ControlLabel,
//     Panel
// }from 'react-bootstrap';


// Bootstrap componetes
class Login extends React.Component{
    constructor(props){
        super(props);
     
    }

    render(){
        return(
             <button onClick={this.props.userLoggedEvent}> Click here to change status login </button>
        )
    }
};

export default Login;
