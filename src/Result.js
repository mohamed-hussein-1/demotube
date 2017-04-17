import React, { Component } from 'react';

class Result extends Component{
	state = {
				id:"",
				thumbnail:"",
				title:""
			}
	render(){
		console.log("calling Result not 's' Render");
		return <div> <img src={this.state.thumbnail}/><h6>{this.state.title}</h6></div>
	}
	componentWillReceiveProps(nextProps){
		console.log("Result not s will now change state");
		this.setState({id:nextProps.id,thumbnail:nextProps.thumbnail,title:nextProps.title})
	}
	componentWillMount(){
		this.setState({id:this.props.id,thumbnail:this.props.thumbnail,title:this.props.title});
	}
}
export default Result