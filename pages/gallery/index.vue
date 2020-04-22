<template>
<div>
  <div class="hero">
    <div class="container">
      <h1>Evocative Artworks</h1>
      <p class="subtitle">To bring in some light during these troubling times</p>
    </div>
  </div>

  <div class="container">
    <main>
      <ul>
        <li v-for="(post,index) in posts" :key = "index" v-on:click="pushToPost(post.slug)">
          <img :src="post.feature_image">
          <div class="content">
            <nuxt-link :to="{path: '/gallery/'+post.slug}">{{post.title}}</nuxt-link>
            <span>{{ post.authors[0].name}}</span>
          </div>
        </li>
      </ul>
    </main>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .hero{
    background-color: $primary-color;
    color:white;
    text-align: center;
    padding-top: 2em;
      
      h1{
        margin-bottom: 1em;
      }
    .subtitle{
      padding-bottom:2.5em;
    }
  }

  .container ul{
    list-style-type: none;
    padding:0;
  }

  main{

    li{
      background:white;
      margin: 1em 0;
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
      cursor: pointer;
    }

    li:hover{
      box-shadow: 0 2px 3px rgba(31,66,135,.3), 0 0 0 1px rgba(31,66,135,.3);
    }

    img{
      width:100%;
    }

    .content{
      padding: .5em;
      text-align: center;
    }

    a{
      text-transform: uppercase;
      font-size: 2em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      display: block;
      margin: -.1em 0;
    }

    h2{
      margin-top:3em;
      text-transform: uppercase;
      font-size: .8em;
    }

    span{
      color: $title-color;
      text-transform: uppercase;
    }
  }

@media only screen and (min-width: 600px){

  .container ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em;
  }
}

@media only screen and (min-width: 900px){

  .container ul{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
  }
}

</style>

<script>
import { getGallery } from '~/api/posts';
export default {
  async asyncData () {
    const posts = await getGallery();
    return { posts: posts }
  },
  methods:{
    pushToPost(slug){
      this.$router.push({
        path:'/gallery/'+slug
      })
    }
  }
}
</script>