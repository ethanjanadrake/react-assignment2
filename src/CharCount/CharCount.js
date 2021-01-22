import React from 'react';

const charCount = (props) => {
	return (
		<div className='charCount'>
			<input type='text' onChange={props.changed} />
			<p>{props.chars}</p>
		</div>
	);
};

export default charCount;
