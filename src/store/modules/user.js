import { userService } from "../../services/user.service";
export default {
    state: {
        user: userService.getUser() || null,
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
    },
    getters: {
        user(state) { return state.user }
    }
}