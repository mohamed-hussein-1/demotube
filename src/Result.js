import React, { Component } from 'react';

class Result extends Component{
	state = {
				id:"",
				thumbnail:"",
				title:""
			}
	playVid = null;
	render(){
		return <div onClick={this.playVideo}> <img src={this.state.thumbnail} alt=""/><h6>{this.state.title}</h6></div>
	}
	componentWillReceiveProps(nextProps){
		this.setState({id:nextProps.id,thumbnail:nextProps.thumbnail,title:nextProps.title})
	}
	componentWillMount(){
		this.setState({id:this.props.id,thumbnail:this.props.thumbnail,title:this.props.title});
		this.playVid = this.props.playVid;
	}
	 playVideo = (e) => {
	 	this.playVid(this.state.id);
	}
}
export default Result