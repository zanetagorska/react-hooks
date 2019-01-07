import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
	const [ resource, setResource ] = useState('posts');
	return (
		<div className="App">
			<button onClick={() => setResource('posts')}>Posts</button>
			<button onClick={() => setResource('todos')}>Todos</button>
			<UserList />
			<ResourceList resource={resource} />
		</div>
	);
};

export default App;
