import Vue from "vue";
import App from "./App.vue";
import "@/style/common.scss";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
/*----- fort awesome -------*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEye , faCloudDownloadAlt, faHome, faFutbol, faUser, faChartBar, faStar, faLock, faSearch, faTimes, faCog, faChartLine, faChevronCircleDown,faThumbtack, faExchangeAlt, faTrophy ,faGamepad, faSquare, faAngleDoubleDown, faCaretUp, faPlay, faKey ,faFolderOpen, faInfoCircle, faUserEdit, faBoxes, faHeart, faDonate, faSignOutAlt,faExclamation,faIdCard, faAt, faMobileAlt, faUserCheck,faCheckCircle,faChevronRight ,faNewspaper, faRemoveFormat ,faAngleDown,faHourglassHalf,faCalendarDay} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser as farUser} from '@fortawesome/free-regular-svg-icons'
import { faBan as fasBan ,faArrowRight as fasArrowRight} from "@fortawesome/free-solid-svg-icons"

/*element*/

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import 'swiper/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

/*國碼選單*/
import VueCountryIntl from 'vue-country-intl';
import 'vue-country-intl/lib/vue-country-intl.css'

library.add(faUserSecret)
library.add(faEye)
library.add(faCloudDownloadAlt)
library.add(faHome)
library.add(faUser,farUser)
library.add(faChartBar)
library.add(faStar)
library.add(faLock)
library.add(faSearch)
library.add(faFutbol)
library.add(faTimes)
library.add(faCog)
library.add(faChartLine)
library.add(faChevronCircleDown)
library.add(faThumbtack)
library.add(faExchangeAlt)
library.add(faTrophy)
library.add(faGamepad)
library.add(faSquare)
library.add(faAngleDoubleDown)
library.add(faAngleDown)
library.add(faCaretUp)
library.add(faPlay)
library.add(faKey)
library.add(faFolderOpen)
library.add(faInfoCircle)
library.add(faUserEdit)
library.add(faBoxes)
library.add(faHeart)
library.add(faDonate)
library.add(faSignOutAlt)
library.add(faExclamation)
library.add(faIdCard)
library.add(faAt)
library.add(faMobileAlt)
library.add(faCheckCircle)
library.add(faUserCheck)
library.add(faChevronRight)
library.add(faNewspaper)
library.add(faRemoveFormat)
library.add(fasBan)
library.add(fasArrowRight)
library.add(faHourglassHalf)
library.add(faCalendarDay)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI);
Vue.use(VueScrollTo);
// Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.component(VueCountryIntl.name, VueCountryIntl);

new Vue({
  router,
  store,
  data: {
    show: true
  },
  render: (h) => h(App),
}).$mount("#app");

