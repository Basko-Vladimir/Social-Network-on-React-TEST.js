import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likeCounts: 12},
                {id: 1, message: 'Yo Yo', likeCounts: 16},
                {id: 2, message: 'Today is nice day', likeCounts: 7}],
            newPostText: 'Abracadabra'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vladimir'},
                {id: 2, name: 'Elena'},
                {id: 3, name: 'Georgii'},
                {id: 4, name: 'Regina'},
                {id: 5, name: 'Svetlana'},
                {id: 6, name: 'Oleg'}],
            messages: [
                {id: 1, message: 'Hi, how are you?'},
                {id: 2, message: 'I like React'},
                {id: 3, message: 'Thanks, I\'m fine'},
                {id: 4, message: 'Vladimir'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}],
            newMessageText: ''
        },
        sidebarPage: {
            friends: [
                {id: 1, name: 'Vladimir'},
                {id: 2, name: 'Elena'},
                {id: 3, name: 'Georgii'},
                {id: 4, name: 'Regina'},
                {id: 5, name: 'Svetlana'},
                {id: 6, name: 'Oleg'},
                {id: 7, name: 'Victoria'}]
        }
    },
    _callSubscriber: () => {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(action, this._state.profilePage);
        this._state.dialogsPage = dialogsReducer (action, this._state.dialogsPage);
        this._state.sidebarPage = sidebarReducer (action, this._state.sidebarPage);

        this._callSubscriber(this._state);
    }
};

export default store;
