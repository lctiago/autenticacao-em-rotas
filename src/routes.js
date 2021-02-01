import { render } from '@testing-library/react';
import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import isAuthenticated from './auth';

class PrivateRoute extends Component {
    render() {
        const props = this.props;
        const { component: Component, ...rest } = props;
        const userIsAuthenticated = isAuthenticated();
        return (
            <Route
                {...rest}
                render={props => (
                    userIsAuthenticated ? (
                        <Component {...props}></Component>
                    ) : (
                            <Redirect to={{ pathname: '/', state: { from: props.location } }}></Redirect>
                        )
                )

                }></Route>
        )
    }
}

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <h1>Você não está logado</h1>} />
                    <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>}></PrivateRoute>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;