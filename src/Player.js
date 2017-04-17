import React, { Component } from 'react';


class Player extends Component{
	state = {id:0};
	render(){
		if(this.state.id === 0)
			return <div></div>;
		var src = "https://www.youtube.com/embed/" + this.state.id+ '?autoplay=1&origin=http://example.com';

		return (
			<div>
				<iframe id="ytplayer" type="text/html" width="640" height="360"
  					src={src} frameBorder="0"></iframe>
			</div>
			);
	}
	componentWillMount(){
		this.setState({id:this.props.id});
	}
	componentWillReceiveProps(nextProps){
		this.setState({id:nextProps.id});
	}

}
export default Player;