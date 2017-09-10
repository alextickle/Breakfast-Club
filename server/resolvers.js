const User = require('./models').User;
const Bevent = require('./models').Bevent;
const Message = require('./models').Message;
const GuestList = require('./models').GuestList;
const Place = require('./models').Place;

const resolvers = {
	Query: {
		user(root, args) {
			return User.find({ where: args });
		},
		users() {
			return User.findAll();
		},
		messages() {
			return Message.findAll();
		},
		places() {
			return Place.findAll();
		},
		events() {
			return Bevent.findAll({
				include: [
					{ model: Place, as: 'place_1' },
					{ model: Place, as: 'place_2' }
				]
			});
		},
		currentEvent() {
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
		},
		event(root, args) {
			return Bevent.find({
				where: args,
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
		},
		admin(root, args) {
			return User.findAll();
		}
	},
	Mutation: {
		addMessage(root, args) {
			return Message.create({
				content: args.content,
				author: args.author,
				user_id: args.user_id
			});
		},
		login(root, args) {
			return User.findOne({
				where: { email: args.email }
			})
				.then(user => {
					if (user && user.verifyPassword(args.password)) {
						return Promise.resolve(user.email);
					} else {
						return Promise.reject('login failed');
					}
				})
				.catch(error => Promise.reject('login failed'));
		},
		signUp(root, args) {
			return User.create(args)
				.then(user => Promise.resolve(user.email))
				.catch(error => Promise.reject('signUp failed'));
		},
		registerVote(root, args) {
			return User.update(
				{ voted: true },
				{
					where: { id: args.userId }
				}
			)
				.then(() =>
					GuestList.create({
						vote: args.choice,
						event_id: args.eventId,
						user_id: args.userId
					})
				)
				.then(() =>
					GuestList.find({
						where: {
							event_id: args.eventId,
							user_id: args.userId
						},
						include: [{ model: User, as: 'user' }]
					})
				);
		},
		registerRSVP(root, args) {
			return User.update(
				{ rsvp: args.rsvpStatus },
				{
					where: { id: args.userId }
				}
			).then(() =>
				User.find({
					where: { id: args.userId }
				})
			);
		}
	}
};

exports.resolvers = resolvers;
