import React from 'react' ;
import { Route, Link, Switch, Redirect } from 'react-router-dom';

//Components
import LoginComponent from './login/Login.jsx';
import MainComponent from './main/Main.jsx';
import NoMatchComponent from './NoMatch.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isUserLogged: false
        };

        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(result) {
        this.setState({isUserLogged:result});
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        this.state.isUserLogged ? (<Redirect to="/main"/>) : (<LoginComponent {...props} userLoggedEvent={this.loginUser}/>) 
                     )}/>
                    <Route path="/main" component={MainComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route component={NoMatchComponent}/>
                </Switch>
            </div>
        );
    }
};

export default App;
