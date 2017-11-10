import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	init: true,
	repos: [],
	users: [],
	active: 'repos'
}

const mutations = {
	TOGGLE_INIT (state) {
		if (state.init) {
			state.init = !state.init
		}
	},

	UPDATE_REPOS (state, data) {
		state.repos = data
	},

	UPDATE_USER (state, data) {
		state.users = data
	},

	TOGGLE_ACTIVE (state, text) {
		state.active = text
	}
}

const actions = {
	toggleInit (context) {
		context.commit('TOGGLE_INIT')
	},

	updateRepos (context, data) {
		context.commit('UPDATE_REPOS', data)
	},

	updateUsers (context, data) {
		context.commit('updateUsers', data)
	},

	toggleActive (context, text) {
		context.commit('TOGGLE_ACTIVE', text)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})