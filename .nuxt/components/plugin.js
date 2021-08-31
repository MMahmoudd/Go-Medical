import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  MainHeaderComponent: () => import('../..\\components\\mainHeader-component.vue' /* webpackChunkName: "components/main-header-component" */).then(c => wrapFunctional(c.default || c)),
  ClientPageClientsComponent: () => import('../..\\components\\clientPage\\clients-component.vue' /* webpackChunkName: "components/client-page-clients-component" */).then(c => wrapFunctional(c.default || c)),
  ContactFormComponent: () => import('../..\\components\\contactUsPage\\contactForm-component.vue' /* webpackChunkName: "components/contact-form-component" */).then(c => wrapFunctional(c.default || c)),
  AboutDescComponent: () => import('../..\\components\\aboutUsPage\\aboutDesc-component.vue' /* webpackChunkName: "components/about-desc-component" */).then(c => wrapFunctional(c.default || c)),
  AboutUsPageGoalsComponent: () => import('../..\\components\\aboutUsPage\\goals-component.vue' /* webpackChunkName: "components/about-us-page-goals-component" */).then(c => wrapFunctional(c.default || c)),
  AboutUsPageMisionAndVisionComponent: () => import('../..\\components\\aboutUsPage\\misionAndVision-component.vue' /* webpackChunkName: "components/about-us-page-mision-and-vision-component" */).then(c => wrapFunctional(c.default || c)),
  HomePageAboutUsComponent: () => import('../..\\components\\homePage\\aboutUs-component.vue' /* webpackChunkName: "components/home-page-about-us-component" */).then(c => wrapFunctional(c.default || c)),
  HomePageContactUsComponent: () => import('../..\\components\\homePage\\contactUs-component.vue' /* webpackChunkName: "components/home-page-contact-us-component" */).then(c => wrapFunctional(c.default || c)),
  HomePageHeaderComponent: () => import('../..\\components\\homePage\\header-component.vue' /* webpackChunkName: "components/home-page-header-component" */).then(c => wrapFunctional(c.default || c)),
  HomePageOurServiceComponent: () => import('../..\\components\\homePage\\ourService-component.vue' /* webpackChunkName: "components/home-page-our-service-component" */).then(c => wrapFunctional(c.default || c)),
  ServicesMainSliderComponent: () => import('../..\\components\\services\\mainSlider-component.vue' /* webpackChunkName: "components/services-main-slider-component" */).then(c => wrapFunctional(c.default || c)),
  ServicesOurMainServices: () => import('../..\\components\\services\\ourMainServices.vue' /* webpackChunkName: "components/services-our-main-services" */).then(c => wrapFunctional(c.default || c)),
  ServicesComponent: () => import('../..\\components\\servicesPage\\services-component.vue' /* webpackChunkName: "components/services-component" */).then(c => wrapFunctional(c.default || c)),
  LayoutFooter: () => import('../..\\components\\layout\\footer\\footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => wrapFunctional(c.default || c)),
  LayoutNavbar: () => import('../..\\components\\layout\\navbar\\navbar.vue' /* webpackChunkName: "components/layout-navbar" */).then(c => wrapFunctional(c.default || c)),
  ServicesCorporateTravelComponent: () => import('../..\\components\\services\\corporateTravel\\corporateTravel-component.vue' /* webpackChunkName: "components/services-corporate-travel-component" */).then(c => wrapFunctional(c.default || c)),
  ServicesCorporateTravelMainServices: () => import('../..\\components\\services\\corporateTravel\\mainServices.vue' /* webpackChunkName: "components/services-corporate-travel-main-services" */).then(c => wrapFunctional(c.default || c)),
  ServicesInboundTravelHeader: () => import('../..\\components\\services\\inboundTravel\\header.vue' /* webpackChunkName: "components/services-inbound-travel-header" */).then(c => wrapFunctional(c.default || c)),
  ServicesInboundTravelSliders: () => import('../..\\components\\services\\inboundTravel\\sliders.vue' /* webpackChunkName: "components/services-inbound-travel-sliders" */).then(c => wrapFunctional(c.default || c)),
  ServicesMedicalTourismHealthTourismComponent: () => import('../..\\components\\services\\medicalTourism\\healthTourism-component.vue' /* webpackChunkName: "components/services-medical-tourism-health-tourism-component" */).then(c => wrapFunctional(c.default || c)),
  ServicesMedicalTourismComponent: () => import('../..\\components\\services\\medicalTourism\\medicalTourism-component.vue' /* webpackChunkName: "components/services-medical-tourism-component" */).then(c => wrapFunctional(c.default || c)),
  ServicesMedicalTourismProcessComponent: () => import('../..\\components\\services\\medicalTourism\\process-component.vue' /* webpackChunkName: "components/services-medical-tourism-process-component" */).then(c => wrapFunctional(c.default || c)),
  ServicesOutboundTravelComponent: () => import('../..\\components\\services\\OutboundTravel\\OutboundTravel-component.vue' /* webpackChunkName: "components/services-outbound-travel-component" */).then(c => wrapFunctional(c.default || c)),
  ServicesReligioosTripsHeader: () => import('../..\\components\\services\\religioosTrips\\header.vue' /* webpackChunkName: "components/services-religioos-trips-header" */).then(c => wrapFunctional(c.default || c)),
  ServicesReligioosTripsSliders: () => import('../..\\components\\services\\religioosTrips\\sliders.vue' /* webpackChunkName: "components/services-religioos-trips-sliders" */).then(c => wrapFunctional(c.default || c)),
  ServicesWllniessTourismComponent: () => import('../..\\components\\services\\wllniessTourism\\wllniessTourism-component.vue' /* webpackChunkName: "components/services-wllniess-tourism-component" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
