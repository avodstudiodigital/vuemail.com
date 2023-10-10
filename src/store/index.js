import Vue from 'vue'
import Vuex from 'vuex'

// all modules import
import TablesModule from './modules/tables'
import EmailDataModule from './modules/emailsdata'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tables: TablesModule,
    emailsData: EmailDataModule
  },
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  }
})

export default store
