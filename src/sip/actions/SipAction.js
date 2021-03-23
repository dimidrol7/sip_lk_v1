import * as actionTypes from '../actionTypes/SipActionTypes';
import * as constants from '../Constants';

export const setErrorMessageSnackBar = (isErrorMessageSnackBar) => ({
    type: actionTypes.SET_ERROR_MESSAGE_SNACK_BAR_SETTINGS,
    isErrorMessageSnackBar,
});


export const setMessageSnackBar = (messageSnackBar) => ({
    type: actionTypes.SET_MESSAGE_SNACK_BAR_SETTINGS,
    messageSnackBar,
});


export const setOpenMessageSnackBar = (openMessageSnackBar) => ({
    type: actionTypes.SET_OPEN_MESSAGE_SNACK_BAR_SETTINGS,
    openMessageSnackBar,
});

function requestPosts(subreddit) {
    return {
        type: actionTypes.REQUEST_POSTS_SETTINGS,
        subreddit,
    };
}

function receivePosts(subreddit, json) {
    return {
        type: actionTypes.RECEIVE_POSTS_SETTINGS,
        subreddit,
        posts: json,
        receivedAt: Date.now(),
    };
}

export function fetchPosts(subreddit, url, params,isFormData = false, withCredentails = false) {


    return (dispatch) => {
        dispatch(requestPosts(subreddit));

        const data = {
            method: 'post',
            // headers: {
            //     'Content-type': isFormData ? 'multipart/form-data' : 'application/x-www-form-urlencoded; charset=UTF-8',
            // },

            body: isFormData || false ? params : JSON.stringify(params),
        };

        if (withCredentails) {
            data.credentials = 'include';
        }

        return fetch(url, data).then(
            response => response.text(),
            (error) => { throw new Error(error); },
        ).then(json => dispatch(receivePosts(subreddit, json))
        ).catch(error => dispatch(receivePosts(subreddit, JSON.stringify({errors:constants.ERR_REQUEST_MESSAGE}))));
    };
}

export const setUserAccountParam = userAccountParam  => ({
    type: actionTypes.SET_USER_ACCOUNT_SETTINGS,
    userAccountParam,
});

export const setOpenCircleProgress = openCircleProgress  => ({
    type: actionTypes.SET_OPEN_CIRCLE_PROGRESS_SETTINGS,
    openCircleProgress,
});


export const setOpenDialogText = openDialogText  => ({
    type: actionTypes.SET_OPEN_DIALOG_TEXT_SETTINGS,
    openDialogText,
});

export const setTitleDialogText = titleDialogText  => ({
    type: actionTypes.SET_TITLE_DIALOG_TEXT_SETTINGS,
    titleDialogText,
});


export const setContentDialogText = contentDialogText  => ({
    type: actionTypes.SET_CONTENT_DIALOG_TEXT_SETTINGS,
    contentDialogText,
});