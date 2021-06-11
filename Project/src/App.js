import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from './components/dashboard';
import CardList from './components/cardList';
import SubscriptionList from './components/subscriptionList';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Sidebar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cards" component={CardList} />
          <Route path="/subscriptions" component={SubscriptionList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
