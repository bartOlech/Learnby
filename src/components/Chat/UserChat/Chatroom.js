import React, { Component } from 'react';
import styled from 'styled-components';
import { ChatFeed } from 'react-bell-chat';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import Header from './Header';
 
const Container = styled.div`

`
const Form = styled.form`

`

class UserChatBox extends Component{
    state = {
        isExecuted: false,
        messages: [
          {
            id: 1,
            authorId: 1,
            message: "Sample message",
            createdOn: new Date(),
            isSend: true
          },
          {
            id: 2,
            authorId: 2,
            message: "Second sample message",
            createdOn: new Date(),
            isSend: true
          },
        ],
        authors: [
          {
            id: 1,
            name: 'Mark',
            isTyping: true,
            lastSeenMessageId: 1,
            bgImageUrl: undefined
          },
          {
            id: 2,
            name: 'Peter',
            isTyping: false,
            lastSeenMessageId: 2,
            bgImageUrl: undefined
          }
        ]
      };

      

    render() {
        const { isExecuted } = this.state;

        return (
            <FindAnnouncementConsumer>
                {({ userDataFromUserCollection, getUserDataIfRefresh }) => (
                    <Container>
                        {!isExecuted ? (
                            getUserDataIfRefresh(this.props.match.params.id),
                            this.setState({
                                isExecuted: true
                            })
                        ) : null}
                        {console.log(userDataFromUserCollection)}
                        {userDataFromUserCollection.Name !== undefined ? (
                            <Header 
                                image={userDataFromUserCollection.PhotoUrl}
                                name={userDataFromUserCollection.Name.replace(/ .*/,'')}
                            ></Header>
                        ) : (
                            <Header 
                                image=''
                                name=''
                            ></Header>
                        )}
                        
                        <ChatFeed
                            messages={this.state.messages} // Array: list of message objects
                            authors={this.state.authors} // Array: list of authors
                            yourAuthorId={2} // Number: Your author id (corresponds with id from list of authors)
                        />
                        <Form>

                        </Form>
                    </Container>
                )}
            </FindAnnouncementConsumer>
        )
    } 
}

export default UserChatBox;