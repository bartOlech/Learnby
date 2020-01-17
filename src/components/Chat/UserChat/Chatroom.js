import React, { Component } from 'react';
import styled from 'styled-components';
import { ChatFeed } from 'react-bell-chat';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import Header from './Header';
import { FontStyle } from '../../../assets/style/style';
// import smileIco from '../../../assets/img/Mobile/smile.svg';
import sendIco from '../../../assets/img/Mobile/sendMessage1.svg';
import firebase from '../../../Firebase.config';
import SecondsToDate from './SecondsToDate';
 
const Container = styled.div`

`
const Form = styled.form`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0%;
    display: flex;
    border-top: 1px solid #D6D6D6;
`
const FormBox = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    font-family: ${FontStyle.family};
    color: ${FontStyle.color};
    font-size: 1.3em;
    outline: none;
    padding-left: 10px;
`
const SendButton = styled.div`
    margin-top: 200px;
    width: 50px;
    height: 50px;
    background-image: url(${sendIco});
    background-repeat: no-repeat;
    background-size: 30px 30px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
`

class UserChatBox extends Component{
    state = {
        isExecuted: false,
        messageInputValue: '',
        
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
            isSend: false
          },
        ],
        authors: [
          {
            id: 1,
            name: 'Mark',
            isTyping: true,
            // lastSeenMessageId: 1,
            bgImageUrl: undefined
          },
          {
            id: 2,
            name: 'Peter',
            isTyping: false,
            // lastSeenMessageId: 2,
            bgImageUrl: undefined
          }
        ]
      };

    componentDidMount () {
      firebase.isInitialized().then(() => {

        // get the user messages
        firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
          let message = []
          let authors = []

          for(let[key, value] of Object.entries(doc.data().messages)) {
            for(let[key, value] of Object.entries(value.message)) {
              const date = {createdOn: SecondsToDate(value.date.seconds)}

              let id = {authorId: 2}
              let messagesObject = {...value, ...id, ...date} 
              
              message.push(messagesObject)
            }
            authors.push(value.authors)
          }
          this.setState({
            messages: message
          })
        }).then(() => {

          // get the interlocutor messages
          firebase.getDataFromFirestore('user').doc(this.props.match.params.id).get().then(doc => {

            let message = this.state.messages
            let authors = []

            for(let[key, value] of Object.entries(doc.data().messages)) {
              for(let[key, value] of Object.entries(value.message)) {
                const date = {createdOn: SecondsToDate(value.date.seconds)}

                let id = {authorId: 1}
                let messagesObject = {...value, ...id, ...date} 
                
                message.push(messagesObject)
              }
              authors.push(value.authors)
            }
            this.setState({
              messages: message,
            })
            console.log(this.state.messages)
          })
        })
      })
    }

    handleSendMessage = (val) => {
      this.setState({
        messageInputValue: val.target.value
      })

    }

    sendMessage = () => {
      const{ messageInputValue } = this.state;

      this.setState({
        messageInputValue: ''
      })
      console.log(messageInputValue)
    }

    handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        this.sendMessage()
      }
    }


    render() {
        const { isExecuted, messageInputValue } = this.state;

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
                            // maxHeight='140vw'
                            style={{position: 'absolute', top: '100px', bottom: '50px', width: '100%'}}
                        />  
                        <Form>
                            <FormBox>
                                <Input 
                                  placeholder='Napisz wiadomość...'
                                  value={messageInputValue}
                                  onChange={this.handleSendMessage}
                                  onKeyDown={this.handleKeyDown}
                                  >      
                                </Input>
                                {/* <SmileButton></SmileButton> */}
                                <SendButton onClick={this.sendMessage}></SendButton>
                            </FormBox>
                        </Form>
                    </Container>
                )}
            </FindAnnouncementConsumer>
        )
    } 
}

export default UserChatBox;