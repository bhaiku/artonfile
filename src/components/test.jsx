console.log('hello!');

import React from 'react';
import ReactDOM from 'react-dom';

function Wombat(props) {
	return <div>{props.greeting}</div>;
}

ReactDOM.render(
	<Wombat greeting='i am the bestest wombat'/>,
	document.getElementById('root')
);