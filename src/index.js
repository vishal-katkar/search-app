import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/grid';
// import YTSearch from 'youtube-search';
// const API_KEY = 'AIzaSyB23gXmZOJjYDGJTjlA602os76TQOrTr_k';


// YTSearch({key: API_KEY ,term : 'surfboard'}, function(data){
// 	console.log(data);
// });
const App = () => {
	return (
		<div>
			<Grid />
		</div>
		);
}


ReactDOM.render(<App />, document.getElementById('root'));
