import React from 'react';
import { FormattedMessage } from 'react-intl';
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

class Main extends React.Component{
    render(){
        return(
            <FormattedMessage
                id={ 'loginPanelTitle' }
                defaultMessage={ 'React Template WebApp' }
            />
        )
    }
};

export default Main;
