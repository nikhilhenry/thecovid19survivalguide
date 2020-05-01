<template>
  <div class="app">
    <header class="navigation">
    <section class="logo-section">
      <div class="container">
      <span class="logos">
        <a href="https://www.unodc.org/"><img src="../assets/logos/unodc.png" class="unodc"></a>
        <a href="https://www.lsb.edu.in/"><img src="../assets/logos/lsb.png" class="lsb"></a>
      </span>
      </div>
    </section>
    <div class="container">
    <nav>
      <div class="toggle" v-on:click="navToggle">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="logo">
        <h4><nuxt-link to="/">one legacy</nuxt-link></h4>
      </div>
      <ul class="nav-links" v-bind:class="{'is-active':isActive}">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
        <li><a href="https://www.quiz-maker.com/QUDDOSW">Game</a></li>
        <li><nuxt-link to="/about">About us</nuxt-link></li>
      </ul>
    </nav>
    </div>
    </header>
  </div>
</template>

<script>
export default {
  name:'Navbar',
  data(){
    return{
      isActive:false
    }
  },
  methods:{
    navToggle:function(){
      this.isActive=!this.isActive;
    }
  }
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

  header{
    background-color: black;
  }
  .logo-section{
    display: none;
    background-color: white;
    .logos{
      display: flex;
      justify-content: space-between;
      padding:.5em 0 .5em;
      align-items: center;

      a{
        margin:0;
        padding:0;
      }

      .unodc{
        height: 3em;
      }
      .lsb{
        height: 4em;
      }
    }
  }
  nav{
    color: white;
    padding: 1em 0 1em;
    margin: 0 auto;

    .logo{
      text-transform: uppercase;
      letter-spacing: 5px;
      font-weight: bold;
      font-size: 1.2em;
      a{
        text-decoration: none;
        color:white;
      }
    }

    ul{
      display: none;
      list-style-type: none;
      li{
        text-align: center;
        margin: .8em auto;
        font-size: .8em;
        a{
        text-decoration: none;
        color: white;
        transition: .3s ease-in-out;
        }
        a:hover{
          text-decoration: underline white;
        }
      }
    }

    .is-active{
      display:block;
    }

    .toggle{

      position: absolute;
      top:20px;
      right:10px;
      div{
        width: 25px;
        height: 3px;
        background-color: white;
        margin:5px;
      }
    }
  }


  //desktop
@media screen and (min-width: 768px) {

  .logo-section{
    display:block;
  }

  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;

   .toggle{
      display: none;
    }

    .nav-links{
      display:flex;
      justify-content: space-around;
      width: 30%;
    }
  }
}

</style>