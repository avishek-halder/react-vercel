import React, { Component } from 'react';


class Loopcont extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            counter: 0,
            username: "Avishek"
        };
        this.fname = this.props.fname.charAt(0).toUpperCase() + this.props.fname.slice(1);//this.props.fname.toUpperCase();
        this.lname = this.props.lname.charAt(0).toUpperCase() + this.props.lname.slice(1);
        // this.handleClick = this.handleClick.bind(this);
    }
    handelusername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handelSubmit = (e) => {
        alert(`Name is ${this.state.username}`);
        this.setState({

            username: ""

        })
        e.preventDefault();
    }

    render() {

        //return <h1>Hello,{this.fname} {this.lname}</h1>;
        return (
            <>
                <form onSubmit={this.handelSubmit}>
                    <div>
                        <label>Username  : </label>
                        <input type="text" name="" class="" value={this.state.username} onChange={this.handelusername} />
                    </div>
                    <button>Submit</button>
                </form>
            </>
        )

    }
}
export default Loopcont; 