import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		member:{},
		order:{},
		store:{},
		orderType:'takein',
		address:{}
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
		},
		SET_ORDERTYPE(state,type){
			state.orderType = type
		},
		SET_ADDRESS(state,address){
			state.address = address
		},
		SET_STORE(state,store){
			state.store = store
		}
	},
	actions:{
		async getStore({commit}){
			const store = await api('store')
			commit('SET_STORE',store)
		}
	}
})

export default store