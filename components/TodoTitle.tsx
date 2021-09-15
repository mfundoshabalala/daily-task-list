import useFetchData from 'hooks/useFetchData';
import React from 'react';
import Heading from './Heading';
import InspirationalQuote from './InspirationalQuote';

const TodoTitle: React.FC = () => (
	<div className="">
		<Heading />
		<InspirationalQuote />
	</div>
);

export default TodoTitle;
