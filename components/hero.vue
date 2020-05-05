<template>
  <hooper :settings="hooperSettings">
    <slide>
      <div class="hero" v-bind:style="{'background-image':'url('+heroPost.feature_image+')'}">
        <div class="container">
          <h1 class="title">{{heroPost.title}}</h1>
          <nuxt-link :to="{ path: '/featured/'+heroPost.slug}">learn more <i class="fas fa-arrow-right"></i></nuxt-link>
        </div>
      </div>
    </slide>
    <slide>
      <h1>Hi</h1>
    </slide>
  <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import {getSinglePost} from '~/api/posts'
import 'hooper/dist/hooper.css'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
export default {
  name:'Hero',
  components:{
    Hooper,
    Slide,
    HooperNavigation
  },
  data(){
    return{
      hooperSettings:{
        centerMode: true,
        pagination: "no"
      }
    }
  },
  props:{
    heroPost:Object
  }

}
</script>

<style lang="scss" scoped>

.hooper{
  height: 50vh;
  margin:0;
}

.hero{
    display: flex;
    align-items: center;
    justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color:white;
  height: 45vh;
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
      font-weight: bold;
    }
  }
}

@media only screen and (min-width:1000px){
  .hero{
    height: 45vh;
  }
}
</style>