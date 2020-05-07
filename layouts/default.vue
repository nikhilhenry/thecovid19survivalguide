<template>
  <div>
    <Navbar/>
    <nuxt />
    <footer id="footer">
      <div class="container">
        <div class="columns">
          <div class="column social">
            <h2>Follow us on social media</h2>
            <a href="https://www.instagram.com/legacy_chiaroscuro/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCrcwLBYBSELGoHN6OAO7iPw"><i class="fab fa-youtube"></i></a>
            <a href=""><i class="fab fa-facebook"></i></a>
            <br>
            <p class="address"><strong>Address: </strong>6/1A, 6/2 Byrathi Village, Bidarahalli Hobli, Off Hennur-Bagalur Main Road (New, International Airport Link Road), Bengaluru, Karnataka 560077</p>
          </div>
          <div class="column contact">
            <h2>Contact Us</h2>
            <ul>
              <h3>TEAM</h3>
              <li><a href="mailto:student.voices@lsb.edu.in"> student.voices@lsb.edu.in</a></li>
              <!-- <h3>UNODC</h3>
              <li><a href="mailto:educationforjustice@unodc.org"> educationforjustice@unodc.org</a></li> -->
            </ul>
            <h2>Disclaimer</h2>
            <p>This website features creative content produced and submitted by students. The views and opinions expressed on this website, and the responsibility of ensuring their originality, are those of the authors. Content on this website does not necessarily reflect the official policy or position of The Legacy School or UNODC. UNODC and The Legacy School do not take any responsibility for any copyright claims or any other disputes that may arise due to any item placed on this website</p>
          </div>
        </div>
        <div class="content">
          <p>
            <strong>Built by</strong> <a href="https://nikhilhenry.github.io">Nikhil Henry</a>
            <br>
            <strong>One Legacy. All rights reserved</strong>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/navbar'

export default {
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

html {
  font-family: 'Avenir','Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.kg-image{
  width:100%;
}

.text{
  text-align: justify;
  text-justify: distribute;
 p{
  margin: 1em 0 1em;
  // text-justify: auto;
  }
}

.container{
  margin: 0 auto!important;
  width: 90%;
}

footer {
  
  background:#eee;
  .container{
    padding: 1.5em 0 .5em;
    width: 90%;

    ul{
      list-style-type: none;
      padding-left: 0;
    }

    .column{
      padding-bottom: 1em;
      h2{
        padding-bottom: .4em;
      }
    }

    .social{
      a{
        font-size: 1.9em;
        margin-right: 1em;
      }

      p{
       padding-top: .4em; 
      }
    }

    p{
      padding-bottom: .4em;
    }

  
    a{
      text-decoration: none;
      color: #3273DC;
    }

    .contact{
      ul{
        margin-bottom: 1.5em;
      }
      p{
        font-size: .8em;
      }
    }

  .content{
    text-align: center;

  }
}
}

@media only screen and (min-width: 768px){
  body{
    font-size:18px;
  }

  .container{
    width:80%;
  }

  .columns{
    display: flex;
    justify-content: space-between;

    .column{
      width:50%;
    }

    .contact{
      text-align: right;
    }
  }

  .address{
    max-width: 40%;
  }
  
}

@media only screen and (min-width: 900px){
  .container{
    width:70%
  }
}
</style>
