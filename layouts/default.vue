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
            <a href=""><i class="fab fa-youtube"></i></a>
            <a href=""><i class="fab fa-facebook"></i></a>
            <br>
            <p class="address"><strong>Address: </strong>6/1A, 6/2 Byrathi Village, Bidarahalli Hobli, Off Hennur-Bagalur Main Road (New, International Airport Link Road), Bengaluru, Karnataka 560077</p>
          </div>
          <div class="column contact">
            <h2>Contact Us</h2>
            <ul>
              <li><p>Team:<a href="mailto:student.voices@lsb.edu.in"> student.voices@lsb.edu.in</a></p></li>
              <li><p>UNODC:<a href="mailto:educationforjustice@unodc.org"> educationforjustice@unodc.org</a></p></li>
            </ul>
          </div>
        </div>
        <div class="content">
          <p>
            <strong>Built by</strong> <a href="https://nikhilhenry.github.io">Nikhil Henry</a>
            <br>
            <strong>&copy; One Legacy</strong> by Legacy School Bangalore
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

.text p{
  margin: 1em 0 1em;
}

.container{
  margin: 0 auto;
  width: 90%;
}

footer {
  
  background:#fafafa;
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
