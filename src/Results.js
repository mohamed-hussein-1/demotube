import React, { Component } from 'react';
import Axios from 'axios';
import Result from './Result';

class Results extends Component{
	state = {results : []};
	render(){
		if(this.state.results){
			var res = this.state.results.map(function(result){
				console.log(result.snippet.title);
				return <Result id={result.id.videoId} thumbnail={result.snippet.thumbnails.default.url} 
							title={result.snippet.title} />;
			});
		}
		return (
			<div>
			<p>{this.props.name}</p>
			<ul>{res}</ul>
			</div>
		);
	}
	componentWillReceiveProps(nextProps){
		var _self = this;
		Axios.get('https://www.googleapis.com/youtube/v3/search',{
			params : {
				key : 'AIzaSyCCBpBrmg3dCUCoIJAUfwnIJobwms9Oq3g',
				part : 'snippet',
				q : nextProps.name,
				type : 'video'
			}
		})
		.then(function(response){
			// console.log("response by getting the search");
			// console.log(response);
			var titles = response.data.items.map(function(item){
				// return item.snippet.title;
				return item;
			})
			_self.setState({results : titles});
		});
	}
}
export default Results;