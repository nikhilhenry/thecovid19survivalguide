<template>
<div>
  <Hero v-bind:heroPosts="heroPosts"/>
  <div class="container">
    <main>
      <section class="archive">
        <article v-for="(post,index) in posts" :key="index" v-on:click="pushToPost(post.slug)">
          <img :src="post.feature_image">
          <div class="content">
            <div class="stuff">
            <ul class="tags">
              <li v-for="(tag,index) in post.tags" :key="index">
                <span class="tag">#{{tag.name}}</span>
              </li>
            </ul>
            <h2 class="title">{{post.title}}</h2>
            <p>{{post.excerpt}}</p>
            </div>
            <span class="author">{{post.authors[0].name}}</span>
            <div class="extra">
              <span>{{post.date}} <i class="bullet">&#8226;</i> {{post.reading_time}} MIN READ</span>
            </div>
          </div>
        </article>
      </section>
    </main>
    <section class="button">
      <button class="loadmore" v-on:click="loadMore">load more</button>
    </section>
  </div>
</div>
</template>

<style lang="scss" scoped>
  main{
    margin:3em 0 1em;
  }
  .archive{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-gap: 2em;
  }

  main{
    article{
      display: flex;
      flex:1 1 301px;
      flex-direction: column;
      border-bottom: 1px solid #dfe4e7;
      cursor: pointer;
      img{
        height: 200px;
        width:100%;
        border-radius: .3em;
        object-fit: cover;
      }

      .content{
        padding: .5em 0 .5em;
        margin-bottom: .5em;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;

        .stuff{
          flex:1 1 auto;
        }
  
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
          line-height: 1.2em;
        }

        p{
          text-align: justify;
          text-justify: auto;
          display: block;
          color:#738a94;
          margin-bottom:2em;
          font-size: .9em;
        }
        .author{
          font-weight: 600;
          color: #424852;
          font-size: .9em;
        }
        
        .extra{
          span{
            color:#92a3ab;
            font-size: .8em;
          }
        }
      }
    }
  }

  .button{
    text-align: center;
    margin: 0 0 5em;
    .loadmore{
      font-size: 1em;
      text-transform: uppercase;
      background:none;
      border: solid 2px rgba($title-color, $alpha: .5);
      border-radius: 5px;
      color: rgba($title-color, $alpha: .5);
      opacity: .8;
      padding:.2em 1em .2em;
      transition: background .2s ease-in;
    }
    .loadmore:hover{
      background: $title-color;
      color:white;
    }
  }

@media only screen and (min-width: 1000px){

  article:nth-child(7n -6){
    grid-column: 1/-1;
    display:grid;
    grid-template-columns: 50% auto;
    grid-column-gap: 1em;
    img{
      height:300px;
      margin:0 0 1em;
    }
  }
  // article{
  //   img{
  //     height: 100%;
  //   }
  // }
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
  data(){
    return{
      pageNum:1,
      posts:[]
    }
  },
  async asyncData () {
    var heroPosts = await getFeaturedPost();
    var f_posts = await getPosts(1);
    var posts = [];
    f_posts.forEach(post => {
      post.date = new Date(post.published_at).toLocaleString('default', { month: 'short' }).toUpperCase()+' '+new Date(post.published_at).getDate()+' '+new Date(post.published_at).getFullYear();
      posts.push(post);
    });
    // console.log(posts)
    return { posts: posts,heroPosts : heroPosts }
  },
  methods:{
    pushToPost(slug){
      this.$router.push({
        path:'/blog/'+slug
      })
    },
  async loadMore(){
    this.pageNum+=1;
    var f_posts = await getPosts(this.pageNum); 
    var new_posts = []
    f_posts.forEach(post => {
      post.date = new Date(post.published_at).toLocaleString('default', { month: 'short' }).toUpperCase()+' '+new Date(post.published_at).getDate()+' '+new Date(post.published_at).getFullYear();
      new_posts.push(post);
    });
    this.posts = this.posts.concat(new_posts)
    console.log(this.posts)
  },
  }
}
</script>