let state = {
    profilePage: {
        posts: [
            {id: 1, massed: 'i like', l: '15'},
            {id: 2, massed: 'How are you', l: '20'}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sve'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        massed: postMessage,
        l: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;