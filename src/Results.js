import React, { Component } from 'react';
import Axios from 'axios';
import Result from './Result';

class Results extends Component{
	state = {results : []};
	playVid = "";
	render(){
		var _self = this;
		if(this.state.results){
			var res = this.state.results.map(function(result,i){
				return <Result id={result.id.videoId} thumbnail={result.snippet.thumbnails.default.url} 
							title={result.snippet.title} playVid={_self.playVid} key={i}/>;
			});
		}
		return (
			<div onClick={this.handleClick}>
			<p>{this.props.name}</p>
			<ul>{res}</ul>
			</div>
		);
	}
	componentWillReceiveProps(nextProps){
		var _self = this;
		this.playVid = nextProps.playVid;
		Axios.get('https://www.googleapis.com/youtube/v3/search',{
			params : {
				key : 'AIzaSyCCBpBrmg3dCUCoIJAUfwnIJobwms9Oq3g',
				part : 'snippet',
				q : nextProps.name,
				type : 'video'
			}
		})
		.then(function(response){
			
			var titles = response.data.items.map(function(item){
				return item;
			})
			_self.setState({results : titles});
		});
	}
	//handle for clicking the div to play the video
	handleClick(e){

	}
}
export default Results;