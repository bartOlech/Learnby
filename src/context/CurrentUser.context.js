import React, { Component } from 'react';
import firebase from '../Firebase.config';
import _ from 'lodash';
import uniqid from 'uniqid';

// functions 
import generateKeywords from './functions/GenerateKeywords';

const CurrentUserContext = React.createContext();
const FindAnnouncementContext = React.createContext();

export class CurrentUserProvider extends Component {
    state = {
        user: '',
        firebaseInitialized: '',
        name: '',
        email: '',
        photo: '',
        loading: false,
        ex: false,
        // Add data to arrays if announcement has been clicked
        selectedAnnouncementData: [{AnnouncementCreator: {
            Age: '',
            Email: '',
            PhotoUrl: '',
            Sex: '',
            UserId: '',
            UserName: '',
        }, Comments: { }, Description: '', LevelOfKnowledge: '', Place: '', Remote: '', Subject: ''}],

        commentsMap: new Map(),
        commentsArray: [],
        addAnnouncementLayoutNumeber: 0,
        addAnnouncementData: {
            subject: '',
            levelOfKnowledge: 3,
            remote: false,
            name: '',
            surname: '',
            city: '',
            age: 0,
            sex: '',
            description: '', 
            regulations: false
        },
        userDataFromUserCollection: '',
        // announcements created by the user
        userAnnouncements: new Map(),
        // get values after searching
        announcementList: new Map(),
        randomAnnouncement: new Map(),
        newestAnnouncement: new Map(),
    }

    logout = () => {
        firebase.logout()
        this.setState({
            user: '',
            name: '',
            email: '',
            photo: ''
        })
    }

