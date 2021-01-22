import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {
	return (
		<li className='charComponent'>
			<p>{props.char}</p>
		</li>
	);
};

export default charComponent;
