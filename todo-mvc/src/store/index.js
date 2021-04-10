import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        name: 'todo1',
        status: true
      },
      {
        name: 'todo2',
        status: true
      },
      {
        name: 'todo3',
        status: false
      },
      {
        name: 'todo4',
        status: false
      }
    ],
    alldone: false,
    newtodo: '',
    visible: 'all'
  },
  mutations: {
    addnewtodo: function () {
      var todo = {
        name: store.state.newtodo,
        status: false
      }
      store.state.todos.push(todo)
      store.state.newtodo = ''
    },
    destodo: function (index) {
      store.state.todos = store.state.todos.filter(i => !i.status)
    }
  },
  getters: {
    filtertodos: function () {
      if (store.state.visible === 'all') {
        return store.state.todos
      } else if (store.state.visible === 'undo') {
        return store.state.todos.filter(i => !i.status)
      } else if (store.state.visible === 'do') {
        return store.state.todos.filter(i => i.status)
      }
    }
  }
})
