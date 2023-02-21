import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import NavbarList from '../components/NavbarList';
import People from '../components/People';
import Planets from '../components/Planets';

class Starwarquery extends Component {

    constructor(props) {
        super(props)
        this.state = {
          phnNumber: '',
          page : 'planets'
        }
      }
    //  const [page, setPage] = setState('planets');
    static contextType = ThemeContext;
    
    render() {
        const setpageToPeople = (e) => {
            // console.log("e");
            this.setState({page:"people"})
        }
        const setpageToPlanet = (e) => {
            // console.log("e");
            this.setState({page:"planets"})
        }        
        // const { isLightTheme, light, dark } = this.context;
        // const theme = isLightTheme ? light : dark;
        // const [page, setPage] = useState('planets');
        return (
            <div className=" mt-4 bg-dark">
                <h1>Start Ware Info</h1>
                {/* <h1>{this.state.page}</h1>
                <button onClick={setpageToPeople}>asas</button> */}
                {/* <input type="text" onChange={(e) => this.setState({phnNumber: e.target.value}) } className="bg-dark" /> */}
                <NavbarList planet={setpageToPlanet} people={setpageToPeople} />
                <div className="context">
                    {this.state.page === 'planets' ? <Planets /> : <People />}
                </div>
            </div>
        );
    }
}

export default Starwarquery;