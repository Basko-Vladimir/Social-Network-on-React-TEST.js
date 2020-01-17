const UPDATE_NEW_MESSAGE_EL = 'UPDATE-NEW-MESSAGE-EL';
const ADD_MESSAGE = 'ADD-MESSAGE';

let  initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_EL: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: return state;
    }
};

export const changeMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_EL,
        newText: text
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default dialogsReducer;
