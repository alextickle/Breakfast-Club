const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const resolvers = require("./resolvers").resolvers;

const typeDefs = `
type Query {
  user(id: Int): User
  users: [User]
  messages: [Message]
  places: [Place]
  currentEvent: Bevent
  event(id: Int): Bevent
  admin: [User]
}

type User {
  id: String
  firstName: String
  lastName: String
  email: String
  neighborhood: String
  voted: Boolean
  rsvp: Boolean
  admin: Boolean
  active: Boolean
}

type Message {
  content: String
  author: String
  user: User
}

type Place {
  name: String
  address_street: String
  address_city: String
  address_state: String
  address_zip: String
  phone: String
  yelp_rating: Int
  image_url: String
  categories: String
  review_count: Int
  price: String
  url: String
  active: Boolean
  events_1: [Bevent]
  events_2: [Bevent]
}

type GuestList {
  event: Bevent
  user: User
  vote: String
}

type Bevent {
  date: String
  vote_status: Boolean
  place_1: Place
  place_2: Place
  guestLists: [GuestList]
  winner: Int
  active: Boolean
  speaker: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports.schema = schema;
