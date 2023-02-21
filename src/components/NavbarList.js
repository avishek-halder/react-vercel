import React, { Component } from 'react';

class NavbarList extends React.Component {

    
    render() {
        // const [this.props.planet, setAge] = useState(42);
        // const setpageToPlanet  =   this.props.setpageToPlanet;
        // const setpageToPeople  =   this.props.setpageToPeople;
        return (
            <nav className="">
                <button className="btn btn-primary m-1" onClick={this.props.planet}>Planet</button>
                <button className="btn btn-primary m-1" onClick={this.props.people}>People</button>
            </nav>
        );
    }
}

export default NavbarList;

