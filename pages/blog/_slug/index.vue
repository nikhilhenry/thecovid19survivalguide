<template>
<div>
  <div class="container">
      <h2 class="date">{{post.date}}</h2>
      <h1 class="title">{{post.title}}</h1>
      <p class="read_time"><i class="fas fa-hourglass-half"></i> {{post.reading_time}} MIN READ</p>
      <ul class="tags">
        <li v-for="(tag,index) in post.tags" :key="index">
          <span>{{tag.name}}</span>
        </li>
      </ul>
  </div>
  <figure class="full_image">
  <img :src="post.feature_image" class="cover_image">
  </figure>
  <div class="container">
    <section class="content">
        <div v-html="post.html" class="text">{{post.html}}</div>
        <h1 class="author">By {{ post.authors[0].name}}</h1>
    </section>
  </div>
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
    color: $tag-color;
    margin: .75em 0 .5em;
  }

  .title{
    font-weight: bolder;
    font-size: 3em;
  }

  .read_time{
    font-size: 1.25em;
    color: #333333;
    opacity: .5;
  }

  .tags{
    list-style-type:none;
    padding-left: 0;
    display: flex;
    // justify-content: space-between;

    li{
      background-color: #eeeeee;
      display: inline-block;
      padding: .3em .7em .3em;
      border-radius: 20px;
      font-weight: 400;
      margin:.5em .5em .5em 0;
    }
    margin-bottom: 1.5em;
  }

  .content{
    padding-bottom: 3em;
    .author{
    font-weight: bold;
    color: $primary-color;
    margin: .75em 0 .5em;
    }
  }

}

  .cover_image{
    width:100%;
    height: auto;
  }

@media only screen and(min-width:900px){
  .container{
    width:50%;
  }

  .cover_image{
    width:60%!important;
  }
}

@media only screen and(min-width: 768px){

  .full_image{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .cover_image{
    width:90%;
  }
}
</style>
