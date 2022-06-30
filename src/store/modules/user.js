import { userService } from "../../services/user.service";
export default {
    state: {
        user: userService.getUser(),
        userMsg: null
    },
    mutations: {
        setUser(state, { user }) {
            console.log('user', user)
            console.log('im here');
            state.user = user
        },
        addMove(state, { move }) {
            console.log('user', state.user)
            state.user.moves.push(move);
        },
        signout(state) {
            state.user = null;
        },
        setUserMsg(state, { userMsg }) { 
            state.userMsg = userMsg
        }
    },
    actions: {
        async signup({ commit }, { username }) {
            const user = await userService.signup(username);
            commit({ type: 'setUser', user });
        },
        async onAddMove({ commit }, { user }) {
            commit({ type: 'setUser', user });
        },
        async signout({ commit }) {
            commit({ type: 'signout' });
        },
        onSetUserMsg({ commit }, { userMsg }) { 
            commit({ type: 'setUserMsg', userMsg });
        }
    },
    getters: {
        user(state) { return state.user },
        userMsg(state) { return state.userMsg }
    }
}