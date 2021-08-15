<template>
    <div class="ourService-component">
      <div class="container ">
      <h2 class="prymary-header p-0">Our Services</h2>
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="icon">
              <img src="../../assets/images/our service 1.svg" alt="service 1">
            </div>
            <div class="content" @click="showModal(Ticketing)">
              <h2>Ticketing</h2>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="icon">
              <img src="../../assets/images/our service 2.svg" alt="service 2">
            </div>
            <div class="content" @click="showModal(WorldwideHotelBookings)">
              <h2>Worldwide Hotel Bookings</h2>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="icon">
              <img src="../../assets/images/our service 3.svg" alt="service 3">
            </div>
            <div class="content" @click="showModal(visas)">
              <h2>Visas</h2>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="icon">
              <img src="../../assets/images/our service 4.svg" alt="service 4">
            </div>
            <div class="content" @click="showModal(Packages)">
              <h2>Packages</h2>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="icon">
              <img src="../../assets/images/our service 5.svg" alt="service 5">
            </div>
            <div class="content" @click="showModal(ActivitiesSightseeing)">
              <h2>Activities & Sightseeing</h2>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="icon">
              <img src="../../assets/images/our service 6.svg" alt="service 6">
            </div>
            <div class="content" @click="showModal(MeetAssist)">
              <h2>Meet & Assist</h2>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="icon">
              <img src="../../assets/images/our service 7.svg" alt="service 7">
            </div>
            <div class="content" @click="showModal(TRANSFARS)">
              <h2>Transfers</h2>
            </div>
          </div>
          <div class="col-md-3 col-sm-6" v-if="this.$route.path === '/service/corporateTravel'">
            <div class="icon">
              <img src="../../assets/images/our service 8.svg" alt="service 8">
            </div>
            <div class="content">
              <h2>M.I.C.E.</h2>
            </div>
          </div>
        </div>
      </div>
      <b-modal ref="my-modal" centered size="lg" hide-footer>
      <div class="row">
      <div class="col-md-3 d-flex">
        <div class="icon text-center">
          <img :src="modalData.icon" alt="icon">
          <h3>{{modalData.title}}</h3>
        </div>
        </div>
        <div class="col-md-9">
        <div class="content pre-formatted" v-if="modalData.title === 'Packages'">
          <div class="category">
            <h5>{{modalData.package1.head}}</h5>
            <p>{{modalData.package1.content}}</p>
          </div>
          <div class="category">
            <h5>{{modalData.package2.head}}</h5>
            <p>{{modalData.package2.content}}</p>
          </div>
          <div class="category">
            <h5>{{modalData.package3.head}}</h5>
            <p>{{modalData.package3.content}}</p>
          </div>
        </div>
        <div class="content pre-formatted" v-else>
          {{modalData.content}}
        </div>
        </div>
      </div>
    </b-modal>
    </div>
</template>

<script>
import icon1 from '../../assets/images/our service O 1.svg'
import icon2 from '../../assets/images/our service O 2.svg'
import icon3 from '../../assets/images/our service O 3.svg'
import icon4 from '../../assets/images/our service O 4.svg'
import icon5 from '../../assets/images/our service O 5.svg'
import icon6 from '../../assets/images/our service O 6.svg'
import icon7 from '../../assets/images/our service O 7.svg'
// import icon8 from '../../assets/images/our service O 8.svg'

export default {
    data() {
        return {
          Ticketing: {
            title: 'Ticketing',
            content: 'Being an IATA agency We Fly Plus Travel & Tourism represents most of the major international airline carriers. \n \n We maintain excellent relations and contacts with their respective staff members, in order to jointly be able to secure reservations and choose the most convenient and economic routes for the client’s ultimate comfort.\n \n We Fly Plus Travel & Tourism enthusiastic and professional ticketing team offers you extreme flexibility with both local and international ticket bookings. \n Our established relationship with all airlines enables us to provide a wide range of air ticketing services at the best available rates whenever and wherever you want.',
            icon: icon1
          },
          WorldwideHotelBookings: {
            title: 'Worldwide Hotel Bookings',
            content: 'Find and book hotels anytime, anywhere! We Fly Plus Travel & Tourism has got the best accommodation deals.\n \n Featuring a powerful and easy-to-use hotel reservation tool with real-time rates, instant availability and special promotions, we offer unrivalled options to access our vast inventory of directly contracted hotels across hundreds of destinations worldwide.\n \n For further details on our hotel services and pricing, give us a call or inquire online.',
            icon: icon2
          },
          visas: {
            title: 'visas',
            content: 'The team at We Fly Plus Travel & Tourism is well-informed about the latest Dubai / UAE visas & immigration policies ; we can handle visa applications of both individuals & corporate clients for all the destinations.\n \n With clear & flexible options, accompanied by minimal documentation, we make the entire visa application process as easy & fast as possible. We also provide international visa services to more than 40 countries',
            icon: icon3
          },
          Packages: {
            title: 'Packages',
            package1:{
              head: 'A. HONEYMOON',
              content: 'We manage to recommend, plan and book some of the most fascinating honeymoon destinations in the World.',
            },
            package2:{
              head: 'B. FAMILY VACATIONS',
              content: 'We can help you arrange and book the family vacation that fits your preferences and budget, helping you create priceless memories.',
            },
            package3:{
              head: 'C. OTHER PACKAGES',
              content: 'You name it and we arrange it, our team are fully prepared to listen to your needs and create the package that most fits them.',
            },
            icon: icon4
          },
          ActivitiesSightseeing: {
            title: 'Activities & Sightseeing',
            content: 'A major element in any trip is where to go and what we do. We offer a fully customized experience according to your preferences and needs; outdoor activities, museums, dinning, historical places, whatever it is that you enjoy doing it we are ready to offer it. \n \n Even if you are not sure what is it that you want to see, our team is ready to advise you and help you plan the perfect trip.',
            icon: icon5
          },
          MeetAssist: {
            title: 'Meet & Assist',
            content: 'Wherever you arrive, we’ll be there to help you through the customs and luggage affairs. Our local and international suppliers can surely secure quick and professional airport dealings…It’s a matter of experience.',
            icon: icon7
          },
          TRANSFARS: {
            title: 'TRANSFARS',
            content: 'Wherever you arrive, we’ll be there to help you through the customs, transfers and luggage affairs. Our local and international suppliers can surely secure quick and professional airport dealings…its a matter of experience.',
            icon: icon6
          },
          modalData: {}

        };
    },
    methods: {
      showModal(data) {
        console.log(data)
        this.modalData = data
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
    }
}
</script>


