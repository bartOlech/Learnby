import React, { Component } from 'react';
import styled from 'styled-components';
import { ChatFeed } from 'react-bell-chat';
import { FindAnnouncementConsumer } from '../../../context/CurrentUser.context';
import Header from './Header';
import { FontStyle } from '../../../assets/style/style';
import ReturnButton from '../ReturnButton/ReturnButton';
// import smileIco from '../../../assets/img/Mobile/smile.svg';
import sendIco from '../../../assets/img/Mobile/sendMessage1.svg';
import firebase from '../../../Firebase.config';
import SecondsToDate from './SecondsToDate';
import uniqid from 'uniqid';
import Media from 'react-media';
// desktop components
import DesktopLeftLayout from './DesktopLeftLayout/DesktopLeftLayout';
import DesktopRightLayout from './DesktopRightLayout/DesktopRightLayout';
import WaveBackgroundImage from '../../../assets/img/Desktop/Chat/wave-background-chat.svg';
 
const Container = styled.div`

`
const Form = styled.form`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    display: flex;
    border-top: 1px solid #D6D6D6;
    @media(min-width: 1100px) {
      width: 40%;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: 10px;
      border: none;
    }
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
    @media(min-width: 1100px) {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      margin-top: -16px;
      &&::placeholder {
        padding-left: 12px;
      }
    }
`
const SendButtonBox = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;
  @media(min-width: 1100px) {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-top: -16px;
    }
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
    margin-bottom: -5px;
    cursor: pointer;
    @media(min-width: 1100px) {
      margin-top: 18px;
      margin-right: -5px;
      margin-bottom: 0;
    }
`
const DesktopBox = styled.div`
  width: 100%;
  height: 100%;
  display: inline;
  @media(min-width: 1100px) {
    display: flex;
  }
