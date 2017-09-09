const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers').resolvers;

const typeDefs = `
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
    event: Bevent
    user: User
    vote: Int
  }

  type Bevent {
    id: String
    date: String
    vote_status: Boolean
    place_1: Place
    place_2: Place
    guestLists: [GuestList]
    winner: Int
    active: Boolean
    speaker: String
  }

  type Query {
    user(email: String!): User
    users: [User]
    messages: [Message]
    places: [Place]
    events: [Bevent]
    currentEvent: Bevent
    event(id: String!): Bevent
    admin: [User]
  }

  type Mutation {
    addMessage(content: String!, user_id: String!): Message
    login(email: String!, password: String!): String
    signUp(firstName: String!, lastName: String!, neighborhood: String!, email: String!, password: String!): String
    registerRSVP(email: String!, eventId: Int!, choice: String!): Bevent
    registerVote(email: String!, eventId: Int!, rsvpStatus: Boolean!): Bevent
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports.schema = schema;
