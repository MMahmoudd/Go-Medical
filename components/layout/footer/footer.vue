<template>
  <div class="footer-container">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="../../../static/images/logo.svg" alt="logo">
        </NuxtLink>
      </div>
      <div class="links">
        <ul class="list-unstyled">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about-us">About US</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services">Service</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact-us">Contact US</NuxtLink>
              </li>
        </ul>
      </div>
      <div class="social">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin-in"></i>
      </div>
      <hr class="border"/>
      <div class="copy">
      <p>Copyright @ We Fly. All Right Reserved</p>
      </div>
    </div>
  </div>
</template>
