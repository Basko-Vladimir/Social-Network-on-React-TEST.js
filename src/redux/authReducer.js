const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_DATA: {
            return ({
                    ...state,
                    ...action.profile,
                    isAuth: true
                }
            )
        }
        default: {
            return state
        }
    }
};

export const setUserProfileData = (id, email, login) => ({type:SET_USER_PROFILE_DATA, profile:{id, email, login}});

export default authReducer;
