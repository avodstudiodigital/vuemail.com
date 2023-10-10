import Vue from 'vue'

// Components

// Importing Core layout component
import Drawer from './core/Drawer'
import View from './core/View'

// Importing Custom Components
import MailDetails from './material/MailDetails'

// Registered  core Components
Vue.component('core-drawer', Drawer)
Vue.component('core-view', View)

// Registered Components
Vue.component('single-mail-details', MailDetails)

export {

  // core part
  Drawer,
  View,

  // others
  MailDetails

}
