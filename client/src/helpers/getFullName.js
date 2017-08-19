import React from 'react';

const getFullName = (item, index) => {
	let fullname = [item.firstName, item.lastName.slice(0, 1)].join(' ');
	return (
		<span>
			{fullname}.,{' '}
		</span>
	);
};

export default getFullName;
