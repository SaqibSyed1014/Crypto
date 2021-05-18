// import axios from "axios";

const state = {
  token: null,
  acc_id: null,
  is_account_input_used: null,
  input_id: null
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  // StatePosts: (state) => state.posts,
  // StateUser: (state) => state.user,
};

const actions = {
  async signup(context, payload){
    console.log('entered signup actin')
    var axios = require('axios');
    var data = JSON.stringify({
      "api_key": payload.userApiKey,
      "secret_key": payload.userSecretKey,
      "user": {
        "password": payload.password,
        "email": payload.email,
        "first_name": payload.firstName,
        "last_name": payload.lastName
      }
    });
    console.log('sending data')
    var config = {
      method: 'post',
      url: 'http://51.143.8.209:8000/register/',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    // let responseData = JSON.stringify(config.data)
    await axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          this.$router.push("/login");
          // let UserForm = new FormData()
          //   UserForm.append('email', JSON.stringify(response.data.email))
          //   UserForm.append('password', JSON.stringify(response.data.password))
          // this.login(UserForm) */*
          // dispatch('LogIn', UserForm)
          // this.$store.dispatch('login', {
          //   userName: this.userName,
          //   password: this.password
          // })
        })
        .catch((error) => {
          console.log(error);
          alert('Error Signing Up')
        });
    // console.log('commiting setuser action')
    // await context.commit('setUser', {
    //   token: responseData.token,
    // })
  },
  async login(context, payload){
    var axios = require('axios');
    var data = JSON.stringify({
      "password": payload.password,
      "username": payload.email,
    });

    var config = {
      method: 'post',
      url: 'http://51.143.8.209:8000/login/',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    console.log('sent login info')
    await axios(config)
        .then(function (response) {
          const Token = JSON.stringify(response.data.token)
          const account_id = JSON.stringify(response.data.account_id)
          const input_id = JSON.stringify(response.data.input_id)
          const is_account_input_used = JSON.stringify(response.data.is_account_input_used)
          console.log('login response',Token);
          console.log('before commit setuser')
          context.commit('setUser', {
            token: Token,
            account_id: account_id,
            is_account_input_used: is_account_input_used,
            input_id: input_id
          })
          console.log('after commit setUser')
          alert('success')

        })
        .catch(function (err) {
          console.log('fail error = ',JSON.stringify(err.name));
          const errorMsg = document.getElementById('errorMsg')
          errorMsg.innerText = "You have entered invalid credentials!"
        });
  },
  async getExchangeList(context){
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'http://51.143.8.209:8000/currency/',
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('token').slice(1, -1)
      }
    };

    await axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          const exchangeId = JSON.stringify(response.data[0].id)
          const shortCode = JSON.stringify(response.data[0].short_code).slice(1, -1)
          console.log('exchange id = ',exchangeId)
          console.log('short Code = ',shortCode)
          context.commit('exchangeDetails', {
            exchange_Id : exchangeId,
            short_code : shortCode
          })
          const list = document.getElementById('lisItem')
          list.innerText = shortCode
        })
        .catch(function (error) {
          console.log(error);
        });
  },
  // async signup({dispatch}, form) {
  //   await axios.post('register', form)
  //   let UserForm = new FormData()
  //   UserForm.append('username', form.username)
  //   UserForm.append('password', form.password)
  //   await dispatch('LogIn', UserForm)
  // },

  // async LogIn({commit}, user) {
  //   await axios.post("login", user);
  //   await commit("setUser", user.get("username"));
  // },
  //
  // async CreatePost({ dispatch }, post) {
  //   await axios.post("post", post);
  //   return await dispatch("GetPosts");
  // },
  //
  // async GetPosts({ commit }) {
  //   let response = await axios.get("posts");
  //   commit("setPosts", response.data);
  // },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
    setUser(state, payload) {
      state.token = payload.token;
      state.account_id = payload.account_id;
      state.is_account_input_used = payload.is_account_input_used;
      state.input_id = payload.input_id
      console.log('inside setuser mutation', state.token, state.acc_id)
      localStorage.setItem('token', state.token)
      localStorage.setItem('account_id', state.account_id)
      localStorage.setItem('is_account_input_used', state.is_account_input_used)
      localStorage.setItem('input_id', state.input_id)
    },
    exchangeDetails(state, payload){
        state.exchange_id = payload.exchange_Id;
        state.short_code = payload.short_code;
        console.log('state id and code : ', state.exchange_id, state.short_code)
        localStorage.setItem('currency_id', state.exchange_id)
    },
    logout(state, user) {
    state.user = user;
    },

};

export default {
  state,
  getters,
  actions,
  mutations,
};
