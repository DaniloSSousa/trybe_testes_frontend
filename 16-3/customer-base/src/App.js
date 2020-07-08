import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Home from './components/Home';
import Login from './components/Login';
import RegisteredCustomers from './components/RegisteredCustomers';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" render={(props) => <Login {...props} />} /> */}
        <Route path="/login" component={Login} />
        <Route path="/customers" component={RegisteredCustomers} />
      </Switch>
    </Provider>
  );
};

export default App;
