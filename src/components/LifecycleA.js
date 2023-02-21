import React, { Component, setState } from 'react';
import Dotenv from "dotenv";
import axios from "axios";


class LifecycleA extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            qty: parseInt(process.env.REACT_APP_QTY),
            username: "Avishek",
            lifecycle: "LifecycleA",
            bgcolor: "#FFF",
            posts: []
        };
        console.log("this is Constructor");
        console.log(process.env.REACT_APP_PASSWORD);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("this is shouldComponentUpdate");
    // }
    // shouldComponentUpdate("sadsa","fdgfd");
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log("this is  getSnapshotBeforeUpdate");
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("This is componentDidUpdate");
    }
    componentDidMount(prevProps, prevState, snapshot) {
        console.log("this is componentDidMount");
        axios.get("http://jsonplaceholder.typicode.com/posts")
        .then(response => {
            // console.log(response.data);
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })


    }//componentDidMount END
    static getDerivedStateFromProps(props, state) {
        console.log("this is getDerivedStateFromProps");
        return null;
    }

    updateQty = () => {
        this.setState({
            qty: this.state.qty + 1
        })

    }
    bgcolorchange = (e) => {
        this.setState({
            bgcolor: e.target.value
        })
        console.log(e);
    }
    allpostshow = () => {
        let posts = this.state.posts;
        posts.forEach(post => {
            console.log(post);
        });
    }
    render() {
        const divStyle = {
            
            backgroundColor: this.state.bgcolor
            
          };
          
        console.log("this is render");
        return (
            <div style={divStyle}>
                <h1>This is {this.state.qty}</h1>
                <button className={"btn btn-primary"} onClick={this.updateQty}>Update</button>
                {/* <label className={"form-label"}>Color picker</label> */}
                <input type="color" className={"form-control form-control-color"} id="" value={this.state.bgcolor} title="Choose your color" onChange={this.bgcolorchange}></input>
            </div>
        )

    }
}
export default LifecycleA; 