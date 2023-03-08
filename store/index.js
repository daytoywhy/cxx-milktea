import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		member:{},
		order:{},
	},
	getters:{
		isLogin: state => Object.keys(state.member).length > 0
	},
	mutations:{
		SET_MEMBER(state,member){
			state.member = member
		},
		SET_ORDER(state,order){
			state.order = order
		}
	}
})

export default store