`
const WaveBackground = styled.div`
  width: 100%;
  height: 95px;
  background-image: url(${WaveBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 0;
  z-index: -3;
  opacity: 1;
`

class UserChatBox extends Component{
    state = {
        isExecuted: false,
        messageKeys: [],
        messageInputValue: '',
        userIdValue: '',
        messages: [
          
        ],
        userData: ''
      };

    componentDidMount () {
      firebase.isInitialized().then(() => {
        // get realtime firebase 
        firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
          const userId = this.props.match.params.id
          const{ messageKeys } = this.state;
          let message = []

          for(let[key, value] of Object.entries(doc.data().MessagesId)) {
            if(key === userId) {
              firebase.getDataFromFirestore('Messages').doc(value).onSnapshot(querySnapshot => {
                if(querySnapshot.exists) {
                  for(let[key, value] of Object.entries(querySnapshot.data().messages)) {
                    const date = {createdOn: SecondsToDate(value.date.seconds)}
                    let id = {}
                    if(!messageKeys.includes(key)) {
                      // adjust authorId
                      value.authorId === this.props.match.params.id ? (
                        id = {authorId: 1}
                      ) : (
                        id = {authorId: 2}
                      )

                      let messagesObject = {...value, ...id, ...date} 
                      message.push(messagesObject)
                      messageKeys.push(key)
                    }
                  }
                  this.setState({
                    messages: message
                  }, () => {
                    this.chat && this.chat.onMessageSend()
                  })
                }
              })
            }
          }

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
      const userId = this.props.match.params.id
      const uniqueKey = uniqid()

      firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
        for(let[key, value] of Object.entries(doc.data().MessagesId)) {
          if(key === userId) {
            firebase.getDataFromFirestore('Messages').doc(value).get().then(doc => {
              
              const objectMessage = {         // new message to firestore
                authorId: firebase.getCurrentUid(),
                date: new Date(),
                message: messageInputValue
              }
              if(doc.exists) {
                // update document in firestore
                const messagesFromFirestore = doc.data().messages
                const map = new Map();
                map.set(uniqueKey, objectMessage)
                const mapToObject = Object.fromEntries(map)

                const mergeObject = Object.assign(messagesFromFirestore, mapToObject)

                firebase.sendDataToFirestore('Messages').doc(value).update({
                  messages: mergeObject
                })
              
              } else {
                // create a new document in firestore
                // update local state
                let message = []
                const objectMessage2 = {
                  authorId: 2,
                  createdOn: new Date(),
                  message: messageInputValue
                }
                message.push(objectMessage2)

                this.setState({
                  messages: message
                }, () => {
                  this.chat && this.chat.onMessageSend()
                })

                const map = new Map();
                map.set(uniqueKey, objectMessage)

                const mapToObject = Object.fromEntries(map)
                firebase.sendDataToFirestore('Messages').doc(value).set({
                  messages: mapToObject
                })

                // Get realtime firebase
                firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
                  const userId = this.props.match.params.id
                  const{ messageKeys } = this.state;
                  let message = []
        
                  for(let[key, value] of Object.entries(doc.data().MessagesId)) {
                    if(key === userId) {
                      firebase.getDataFromFirestore('Messages').doc(value).onSnapshot(querySnapshot => {
                        if(querySnapshot.exists) {
                          for(let[key, value] of Object.entries(querySnapshot.data().messages)) {
                            const date = {createdOn: SecondsToDate(value.date.seconds)}
                            let id = {}
                            if(!messageKeys.includes(key)) {
                             // adjust authorId
                              value.authorId === this.props.match.params.id ? (
                                id = {authorId: 1}
                              ) : (
                                id = {authorId: 2}
                              )
        
                              let messagesObject = {...value, ...id, ...date} 
                              message.push(messagesObject)
                              messageKeys.push(key)
                            }
                          }
                          this.setState({
                            messages: message
                          }, () => {
                            this.chat && this.chat.onMessageSend()
                          })
                        }
                      })
                    }
                  }
        
                })
                ///////////////////////////////////////
              }           
            })       
          }
        }
        // clear message field
        this.setState({
          messageInputValue: ''
        })
      })
    }

    handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        this.sendMessage()
      }
    }

    UpdateUserMessages = () => {

      firebase.isInitialized().then(() => {
        this.setState({
          messageKeys: [],
          messageInputValue: '',
          userIdValue: '',
          messages: [
          
          ]
        })
        // get realtime firebase 
        firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
          const userId = this.props.match.params.id
          const{ messageKeys } = this.state;
          let message = []

          for(let[key, value] of Object.entries(doc.data().MessagesId)) {
            if(key === userId) {
              firebase.getDataFromFirestore('Messages').doc(value).onSnapshot(querySnapshot => {
                if(querySnapshot.exists) {
                  for(let[key, value] of Object.entries(querySnapshot.data().messages)) {
                    const date = {createdOn: SecondsToDate(value.date.seconds)}
                    let id = {}

                    if(!messageKeys.includes(key)){
                      // adjust authorId
                      value.authorId === this.props.match.params.id ? (
                        id = {authorId: 1}
                      ) : (
                        id = {authorId: 2}
                      )

                      let messagesObject = {...value, ...id, ...date} 
                      message.push(messagesObject)
                      messageKeys.push(key)
                      
                    }
                  }
                  this.setState({
                    messages: message
                  }, () => {
                    this.chat && this.chat.onMessageSend()
                  })
                }
              })
            }
          }

        })
        // get user data
        firebase.getDataFromFirestore('user').doc(this.props.match.params.id).get().then(snapshot => {
          this.setState({
            userData: snapshot.data()
          })
      })
      })
    }

    render() {
        const { isExecuted, messageInputValue, userData } = this.state;

        return (
            <FindAnnouncementConsumer>
                {({ userDataFromUserCollection, getUserDataIfRefresh }) => (
                  <DesktopBox>
                    <Media query="(min-width: 1100px)" render={() => (
                      <ReturnButton top='28px' left='82px'></ReturnButton>
                    )}
                    />
                    <DesktopLeftLayout display='none' UpdateUserMessages={this.UpdateUserMessages} userId={this.props.match.params.id}></DesktopLeftLayout>
                    <Container>
                        {!isExecuted ? (
                            getUserDataIfRefresh(this.props.match.params.id),
                            this.setState({
                                isExecuted: true
                            })
                        ) : null}
                        {userDataFromUserCollection.Name !== undefined ? (
                          
                            <Header 
                                image={userDataFromUserCollection.PhotoUrl || userDataFromUserCollection.photoUrl}
                                name={userDataFromUserCollection.Name.replace(/ .*/,'')}
                            ></Header>
                        ) : (
                            <Header 
                                image=''
                                name=''
                            ></Header>
                        )}
                        {/* Phone */}
                        <Media query="(max-width: 1100px)" render={() =>
                            (
                              <ChatFeed
                                ref={e => this.chat = e}
                                messages={this.state.messages} // Array: list of message objects
                                authors={this.state.authors} // Array: list of authors
                                yourAuthorId={2} // Number: Your author id (corresponds with id from list of authors)
                                style={{
                                  position: 'absolute', 
                                  top: '100px', 
                                  bottom: '50px', 
                                  width: '100%',
                                  background: '#EFEFEF',}}
                                  chatBubbleStyles={{
                                    chatBubble: {
                                      backgroundColor: '#33BFAC'
                                    }
                                  }}
                              />  
                            )}
                        />
                        {/* Desktop */}

                        <Media query="(min-width: 1100px)" render={() =>
                            (
                              <ChatFeed
                                ref={e => this.chat = e}
                                messages={this.state.messages} // Array: list of message objects
                                authors={this.state.authors} // Array: list of authors
                                yourAuthorId={2} // Number: Your author id (corresponds with id from list of authors)
                                chatBubbleStyles={{
                                  chatBubble: {
                                    backgroundColor: '#33BFAC'
                                  }
                                }}
                                style={{
                                  position: 'absolute', 
                                  top: 0, 
                                  left:0,
                                  right:0,
                                  marginLeft: 'auto',
                                  marginRight: 'auto',
                                  bottom: '0',
                                  paddingBottom: '100px', 
                                  width: '50%',
                                  background: '#EFEFEF',
                                  }}
                              />                        
                            )}
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
                                <SendButtonBox>
                                  <SendButton onClick={this.sendMessage}></SendButton>
                                </SendButtonBox>
                            </FormBox>
                        </Form>
                    </Container>
                    {this.props.match.params.id  === 'mWBuVDnGQCQ8vtT1CbcQRwO1Qyu1' ? (
                         null
                    ) : (
                      userDataFromUserCollection.Name !== undefined ? (
                        userData === '' ? (
                          <DesktopRightLayout 
                            name={userDataFromUserCollection.Name.replace(/ .*/,'')}
                            image={userDataFromUserCollection.PhotoUrl || userDataFromUserCollection.photoUrl}
                            place={userDataFromUserCollection.Place}
                            age={userDataFromUserCollection.Age}
                            sex={userDataFromUserCollection.Sex}
                            >
                          </DesktopRightLayout>
                        ) : (
                          <DesktopRightLayout 
                            name={userData.Name.replace(/ .*/,'')}
                            image={userData.PhotoUrl || userData.photoUrl}
                            place={userData.Place}
                            age={userData.Age}
                            sex={userData.Sex}
                            >
                          </DesktopRightLayout>
                        )
                      ) : (
                        <DesktopRightLayout 
                          name=''
                          image=''
                        >
                        </DesktopRightLayout>
                      )
                    )}
                    
                      <WaveBackground></WaveBackground>
                  </DesktopBox>
                )}
            </FindAnnouncementConsumer>
        )
    } 
}

export default UserChatBox;