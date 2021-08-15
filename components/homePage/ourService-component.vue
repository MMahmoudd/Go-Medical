<template>
    <div class="service-component">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="section-num">
              02
            </div>
            <div class="prymary-vertical"></div>
            <h2 class="prymary-header">Our <span> Services</span></h2>
            <b-button to="/services" class="prymary-btn">All Services</b-button>
          </div>
          <div class="col-md-4">
                <b-card>
                  <img src="../../static/images/travel icon 1.svg" alt="icon one">
                  <h2>Corporate Travel</h2>
                  <b-card-text>
                    We Fly Plus Travel offers a highly experienced team of corporate travel consultants, handling all business.....
                  </b-card-text>

                  <NuxtLink to="/service/corporateTravel">Explore <i class="fas fa-arrow-right"></i> </NuxtLink>
                </b-card>
              </div>
              <div class="col-md-4">
                <b-card>
                  <img src="../../static/images/travel icon 2.svg" alt="icon two">
                  <h2>Outbound Travel</h2>
                  <b-card-text>
                    Rely on us to plan a special surprise for your loved ones, seek out off the beaten track locations, find a tropical paradise, ….
                  </b-card-text>

                  <NuxtLink to="/service/outboundTravel">Explore <i class="fas fa-arrow-right"></i></NuxtLink>
                </b-card>
          </div>
        </div>
      </div>
    </div>
</template>
