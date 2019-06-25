import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: {
      price: 20
    },
    inputValues:[
      {
        input1:1,
        input2:2,
        input3:3
      }
    ]
  },
  getters: {
    saleProducts: (state) => {
      return {
        price : state.products.price / 2
      }
    },
    getInputValues:(state) => {
      return {
        inputValues : state.inputValues
      }
    }
  },
  mutations: {
    minusPrice(state, payload) {
      state.products.price -= payload
    },
    getInputValuesPush(state, payload){
      state.inputValues.push(payload)
    }
  },
  actions: {
    minusPriceAsync(context, payload) {
      setTimeout(() => {
        context.commit('minusPrice', payload); //context提交
      }, 2000)
    },
    getInputValuesAsync(context, payload) {
      setTimeout(() => {
        context.commit('getInputValuesPush', payload); //context提交
      }, 2000)
    }
  }
})

export default store
