import { useEffect, useState } from 'react';
import axios from 'axios';

export const useResources = (resource) => {
	const [ resources, setResources ] = useState([]);

	const fetchResource = async (resource) => {
		const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
		setResources(response.data);
	};

	useEffect(
		() => {
			fetchResource(resource);
		},
		[ resource ]
	);

	return resources;
};
