<template>
  <div>
    <div class="book-container">
      <div class="book-item book-style-vueonrails" v-bind:class="classObject" v-on:click="flipBook">
        <div class="book-front">
          <div class="book-cover-back"></div>
          <div class="book-cover">
            <div class="book-cover-content">
              <h2 class="font-weight-light display-5">Vue on Rails</h2>
              <hr class="w-25">
              <span class="font-weight-light small">Discover how to build delightful web app using Vue.js and Ruby on Rails</span>
            </div>
          </div>
        </div>
        <div class="book-page">
          <div class="book-content book-content-current">
            <div class="logo d-flex justify-content-center mx-auto mb-3">
              <div class="logo-text align-self-center">VR</div>
            </div>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="book-back">
          <div class="bg-light py-3 mt-5">
            <div class="logo d-flex justify-content-center mx-auto">
              <div class="logo-text align-self-center">VR</div>
            </div>
          </div>
          <p class="text-center text-light small py-4 px-4">
            Explain the concept of Rails first &amp; Vue first-class approach
            <i class="text-dark mx-1">&bull;</i> Build some real-world applications with Vue on Rails
            <i class="text-dark mx-1">&bull;</i> Scaffold a Vue component and get up to speed quickly
            <i class="text-dark mx-1">&bull;</i> Explore different ways to deploy Vue Component
            <i class="text-dark mx-1">&bull;</i> Make frustration-free configuration for Vue on Rails
            <i class="text-dark mx-1">&bull;</i> Learn enough Vue to be dangerous
            <i class="text-dark mx-1">&bull;</i> Deploying &amp; Testing
          </p>
        </div>
        <div class="book-right"></div>
        <div class="book-left">
          <div class="book-left-content">
            <div class="d-flex justify-content-between align-items-center h-100 px-3">
              <span class="text-dark font-weight-bold">Vue on Rails</span>
              <span class="text-light text-right small">
                <span class="mr-2">With <i class="fas fa-heart text-danger"></i> by</span>
                Richard LaFranchi &amp; Bryan Lim
              </span>
            </div>
          </div>
        </div>
        <div class="book-top"></div>
        <div class="book-bottom"></div>
      </div>
    </div>

    <div class="mt-4" v-if="isDebug">
      <button class="btn" v-on:click="flipBook">Flip</button>
      <button class="btn" v-on:click="openBook">Inside</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      isDebug: false,
      viewCover: true,
      viewBack: false,
      viewInside: false
    };
  },
  computed: {
    classObject: function() {
      return {
        'book-view-cover': this.viewCover && !this.viewInside,
        'book-view-back': this.viewBack,
        'book-view-inside': this.viewInside
      }
    }
  },
  methods: {
    flipBook: function() {
      this.viewCover = !this.viewCover
      this.viewBack = !this.viewBack
      this.viewInside = false
    },
    openBook: function() {
      if ( this.viewBack ) {
        this.flipBook()
      }
      this.viewInside = !this.viewInside
    }
  }
};
</script>
