const deleteMutation = `
  mutation delete($type: String!, $id: String!) {
    delete(type: $type, id: $id)
  }
`;

module.exports = deleteMutation;
