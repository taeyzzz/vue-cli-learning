import { post } from '../../utils'
const SET_MESSAGE = "SET_MESSAGE"
const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"
const LOGIN_IDLE = "LOGIN_IDLE"

const state = {
  message: 'hello from login store',
  currentUser: 'cur',
  login: {
    fetchStatus: "idle"
  }
}

// getters
const getters = {

}

// actions
const actions = {
  setMessage: (context, value) => {
    context.commit(SET_MESSAGE, {
      message: value
    })
  },
  login: async (context, data) => {
    context.commit(LOGIN_REQUEST)
    try {
      await new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve()
        }, 1000);
      });
      const res = await post('/login', data)
      console.log(res);
      context.commit(LOGIN_SUCCESS, {
        userData: res
      })
    }
    catch (err) {
      context.commit(LOGIN_FAILURE, {
        error: err
      })
    }
    finally {
      context.commit(LOGIN_IDLE)
    }
  }
}

// mutations
const mutations = {
  SET_MESSAGE: (state, payload) => {
    console.log(state);
    state.message = payload.message
  },
  LOGIN_REQUEST: (state, payload) => {
    state.login.fetchStatus = 'request'
  },
  LOGIN_SUCCESS: (state, payload) => {
    state.login.fetchStatus = 'success'
    state.currentUser = payload.userData
  },
  LOGIN_FAILURE: (state, payload) => {
    state.login.fetchStatus = 'failure'
  },
  LOGIN_IDLE: (state, payload) => {
    state.login.fetchStatus = 'idle'
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
