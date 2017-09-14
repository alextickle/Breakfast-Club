const messageQuery = `
  query messageQuery($id: String!) {
    message(id: $id) {
      id
      content
    }
  }
`;

module.exports = messageQuery;
