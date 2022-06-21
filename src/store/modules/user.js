import { userService } from "../../services/user.service";
export default {
    state: {
        user: null,
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
        addMove(state, { move }) {
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
        async onAddMove({ commit }, { move }) {
            commit({ type: 'addMove', move });
        },
        async signout({ commit }) {
            commit({ type: 'signout' });
        },
    },
    getters: {
        user(state) { return state.user }
    }
}