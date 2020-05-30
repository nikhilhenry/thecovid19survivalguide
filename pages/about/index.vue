<template>
  <div class="container">
    <main>
      <h1 class="title">{{page.title}}</h1>
      <div class="video">
      <iframe width="100%" height="" src="https://www.youtube.com/embed/H4ijjt-Nh9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="content">
        <div v-html="page.html" class=".text">{{page.html}}</div>
      </div>
    </main>
  </div>
</template>

<script>
import { getPage } from '~/api/posts';
export default {
  async asyncData () {
    const page = await getPage('about-us');
    return { page: page }
  }
}
</script>

<style lang="scss" scoped>
.container{

  .video iframe{
    margin:1em 0 1em;
    min-height: 300px;
  }

  .title{
    font-weight: bolder;
    font-size: 3em;
    margin-top:1em;
  }

  .read_time{
    font-size: 1.25em;
    color: #333333;
    opacity: .5;
  }

  .content{
    padding: 1em 0 3em;

    /deep/ p{
      margin-bottom:1em;
      text-justify: auto;
      text-align: left;
    }
  }

}

@media only screen and(min-width: 768px){
  .container{
    width: 50%;

      .video iframe{
    min-height: 500px;
}
  }
}
</style>
