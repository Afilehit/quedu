import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase/app'
import Fire from '../Fire'

export default class Chat extends Component {

  state = {
    messages: [
      //example message with multiple properties
      // {
      //   _id: 1, // message id
      //   text: 'Hello developer',
      //   createdAt: new Date(), // date sent
      //   // sender info
      //   user: {
      //     _id: 2, // user id
      //     name: 'React Native', // username
      //     avatar: 'https://placeimg.com/140/140/any', // profile picture
      //   },
      // }
    ],
  };

  get user() {
    return {
      name: Fire.shared.displayName,
      _id: Fire.shared.uid,
    };
  }

  componentDidMount() {
    // loading messages from the backend
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
        renderUsernameOnMessage={true}
        showAvatarForEveryMessage={false}
      />
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }
}