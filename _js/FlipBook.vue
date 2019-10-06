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
              <span class="font-weight-light small">End-to-End Guide to Building Web Apps Using Vue.js and Rails</span>
            </div>
          </div>
        </div>
        <div class="book-page">
          <div class="book-content book-content-current">
            <div class="logo d-flex mx-auto mb-3"></div>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="book-back">
          <div class="bg-light py-3 mt-5">
            <div class="logo d-flex mx-auto"></div>
          </div>
          <p class="text-center text-light small py-4 px-4">
            Build modern and progressive web applications with Vue.js and Ruby on Rails.
            As the Rails community embraces JavaScript, this book answers your most pressing questions,
            including how to integrate front-end technologies with Rails, whether to
            build a single-page application, when and how to use JavaScript in your project,
            how to scaffold a Vue component in Rails, and how to configure Vue.js in a Rails project.
          </p>
        </div>
        <div class="book-right"></div>
        <div class="book-left">
          <div class="book-left-content">
            <div class="d-flex justify-content-between align-items-center h-100 px-3">
              <span class="text-dark font-weight-bold">Vue on Rails</span>
              <span class="text-light text-right small">
                <span class="mr-2">With <i class="fas fa-heart text-danger"></i> by</span>
                Bryan Lim &amp; Richard LaFranchi
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
