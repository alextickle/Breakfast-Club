const usersQuery = `
  query usersQuery {
    users {
      id
      firstName
      lastName
      email
      neighborhood
      voted
      rsvp
      admin
      active
    }
  }
`;

export default usersQuery;
