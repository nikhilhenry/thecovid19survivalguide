<template>
<div>
  <Hero v-bind:heroPost="heroPost"/>
  <div class="container">
    <main>
      <h2>spotlight</h2>
      <ul>
        <li v-for="(post,index) in posts" :key = "index" v-on:click="pushToPost(post.slug)">
          <img :src="post.feature_image">
          <div class="content">
            <span>{{ post.authors[0].name}}</span>
            <nuxt-link :to="{ path: '/blog/'+post.slug}">{{post.title}}</nuxt-link>
            <p>{{post.excerpt}}</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</div>
</template>

<style lang="scss" scoped>

  .container ul{
    list-style-type: none;
    padding:0;
  }

  main{

    li{
      background:white;
      border-radius:1em;
      padding: .8em;
      margin: 1em 0;
      // box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.06);
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
      cursor: pointer;
    }

    li:hover{
      box-shadow: 0 2px 3px rgba(31,66,135,.3), 0 0 0 1px rgba(31,66,135,.3);
    }

    img{
      width:100%;
      border-radius: .5em;
    }

    .content{
      padding: .5em;
    }

    a{
      font-size: 1.5em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      display: block;
      margin: -.1em 0 .2em;
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

@media only screen and (min-width: 768px){
  main li{
    display:grid;
    grid-template-columns: 180px auto;
    grid-column-gap: 1em;
  }
}
</style>

<script>
import {getFeaturedPost} from '~/api/posts';
import { getPosts } from '~/api/posts';
import Hero from '~/components/hero';
export default {
  components:{
    Hero
  },
  async asyncData () {
    var heroPost = await getFeaturedPost();
    heroPost = heroPost[0]
    const posts = await getPosts();
    return { posts: posts,heroPost : heroPost }
  },
  methods:{
    pushToPost(slug){
      this.$router.push({
        path:'/blog/'+slug
      })
    }
  }
}
</script>