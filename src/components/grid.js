import React from 'react';
import Word from './word.json';
import _ from 'lodash';

var cardStyle = {
	width : '320px',
	height : '320px'
};

class Grid extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			term  : '',list : Word.words,
			search : ''
		};
	}
	 
	updatedData(event){
		this.setState({search: event.target.value})
	}


  render() {
  	let filterList = this.state.list.filter(
  		(item) => {
 
  			return item.word.indexOf(this.state.search) !== -1 || item.meaning.indexOf(this.state.search) !== -1; 
  			}
  		);
  	 var flower = filterList.map(function(item){
      return (
      	
		  <div class="column">
		    <div class="post-module">
		      <div class="thumbnail">
		  		<img class="card-img-top" src={"http://appsculture.com/vocab/images/"+ item.id +".png"} alt={item.word}  />
		      </div>
		      <div class="post-content">
		        <div class="category">Photos</div>
		        <h1 class="title">{item.word}</h1>
		        <h2 class="sub_title">{item.meaning}.</h2>
		        <p class="description">{item.meaning}.</p>
		      </div>
		    </div>
		  </div>
      	);
    });
    return (
      <div class="container">
      	<input type="text" placeholder="Search" name="search"  value = {this.state.search}
      	onChange={this.updatedData.bind(this)}
      	/>
      	<div>{flower}</div>
      
      </div>
    );
  }
 
}

    
export default Grid;