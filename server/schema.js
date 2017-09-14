const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers').resolvers;

const typeDefs = `
  scalar JSON

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
    id: String
    content: String
    createdAt: String
    user: User
  }

  type Place {
    id: String
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
    id: String
    vote: Int
    attended: Boolean
    event: Bevent
    user: User
  }

  type Bevent {
    id: String
    date: String
    vote_status: Boolean
    winner: Int
    active: Boolean
    speaker: String
    place_1: Place
    place_2: Place
    guestLists: [GuestList]
  }

  type Query {
    user(email: String!): User
    users: [User]
    message(id: String!): Message
    messages: [Message]
    places: [Place]
    currentEvent: Bevent
    event(id: String!): Bevent
    events: [Bevent]
  }

  type Mutation {
    login(email: String!, password: String!): String
    signUp(firstName: String!, lastName: String!, neighborhood: String!, email: String!, password: String!): String
    registerRSVP(userId: String!, rsvpStatus: Boolean!): User
    registerVote(userId: String!, eventId: String!, choice: Int!): GuestList
    addEvent: String
    addMessage(content: String!, user_id: String!): Message
    addUser(email: String!, password: String!, firstName: String!, lastName: String!, neighborhood: String!): User
    addPlace(name: String!, yelp_rating: Int!, price: String!, categories: String!, address_street: String!, phone: String!): Place
    updateUser(email: String!, firstName: String!, lastName: String!, neighborhood: String!): User
    updatePlace(id: String!, name: String!, yelp_rating: String!, price: String!, address_street: String!, phone: String!, active: Boolean!): Place
    updateSpeaker(id: String!, speaker: String!): Bevent
    deactivateUser(email: String!): String
    delete(type: String!, id: String!): String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports.schema = schema;
