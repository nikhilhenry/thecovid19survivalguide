<template>
  <div class="hero" v-bind:style="{'background-image':'url('+heroPost.feature_image+')'}">
    <div class="container">
      <span class="logos"></span>
      <h2>one legacy</h2>
      <h1 class="title">{{heroPost.title}}</h1>
      <nuxt-link :to="{ path: '/blog/'+heroPost.slug}">learn more <i class="fas fa-arrow-right"></i></nuxt-link>
    </div>
  </div>
</template>

<script>
import {getSinglePost} from '~/api/posts'
export default {
  name:'Hero',
  props:{
    heroPost:Object
  }

}
</script>

<style lang="scss" scoped>
.hero{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color:white;
  height: 40vh;
  .container{
    align-items: center;
    h2{
      padding: 1em 0 1em;
      text-transform: uppercase;
    }

    h1{
      padding: 0 0 .5em;
      font-size:3em;
      font-weight: bold!important;
    }

    a{
      text-decoration: none;
      color:white;
      background:#48c774;
      padding: .5em 1.5em .5em;
      border-radius: .5em;
      text-transform: uppercase;
      font-weight: 300;
      transition: background 0.2s linear;
      border: solid 2px #48c774;
    }

    a:hover{
      color:#48c774;
      background:transparent;
    }
  }
}
</style>