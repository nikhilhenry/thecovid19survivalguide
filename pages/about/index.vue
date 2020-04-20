<template>
  <div class="container">
    <main>
      <h1 class="title">{{page.title}}</h1>
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
  margin-top:2em;

  .title{
    font-weight: bolder;
    font-size: 3em;
  }

  .read_time{
    font-size: 1.25em;
    color: #333333;
    opacity: .5;
  }

  .content{
    padding: 2em 0 3em;
  }

}

@media only screen and(min-width: 768px){
  .container{
    width: 50%;
  }
}
</style>
