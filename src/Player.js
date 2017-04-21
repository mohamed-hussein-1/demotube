import React, { Component } from 'react';
import './Player.css'

class Player extends Component{
	state = {id:0,title:""};
	render(){
		if(this.state.id === 0)
			return <div></div>;
		var src = "https://www.youtube.com/embed/" + this.state.id+ '?autoplay=1&origin=http://example.com';

		return (
			<div className="player-wrapper">
				<iframe id="ytplayer" type="text/html" width="640" height="360"
  					src={src} frameBorder="0"></iframe>
  				<h3>{this.state.title}</h3>
			</div>
			);
	}
	componentWillMount(){
		this.setState({id:this.props.id,title:this.props.title});
	}
	componentWillReceiveProps(nextProps){
		this.setState({id:nextProps.id,title:nextProps.title});
	}

}
export default Player;