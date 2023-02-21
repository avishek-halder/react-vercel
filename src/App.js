import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
import StarwarQuery from './components/StarwarQuery';
// import Loopcont from './components/Loopcont';
// import Routertest from './components/Routertest';
// import LifecycleA from './components/LifecycleA';
// import Tick from './components/Tick';
// import NavbarList from './components/NavbarList';
// import People from './components/People';
// import Planets from './components/Planets';
import { ReactQueryDevtools } from 'react-query-devtools';
import Reactquerytest from './components/Reactquerytest';
import Reactchart from "./components/reactchart";
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import '../node_modules/';
function App() {


  return (
    <React.Fragment>
      <div className="App container-fluid">
        <ThemeContextProvider>
          <Reactchart />
          {/* <Reactquerytest />      
        <Navbar />
        <BookList />
        <ThemeToggle />
        <StarwarQuery /> */}


          {/* <Loopcont fname={"avishek"} lname={"halder"}/> */}
          {/* <Routertest/> */}
          {/* <LifecycleA/>
        <Tick/> */}

        </ThemeContextProvider>


        <ReactQueryDevtools initialIsOpen={false} />
      </div>

    </React.Fragment>
  );
}

export default App;
