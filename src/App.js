import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    //BEM naming conventions
    <div className="app">
      {/* <h1>Lets buid the AIRBNB clone with the help of clever programmers..  :)</h1> */}
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
{/*Home*/ }
{/* Header*/ }
{/* Banner*/ }
{/* Search */ }
{/* Cards */ }
{/* Footer */ }

{/*Search Page*/ }
{/* Header */ }
{/* ... */ }