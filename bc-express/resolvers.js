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
		}
	}
};

exports.resolvers = resolvers;
