<template>
  <div class="app">
    <header class="navigation">
    <section class="logo-section " v-bind:class="{'is-off':isOff}">
      <i class="fas fa-times-circle" v-on:click="logoToggle"></i>
      <div class="container">
      <span class="logos">
       <a href="https://www.lsb.edu.in/"><img src="../assets/logos/lsb.png" class="lsb"></a>
       <div class="un-wrapper">
        <span>In support of</span>
        <a href="https://www.unodc.org/"><img src="../assets/logos/e4j.jpg" class="unodc"></a>
        </div>
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
        <h4><nuxt-link to="/">una voca</nuxt-link></h4>
      </div>
      <ul class="nav-links" v-bind:class="{'is-active':isActive}">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/gallery">Arts</nuxt-link></li>
        <li><a href="https://www.quiz-maker.com/QUDDOSW">Game</a></li>
        <li><nuxt-link to="/about">About Us</nuxt-link></li>
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
      isActive:false,
      isOff:false
    }
  },
  methods:{
    navToggle:function(){
      this.isActive=!this.isActive;
    },
    logoToggle:function(){
      this.isOff=!this.isOff;
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
    .fa-times-circle{
      margin:.5em;
      position: absolute;
      top:0;
      right:0;
      color:rgb(216, 216, 216)
    }
    .fa-times-circle:hover{
      color:rgb(179, 179, 179)
    }
    .logos{
      display: flex;
      justify-content: space-between;
      padding:.5em 0 .5em;
      align-items: center;

      a{
        margin:0;
        padding:0;
      }

      .un-wrapper{
        display: flex;
        flex-direction: column;
        text-align: center;
        span{
          font-weight: 200;
          letter-spacing: .15em;
        }
        
      }

      .unodc{
        height: 3em;
      }
      .lsb{
        height: 4.5em;
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

  .is-off{
    display: none;
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