const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const USERS = 'USERS';

let initialStore = {
    users: []
};

const usersReducer = (state = initialStore, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el;
                })
            };
        case USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }

};


export const followAC = (userId) => ({type: 'FOLLOW', userId});
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId});
export const setUsersAC = (users) => ({type: 'USERS', users});

export default usersReducer;