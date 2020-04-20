<template>
  <div>
    <header>
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo">Education for Justice</nuxt-link>

          <nav>
            <ul>
              <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
              <li><nuxt-link to="/game">Game</nuxt-link></li>
              <li><nuxt-link to="/about">About us</nuxt-link></li>
              <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <nuxt />

    <footer>
      <div class="container">
        <div class="columns">
          <div class="column social">
            <h2>Follow us on social media</h2>
            <a href="https://www.instagram.com/legacy_chiaroscuro/"><i class="fab fa-instagram"></i></a>
            <br>
            <p class="address"><strong>Address: </strong>6/1A, 6/2 Byrathi Village, Bidarahalli Hobli, Off Hennur-Bagalur Main Road (New, International Airport Link Road), Bengaluru, Karnataka 560077</p>
          </div>
          <div class="column contact">
            <h2>Contact Us</h2>
            <ul>
              <li><p>Team:<a href="mailto:teamunodc@lsb.edu.in"> teamunodc@lsb.edu.in</a></p></li>
              <li><p>UNODC:<a href="mailto:educationforjustice@unodc.org"> educationforjustice@unodc.org</a></p></li>
            </ul>
          </div>
        </div>
        <div class="content">
          <p>
            <strong>Built by</strong> <a href="https://nikhilhenry.github.io">Nikhil Henry</a>
            <br>
            <strong>&copy; The Covid-19 Survival Guide</strong> by Legacy School Bangalore
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

html {
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  // background:#ECECEC;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container{
  margin: 0 auto;
  width: 90%;
}

header{
  background: $primary-color;
  padding: 1em 0;
  text-align:center;

  .navbar{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  a{
    color:white;
    text-decoration:none;
  }

  nav{
    display:flex;

    ul{
      list-style-type: none;
      padding: 0;
      display: flex;

      li a{
        font-weight: normal;
        padding: .5em;
      }
    }
  }
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
</style>
