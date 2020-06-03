<template>
  <div class="container">
    <main>
      <img :src="post.feature_image">
      <h2 class="date">{{post.date}}</h2>
      <h1 class="title">{{post.title}}</h1>
      <div class="content">
        <div v-html="post.html" class="text">{{post.html}}</div>
        <span class="author">By </span><span class="author name" v-for="author in post.authors" :key="author.index">{{author.name}}</span>
      </div>
    </main>
  </div>
</template>

<script>
import { getSinglePost } from '~/api/posts';
export default {
  async asyncData ({params}) {
    const post = await getSinglePost(params.slug);

    var d = new Date(post.published_at);
    var date_string = d.toLocaleString('default', { month: 'long' }).toUpperCase()+' '+d.getDate()+', '+d.getFullYear();
    post.date = date_string;
    console.log(post.author)
    return { post: post }
  }
}
</script>

<style lang="scss" scoped>

.container{
  margin-top:1em;

  .date{
    font-weight: 100;
    color: $primary-color;
    margin: .75em 0 .5em;
  }

  .title{
    font-weight: bolder;
    font-size: 3em;
  }

  img{
    margin-top:2em;
    width:100%;
  }


  .content{
    padding-bottom: 3em;
    .author{
    font-weight: bold;
    font-size: 1.5em;
    color: $primary-color;
    margin: .75em 0 .5em;
    }

    .name{
      padding:0 .5em;
    }

     /deep/.kg-embed-card{
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
     } 
    /deep/iframe{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

}

@media only screen and(min-width: 768px){
  .container{
    width: 50%;
  }
}
</style>
