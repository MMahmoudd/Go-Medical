import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23a134b4 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _705c14a1 = () => interopDefault(import('..\\pages\\client.vue' /* webpackChunkName: "pages/client" */))
const _7a103d7e = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _7483b834 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _98106fc0 = () => interopDefault(import('..\\pages\\service\\corporateTravel.vue' /* webpackChunkName: "pages/service/corporateTravel" */))
const _5708c874 = () => interopDefault(import('..\\pages\\service\\inboundTravel.vue' /* webpackChunkName: "pages/service/inboundTravel" */))
const _acf50aae = () => interopDefault(import('..\\pages\\service\\medicalTourism.vue' /* webpackChunkName: "pages/service/medicalTourism" */))
const _ae17450e = () => interopDefault(import('..\\pages\\service\\outboundTravel.vue' /* webpackChunkName: "pages/service/outboundTravel" */))
const _fed2bb7c = () => interopDefault(import('..\\pages\\service\\religiousTrips.vue' /* webpackChunkName: "pages/service/religiousTrips" */))
const _33bda14e = () => interopDefault(import('..\\pages\\service\\wllniessTourism.vue' /* webpackChunkName: "pages/service/wllniessTourism" */))
const _e1833228 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _23a134b4,
    name: "about-us"
  }, {
    path: "/client",
    component: _705c14a1,
    name: "client"
  }, {
    path: "/contact-us",
    component: _7a103d7e,
    name: "contact-us"
  }, {
    path: "/services",
    component: _7483b834,
    name: "services"
  }, {
    path: "/service/corporateTravel",
    component: _98106fc0,
    name: "service-corporateTravel"
  }, {
    path: "/service/inboundTravel",
    component: _5708c874,
    name: "service-inboundTravel"
  }, {
    path: "/service/medicalTourism",
    component: _acf50aae,
    name: "service-medicalTourism"
  }, {
    path: "/service/outboundTravel",
    component: _ae17450e,
    name: "service-outboundTravel"
  }, {
    path: "/service/religiousTrips",
    component: _fed2bb7c,
    name: "service-religiousTrips"
  }, {
    path: "/service/wllniessTourism",
    component: _33bda14e,
    name: "service-wllniessTourism"
  }, {
    path: "/",
    component: _e1833228,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
