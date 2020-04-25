<template>
<div>
  <Hero v-bind:heroPost="heroPost"/>
  <div class="container">
    <main>
      <section class="archive">
        <article v-for="(post,index) in posts" :key="index">
          <img :src="post.feature_image">
          <div class="content">
            <ul class="tags">
              <li v-for="(tag,index) in post.tags" :key="index">
                <span class="tag">#{{tag.name}}</span>
              </li>
            </ul>
            <h2 class="title">{{post.title}}</h2>
            <p>{{post.excerpt}}</p>
            <span class="author">{{post.authors[0].name}}</span>
            <div class="extra">
              <span>{{post.date}} <i class="bullet">&#8226;</i> {{post.reading_time}} MIN READ</span>
            </div>
          </div>
          <br>
        </article>
      </section>
    </main>
  </div>
</div>
</template>

<style lang="scss" scoped>
  main{
    article{
      margin-top:1em;
      border-bottom: 1px solid #dfe4e7;
      img{
        height: 200px;
        width:100%;
        border-radius: .3em;
        object-fit: cover;
      }

      .content{
        padding: .5em 0 .5em;
  
        ul{
          list-style-type: none;
          padding: 0;
          .tag{
            color: $tag-color;
            text-transform: uppercase;
            margin:0 0 .2em;
            letter-spacing: .2px;
            font-size: .8em;
            font-weight: 400;
          }
        }

        .title{
          margin:.1em 0 .4em;
          line-height: 1.15em;
        }

        p{
          display: block;
          color:#738a94;
          margin-bottom:.9em;
        }

        .author{
          font-weight: 600;
          color: #424852;
        }
        
        .extra{
          span{
            color:#92a3ab;
            font-size: .9em;
          }
        }
      }
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
    var f_posts = await getPosts();
    var posts = [];
    f_posts.forEach(post => {
      post.date = new Date(post.published_at).toLocaleString('default', { month: 'short' }).toUpperCase()+' '+new Date(post.published_at).getDate()+' '+new Date(post.published_at).getFullYear();
      posts.push(post);
    });
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