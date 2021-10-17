<template>
<div class="navbar-component">
  <div class="top-nav">
   <div class="d-flex container">
      <div class="left d-none d-md-flex d-sm-none d-xs-none">
      <div class="mr-2">
        <i class="fas fa-phone-alt"></i> <span> Phone: (002) 01061245741</span>
      </div>
      <div class="ml-2">
        <i class="fas fa-map-marker-alt"></i> <span> Location: Brooklyn, New York</span>
      </div>
      </div>
      <div class="right">
        <span class="mx-2">follow</span>
        <span class="mx-2"><i class="fab fa-facebook-f"></i></span>
        <span class="mx-2"><i class="fab fa-twitter"></i></span>
        <span class="mx-2"><i class="fab fa-instagram"></i></span>
      </div>
    </div>
  </div>
  <b-navbar toggleable="lg" type="dark">
  <div class="container">
    <b-navbar-brand to="/" class="brand">
      <img src="../../../assets/images/logo.svg" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <i class="fas fa-bars"></i>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/aboutUs">About US</b-nav-item>
        <b-nav-item-dropdown text="Importation and Distribution" right>
          <b-dropdown-item to="/distributer">Endoscopic accessories</b-dropdown-item>
          <b-dropdown-item>
            <div class="dropdown">
              <button class="dropbtn">In-Vitro Diagnosis<i class="fas fa-sort-down"></i></button>
              <div class="dropdown-content">
                <nuxt-link to="/in-vitro-diagnosis">Point-of-care devices</nuxt-link>
                <nuxt-link to="/chemiluminescence-technology">Chemiluminescence technology</nuxt-link>
              </div>
            </div>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/medicalService">Medical Services</b-nav-item>
        <b-nav-item to="/partners">Partners</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
export default {
    data() {
      return {
        };
   },
}
</script>