    // Social login
    // Google
    loginWithGoogle = () => {
        firebase.signInWithGoogle().then(() => {
            this.setState({
                name: firebase.getCurrentUserAllData().displayName,
                email: firebase.getCurrentUser(),
                photo: firebase.getCurrentUserAllData().photoURL
            })
        }).then(() => {
            const { name, email, photo } = this.state;
            firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
                if(!doc.exists) {
                    firebase.addUserDataToFirebase('user').doc(firebase.getCurrentUid()).set({
                        type: 'Google',
                        Name: name,
                        Email: email,
                        PhotoUrl: photo,
                        Uid: firebase.getCurrentUid(),
                        Announcements: {},
                        AnnouncementLikes: [],
                        MessagesId: {}
                    })
                }
            })
        }).catch(error => console.log(error))
    }
    // Facebook
    loginWithFacebook = () => {
        firebase.signInWithFacebook().then(() => {
            this.setState({
                name: firebase.getCurrentUserAllData().displayName,
                email: firebase.getCurrentUser(),
                photo: `${firebase.getCurrentUserAllData().photoURL}?type=normal`
            })
        }).then(() => {
             const { name, email, photo } = this.state;
             firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
                if(!doc.exists) {
                    firebase.addUserDataToFirebase('user').doc(firebase.getCurrentUid()).set({
                        type: 'Facebook',
                        Name: name,
                        Email: email,
                        PhotoUrl: photo,
                        Uid: firebase.getCurrentUid(),
                        Announcements: {},
                        AnnouncementLikes: [],
                        MessagesId: {}
                    })
                }
            })
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        const{ randomAnnouncement, newestAnnouncement } = this.state;
        firebase.isInitialized().then(val => {
            this.setState({
                firebaseInitialized: val,
                user: firebase.getCurrentUser()
            })
          })

        // here create function that will be draws lots announcement
        firebase.getDataFromFirestore('Announcements').doc('LqB5OyvGsoTp3hf6DB6o').get().then(doc => {
            randomAnnouncement.clear()
            randomAnnouncement.set(doc.id, doc.data())
        }).then(() => {
            this.setState({
                randomAnnouncement
            })
        }) 
        // get the newest announcement (actual is selected announcement, not newest!!!)
        firebase.getDataFromFirestore('Announcements').doc('WsafPRp30m9KhC6vET6R').get().then(doc => {
            newestAnnouncement.clear()
            newestAnnouncement.set(doc.id, doc.data())
        }).then(() => {
            this.setState({
                newestAnnouncement
            })
        }) 
    }

    getAnnouncementById = (id) => {
        const{ selectedAnnouncementData, commentsMap, commentsArray } = this.state;
        // get announcement data
        firebase.getDataFromFirestore('Announcements').doc(id).get().then(snapshot => {
            selectedAnnouncementData.splice(0)
            selectedAnnouncementData.push(snapshot.data())
            this.setState({
                selectedAnnouncementData
            })

            // get comments from firebase
            commentsArray.splice(0)
            commentsMap.clear()

            
            for (const [key, value] of Object.entries(snapshot.data().Comments)) {
                commentsMap.set(key, value)
            }

            commentsMap.forEach((val, key) => {
                commentsArray.push({ key, value: val });
            }); 
            // remove duplicate elements
            this.setState({
                commentsArray: _.uniqBy(commentsArray, 'key')
            })
        }).then(
        )   
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }

    getAnnouncementByIdRepeatToRefreshPage = (id) => {
        const{ selectedAnnouncementData, commentsMap, commentsArray } = this.state;
        
        // get announcement data
        firebase.getDataFromFirestore('Announcements').doc(id).get().then(snapshot => {
            selectedAnnouncementData.splice(0)
            selectedAnnouncementData.push(snapshot.data())

            // get comments from firebase
            for (const [key, value] of Object.entries(snapshot.data().Comments)) {
                commentsMap.set(key, value)
              }

            commentsMap.forEach((val, key) => {
                commentsArray.push({ key, value: val });
            }); 
            // remove duplicate elements
            this.setState({
                commentsArray: _.uniqBy(commentsArray, 'key')
            })
        }).then(

        )   
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }

    sendComment = (text, uid, announcementId, userData) => {
        const{ commentsArray } = this.state;
        const uniqueKey = uniqid()

        // remain only the first name of full name
        let firstName = userData.displayName.replace(/ .*/,'');

        // add a new comment to state
        commentsArray.push({
            key: uniqueKey,
            value: {
                Content: text,
                Creator: {
                    Email: userData.email,
                    UserName: firstName,
                    PhotoUrl: userData.photoURL
                },
                Likes: [],
                UniqueId: uniqid(),
            }
        })
        this.setState({
            commentsArray
        })

        // Update Comments in the firestore(add a new comment)
        firebase.getDataFromFirestore('Announcements').doc(announcementId).get().then(snapshot => {
            let commentsFromFirestore = snapshot.data().Comments
            
            const newComment = {
                Content: text,
                Creator: {
                    Email: userData.email,
                    UserName: firstName,
                    PhotoUrl: userData.photoURL
                },
                Likes: [],
                uniqueId: uniqueKey
            }

            // create a unique Id in the Object
            const map = new Map();
            map.set(uniqueKey, newComment)
            const newComentWithId = Object.fromEntries(map)

            // Merging two objects
            const MergedObject = Object.assign(newComentWithId, commentsFromFirestore)

            firebase.sendDataToFirestore('Announcements').doc(announcementId).update({
                Comments:  MergedObject
            })
        })
    }

    setAnnouncementLayout = (val) => {
        const { addAnnouncementLayoutNumeber } = this.state;
            if(val) {
                this.setState({
                    addAnnouncementLayoutNumeber: addAnnouncementLayoutNumeber + 1
                })
            } else {
                if(addAnnouncementLayoutNumeber !== 0) {
                    this.setState({
                        addAnnouncementLayoutNumeber: addAnnouncementLayoutNumeber - 1
                    })
                }
        }
    }

    setAnnouncementData = (name, value) => {
        this.setState(prevState => ({
            addAnnouncementData: {                   // object that we want to update
                ...prevState.addAnnouncementData,    // keep all other key-value pairs
                [name]: value       // update the value of specific key
            }
        }))
    }

    // clear the announcement form
    clearAnnouncementData = () => {
        this.setState({
            addAnnouncementLayoutNumeber: 0,
            addAnnouncementData: {
                subject: '',
                levelOfKnowledge: 3,
                remote: false,
                name: '',
                surname: '',
                city: '',
                age: 0,
                sex: 'M',
                description: ''
            }
        })
    }

    // Send announcement to the firestore
    sendAnnouncementToFirestore = (userData, userId) => {
        
        const{ addAnnouncementData } = this.state;
        firebase.sendDataToFirestore("Announcements").add({
            AnnouncementCreator: {
                Email: userData.email,
                UserName: userData.displayName,
                PhotoUrl: `${userData.photoURL}?type=normal`,
                Sex: addAnnouncementData.sex,
                UserId: userId,
                Age: addAnnouncementData.age
            },
            Comments: {},
            Description: addAnnouncementData.description,
            LevelOfKnowledge: addAnnouncementData.levelOfKnowledge,
            Remote: addAnnouncementData.remote,
            Place: addAnnouncementData.city,
            Subject: addAnnouncementData.subject,
            Keywords: generateKeywords(addAnnouncementData.subject)
        })
        .then((docRef) => {
            console.log("Document successfully written!");
            firebase.getDataFromFirestore('user').doc(userId).get().then(snapshot => {
                let announcementsFromFirestore = snapshot.data().Announcements;

                // create a map and transform into a object
                const map = new Map();
                // key is a id of announcement, value is a subject!!!
                map.set(docRef.id, addAnnouncementData.subject)
                const objectOfAnnouncements = Object.fromEntries(map)

                // Merging two objects
                const MergedObject = Object.assign(objectOfAnnouncements, announcementsFromFirestore)
                

                firebase.addUserDataToFirebase('user').doc(userId).update({
                    Sex: addAnnouncementData.sex,
                    Place: addAnnouncementData.city,
                    Age: addAnnouncementData.age,
                    // add a new announcement to the suitable user, to user collection
                    Announcements: MergedObject
                })
            })
            
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    // get user data from firestore
    getUserData = () => {
        const{ selectedAnnouncementData } = this.state;
        firebase.getDataFromFirestore('user').doc(selectedAnnouncementData[0].AnnouncementCreator.UserId).get().then(snapshot => {
            this.setState({
                userDataFromUserCollection: snapshot.data()
            })
        })
    }
    // get user data from firestore after refresh page
    getUserDataIfRefresh = (id) => {
        firebase.getDataFromFirestore('user').doc(id).get().then(snapshot => {
            this.setState({
                userDataFromUserCollection: snapshot.data()
            })
        })
    }

    // get user announcements from user collection
    getUserAnnouncementsFromUserCollection = (id) => {
        const{ userAnnouncements } = this.state;
        firebase.getDataFromFirestore('user').doc(id).get().then(snapshot => {
            userAnnouncements.clear()
            for (const [key, value] of Object.entries(snapshot.data().Announcements)) {
                userAnnouncements.set(key, value)
            }
        })
    }
    // get user announcements from user collection after refresh
    getUserAnnouncementsFromUserCollectionRefresh = (id) => {
        const{ userAnnouncements } = this.state;
        firebase.getDataFromFirestore('user').doc(id).get().then(snapshot => {
            userAnnouncements.clear()
            for (const [key, value] of Object.entries(snapshot.data().Announcements)) {
                userAnnouncements.set(key, value)
            }
        })
    }

    // Like or unlike announcement and send info to the firestore
    announcementSetLike = (id) => {
        const currentUid = firebase.getCurrentUid()
        if(currentUid !== null) {
            firebase.getDataFromFirestore('user').doc(currentUid).get().then(doc => {
                let likesArray = doc.data().AnnouncementLikes;
                const isLiked = likesArray.includes(id)
    
                if(!isLiked) {
                    // add uid to AnnouncementLikes
                    likesArray.push(id)
                    firebase.sendDataToFirestore('user').doc(currentUid).update({
                        AnnouncementLikes: likesArray
                    }).catch(err => console.log(err))
                } else {
                    // remove uid to AnnouncementLikes
                    likesArray.splice(likesArray.indexOf(id), 1)
                    firebase.sendDataToFirestore('user').doc(currentUid).update({
                        AnnouncementLikes: likesArray
                    }).catch(err => console.log(err))
                }
            }).catch(err => console.log(err))
        } 
    }

    // get value from search form and get the selected announcement
    searchKeyword = (val) => {
        const { announcementList } = this.state;
        if(val.length > 2) {
            announcementList.clear()

            firebase.getDataFromFirestore('Announcements')
            .where('Keywords', 'array-contains', val.toLowerCase()).get().then(doc => {               
            doc.forEach(val => {
                announcementList.set(val.id, val.data())
              })
              this.setState({
                announcementList
              })
            })
          }
    }

    // create users chatRoom if doesn't exists
    createUserChatRoom = (interlocutorId) => {
        firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).get().then(doc => {
            const uniqueKey = uniqid()

            if(!doc.data().MessagesId.hasOwnProperty(interlocutorId)) {
                const currentObject = doc.data().MessagesId;

                const newElement = new Map();
                
                newElement.set(interlocutorId, uniqueKey)
                const mapToObject = Object.fromEntries(newElement)

                const objectToUpdate = Object.assign(currentObject, mapToObject)
                firebase.getDataFromFirestore('user').doc(firebase.getCurrentUid()).update({
                    MessagesId: objectToUpdate
                })

                // save to interlocutor document(in the firestore)
                firebase.getDataFromFirestore('user').doc(interlocutorId).get().then(doc => {
                    const currentObject = doc.data().MessagesId;

                    const newElement = new Map();
                    newElement.set(firebase.getCurrentUid(), uniqueKey)
                    const mapToObject = Object.fromEntries(newElement)

                    const objectToUpdate = Object.assign(currentObject, mapToObject)
                    firebase.getDataFromFirestore('user').doc(interlocutorId).update({
                        MessagesId: objectToUpdate
                    })
                })
            } else {
            }
        })
    }

    render() {
        const { children } = this.props;
        const { 
            user,
            loading, 
            selectedAnnouncementData, 
            commentsMap,
            commentsArray,
            addAnnouncementLayoutNumeber,
            addAnnouncementData,
            userDataFromUserCollection,
            userAnnouncements,
            announcementList,
            randomAnnouncement,
            newestAnnouncement,
        } = this.state;
        return (
            <CurrentUserContext.Provider
                value={{
                    user,
                    logout: this.logout,
                    loginWithGoogle: this.loginWithGoogle,
                    loginWithFacebook: this.loginWithFacebook,
                    loading,
                }}
                >
                <FindAnnouncementContext.Provider 
                    value={{
                        getAnnouncementById: this.getAnnouncementById,
                        selectedAnnouncementData,
                        getAnnouncementByIdRepeatToRefreshPage: this.getAnnouncementByIdRepeatToRefreshPage,
                        sendComment: this.sendComment,
                        commentsMap,
                        commentsArray,
                        addAnnouncementLayoutNumeber,
                        setAnnouncementLayout: this.setAnnouncementLayout,
                        addAnnouncementData,
                        setAnnouncementData: this.setAnnouncementData,
                        clearAnnouncementData: this.clearAnnouncementData,
                        sendAnnouncementToFirestore: this.sendAnnouncementToFirestore,
                        getUserData: this.getUserData,
                        getUserDataIfRefresh: this.getUserDataIfRefresh,
                        userDataFromUserCollection,
                        getUserAnnouncementsFromUserCollection: this.getUserAnnouncementsFromUserCollection,
                        getUserAnnouncementsFromUserCollectionRefresh: this.getUserAnnouncementsFromUserCollectionRefresh,
                        userAnnouncements,
                        // Like announcement
                        announcementSetLike: this.announcementSetLike,
                        searchKeyword: this.searchKeyword,
                        announcementList,
                        randomAnnouncement,
                        createUserChatRoom: this.createUserChatRoom,
                        newestAnnouncement,
                    }}
                >
                    {children}
                </FindAnnouncementContext.Provider>
            </CurrentUserContext.Provider>
        )
    }
}

export const CurrentUserConsumer = CurrentUserContext.Consumer;

export const FindAnnouncementConsumer = FindAnnouncementContext.Consumer;

export const AAA = FindAnnouncementContext;