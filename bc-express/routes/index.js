const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const moment = require('moment');

// models
const Place = require('../models').Place;
const Bevent = require('../models').Bevent;
const GuestList = require('../models').GuestList;
const User = require('../models').User;
const Message = require('../models').Message;

const authorization = function(request, response, next) {
	const token = request.query.authToken || request.body.authToken;
	if (token) {
		User.findOne({
			where: { authToken: token }
		}).then(user => {
			if (user) {
				request.currentUser = user;
				next();
			} else {
				response.status(401);
				response.json({ message: 'Authorization Token Invalid' });
			}
		});
	} else {
		response.status(401);
		response.json({ message: 'Authorization Token Required' });
	}
};

const getCurrentEvent = () => {
	return Bevent.findOne({
		limit: 1,
		order: [['date', 'DESC']],
		include: [
			{
				model: GuestList,
				as: 'guestLists',
				include: [{ model: User, as: 'user' }]
			},
			{ model: Place, as: 'place_1' },
			{ model: Place, as: 'place_2' }
		]
	});
};

app.get('/', function(request, response) {
	return getCurrentEvent().then(bevent => {
		response.json({
			message: 'API Example App',
			bevent: bevent
		});
	});
});

// fetches all messages from database
app.get('/messages', function(request, response) {
	Message.findAll()
		.then(function(messages) {
			response.status(200);
			response.json({ message: 'success', messages: messages });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

// adds a message to database and adds the created message to the response
app.post('/messages', function(request, response) {
	Message.create({
		content: request.body.content,
		author: request.body.author
	})
		.then(function(message) {
			response.status(200);
			response.json({ message: 'success', message: message });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

// updates the current event with the winner
app.get('/count-votes', function(request, response) {
	let count_1 = 0;
	let count_2 = 0;
	let winner;
	return Bevent.findOne({
		limit: 1,
		order: [['date', 'DESC']],
		include: [
			{
				model: GuestList,
				as: 'guestLists'
			}
		]
	})
		.then(bevent => {
			for (var i = 0; i < bevent.guestLists.length; i++) {
				if (bevent.guestLists[i].vote == '1') {
					count_1++;
				} else if (bevent.guestLists[i].vote == '2') {
					count_2++;
				}
			}
			if (count_1 > count_2) {
				winner = 1;
			} else {
				winner = 2;
			}
			return Bevent.update(
				{
					winner: winner,
					vote_status: false
				},
				{
					where: {
						id: bevent.id
					}
				}
			);
		})
		.then(getCurrentEvent)
		.then(bevent => {
			response.status(200);
			response.json({
				event: bevent
			});
		})
		.catch(function() {
			response.status(400);
			console.log('else count votes failed');
		});
});

// creates GuestList object with vote info and updates User vote status
app.post('/register-vote', function(request, response) {
	let event_id = request.body.event.id;
	let user_id = request.body.user.id;
	let choice = request.body.choice;
	let params = {
		event_id: event_id,
		user_id: null,
		vote: choice
	};
	// create GuestList without user id
	return GuestList.create(params)
		.then(function() {
			// set User voted column to true
			return User.update(
				{
					voted: true
				},
				{
					where: {
						id: user_id
					}
				}
			);
		})
		.then(getCurrentEvent)
		.then(bevent => {
			response.status(200);
			response.json({
				event: bevent
			});
		})
		.catch(error => {
			response.status(400);
			console.log('no data found');
		});
});

// creates GuestList object with vote info and updates User vote status
app.put('/rsvp', function(request, response) {
	let user_id = request.body.user_id;
	let event_id = request.body.event_id;
	let rsvp = request.body.rsvp;
	let guestListParams = { event_id: event_id };
	if (!rsvp) {
		guestListParams.user_id = user_id;
	}
	return GuestList.findOne({
		where: guestListParams
	}).then(guestList => {
		return GuestList.update(
			{
				user_id: rsvp ? user_id : null
			},
			{
				where: { id: guestlist.id }
			}
		)
			.then(() => {
				// update the user's rsvp status in the rsvp table to true or false
				return User.update(
					{
						rsvp: rsvp
					},
					{
						where: {
							id: user_id
						}
					}
				);
			})
			.then(getCurrentEvent)
			.then(bevent => {
				response.status(200);
				response.json({
					event: bevent
				});
			})
			.catch(error => {
				response.status(400);
				console.log('no data found');
			});
	});
});

//to fetch historic events, could do "where event active status = false"
app.get('/guestlist', function(request, response) {
	User.findAll({
		where: { rsvp: true }
	})
		.then(function(guestlist) {
			response.status(200);
			response.json({ message: 'success', guestlist: guestlist });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

app.get('/events', function(request, response) {
	Bevent.findAll({
		include: [
			{
				model: GuestList,
				as: 'guestLists',
				include: [{ model: User, as: 'user' }]
			},
			{ model: Place, as: 'place_1' },
			{ model: Place, as: 'place_2' }
		]
	})
		.then(events => {
			response.status(200);
			response.json({ message: 'success', events: events });
		})
		.catch(error => {
			response.status(500);
			response.json({ message: 'error', errors: error.errors });
		});
});

app.get('/places', function(request, response) {
	Place.findAll({
		where: { active: true }
	})
		.then(function(places) {
			response.status(200);
			response.json({ message: 'success', places: places });
		})
		.catch(error => {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

app.post('/places', function(request, response) {
	let placeParams = request.body.place;
	Place.create(placeParams)
		.then(function(place) {
			response.status(200);
			response.json({ message: 'success', place: place });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

app.post('/signup', function(request, response) {
	User.create({
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		email: request.body.email,
		neighborhood: request.body.neighborhood,
		password: request.body.password
	})
		.then(user => {
			response.status(200);
			response.json({ message: 'success', user: user });
		})
		.catch(error => {
			response.status(400);
			response.json({ message: 'Unable to create user', errors: error.errors });
		});
});

app.put('/profile', function(request, response) {
	let userParams = request.body.user;
	User.update(userParams, { where: { id: userParams.id } })
		.then(function(user) {
			response.status(200);
			response.json({ message: 'success', user: user });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

app.post('/create-event', function(request, response) {
	let _places;
	let _place_id_1;
	let _place_id_2;
	return Place.findAll()
		.then(places => {
			_places = places;
			let num = _places.length;
			let index1 = Math.floor(Math.random() * num);
			let index2 = index1;
			while (index2 == index1) {
				index2 = Math.floor(Math.random() * num);
			}
			_place_id_1 = _places[index1].id;
			_place_id_2 = _places[index2].id;
		})
		.then(() => {
			let date = moment().hour(8).day(12).minute(0).second(0);
			return Bevent.create({
				place_1_id: _place_id_1,
				place_2_id: _place_id_2,
				date: date,
				winner: null,
				createdAt: Date.now(),
				updatedAt: Date.now()
			});
		})
		.then(() => {
			return User.update(
				{
					voted: false,
					rsvp: false
				},
				{ where: {} }
			);
		})
		.then(getCurrentEvent)
		.then(bevent => {
			response.status(200);
			response.json({
				event: bevent
			});
		})
		.catch(function(error) {
			response.status(400);
			console.log('error creating event', error);
		});
});

app.get('/current-event', function(request, response) {
	return getCurrentEvent()
		.then(bevent => {
			response.status(200);
			response.json({
				event: bevent
			});
		})
		.catch(() => {
			response.status(400);
			console.log('no data found');
		});
});

app.post('/past-event', function(request, response) {
	let id = request.body.id;
	// find the past event
	Bevent.findOne({
		where: { id: id },
		include: [
			{
				model: GuestList,
				as: 'guestLists',
				include: [{ model: User, as: 'user' }]
			},
			{ model: Place, as: 'place_1' },
			{ model: Place, as: 'place_2' }
		]
	})
		.then(bevent => {
			response.status(200);
			response.json({
				event: bevent
			});
		})
		.catch(error => {
			response.status(400);
			console.log('no data found');
		});
});

app.put('/login', function(request, response) {
	User.findOne({
		where: { email: request.body.email }
	}).then(user => {
		if (user && user.verifyPassword(request.body.password)) {
			response.status(200);
			response.json({
				message: 'Success!',
				user: user
			});
		} else {
			response.status(400);
			response.json({ message: 'invalid email and/or password' });
		}
	});
});

//start Admin endpoints
app.get('/admin/get/places', function(request, response) {
	Place.findAll()
		.then(places => {
			response.status(200);
			response.json({ message: 'success', places: places });
		})
		.catch(error => {
			response.status(400);
			response.json({ error: error });
		});
});
app.get('/admin/get/users', function(request, response) {
	User.findAll().then(function(users) {
		response.status(200);
		response.json({ message: 'success', users: users });
	});
});
app.get('/admin/get/events', function(request, response) {
	Bevent.findAll().then(function(events) {
		response.status(200);
		response.json({ message: 'success', events: events });
	});
});

app.post('/admin/add/user', function(request, response) {
	let userParams = request.body.user;
	User.create(userParams)
		.then(function(user) {
			response.status(200);
			response.json({ message: 'success', user: user });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});
app.post('/admin/add/place', function(request, response) {
	let placeParams = request.body.place;
	Place.create(placeParams)
		.then(function(place) {
			response.status(200);
			response.json({ message: 'success', place: place });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});
app.post('/admin/add/event', function(request, response) {
	let eventParams = request.body.event;
	Bevent.create(eventParams)
		.then(function(event) {
			response.status(200);
			response.json({ message: 'success', event: event });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

//delete is name of HTTP method we're using. the userParams have ID because we're only passing the ID in
//destroy is the sequelize call
//this is where the front end connects to the back end. The problem is we had two delete endpoints with the same URL. As we delete a user, we're sending a delete request to the backend and it's saying hey, i'm looking for this url, and on this url i want to perform these actions. However, you have to have a unique URL for every controller if you're trying to do something uniquely to each model

//so now it will destroy all the guest lists and then it will destroy the user
app.delete('/admin/delete/user', function(request, response) {
	let userParams = request.body.id;
	GuestList.destroy({ where: { user_id: userParams } }).then(function() {
		User.destroy({ where: { id: userParams } })
			.then(function(user) {
				response.status(200);
				//this user:user comes from the then function
				response.json({ message: 'success', user: user });
			})
			.catch(function(error) {
				response.status(400);
				console.log('error', error);
				response.json({ message: 'error', errors: error.errors });
			});
	});
});
//swagger lets you see all the endpoints of an API in URL form
app.delete('/admin/delete/place', function(request, response) {
	let placeParams = request.body.id;
	Place.destroy({ where: { id: placeParams } }).then(function() {
		Bevent.destroy({
			where: {
				$or: [{ place_1_id: placeParams }, { place_2_id: placeParams }]
			}
		}).then(function(event) {
			GuestList.destroy({ where: { event_id: event.id } })
				//this is where it gets lost; event.id is null
				.then(function() {
					repsonse.status(200);
					response.json({ message: 'success' });
				})
				.catch(function(error) {
					response.status(400);
					response.json({ message: 'error', errors: error.errors });
					// })
					// })
				});
		});
	});
});
app.delete('/admin/delete/event', function(request, response) {
	let eventParams = request.body.id;
	Bevent.destroy({ where: { id: eventParams } })
		.then(function(event) {
			repsonse.status(200);
			response.json({ message: 'success', event: event });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

//ask rob for help
app.put('/admin/edit/user', function(request, response) {
	//the body contains the user, and the user contains the properties
	let userParams = request.body.user;
	User.update(userParams, { where: { id: userParams.id } })
		.then(function(user) {
			response.status(200);
			response.json({ message: 'success', user: user });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});
app.put('/admin/edit/place', function(request, response) {
	let placeParams = request.body.place;
	console.log('request', request);
	console.log('placeParams', placeParams);
	Place.update(placeParams, { where: { id: placeParams.id } })
		.then(function(place) {
			response.status(200);
			response.json({ message: 'success', place: place });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});
app.put('/admin/edit/event', function(request, response) {
	let eventParams = request.body.event;
	Bevent.update(eventParams, { where: { id: eventParams.id } })
		.then(function(event) {
			response.status(200);
			response.json({ message: 'success', event: event });
		})
		.catch(function(error) {
			response.status(400);
			response.json({ message: 'error', errors: error.errors });
		});
});

module.exports = app;
