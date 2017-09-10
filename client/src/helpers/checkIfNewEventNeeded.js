const checkIfNewEventNeeded = date => {
	let eventDate = new Date(date).getTime();
	let todaysDate = Date.now();
	if (todaysDate + 7200000 >= eventDate) {
		return true;
	} else {
		return false;
	}
};

export default checkIfNewEventNeeded;
