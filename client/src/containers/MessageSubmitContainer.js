import { graphql } from 'react-apollo';
import MessageSubmit from '../components/MessageSubmit';
import addMessageMutation from '../queries/addMessageMutation';

const MessageSubmitContainer = graphql(addMessageMutation)(MessageSubmit);

export default MessageSubmitContainer;
