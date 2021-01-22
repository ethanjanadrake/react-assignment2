import React from 'react';

const charCount = (props) => {
	return (
		<div className='charCount'>
			<input className='charCountInput' type='text' value={props.text} onChange={props.changed} />
			<p>{props.chars}</p>
		</div>
	);
};

export default charCount;
