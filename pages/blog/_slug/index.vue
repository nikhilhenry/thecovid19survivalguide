<template>
  <div>
    <div class="container">
      <h2 class="date">{{ post.date }}</h2>
      <h1 class="title">{{ post.title }}</h1>
    </div>
    <figure class="full_image">
      <img :src="post.feature_image" class="cover_image" />
    </figure>
    <div class="container">
      <section class="content">
        <nuxt-content :document="post" class="text" />
        <h1 class="author">By {{ post.author }}</h1>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content(`/posts/${params.slug}`).fetch();
    return { post: post };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 1em;

  .date {
    font-weight: 100;
    color: $tag-color;
    margin: 0.75em 0 0.5em;
    font-size: 1.25em;
  }

  .title {
    font-weight: bolder;
    font-size: 3em;
    line-height: 1;
  }

  .read_time {
    font-size: 1.25em;
    color: #333333;
    opacity: 0.5;
    margin: 0.75em 0 0.5em;
  }

  .tags {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    // justify-content: space-between;

    li {
      background-color: #eeeeee;
      display: inline-block;
      padding: 0.3em 0.7em 0.3em;
      border-radius: 20px;
      font-weight: 400;
      margin: 0.5em 0.5em 0.5em 0;
    }
    margin-bottom: 1.5em;
  }

  .content {
    padding-bottom: 3em;
    .author {
      font-weight: bold;
      color: $primary-color;
      margin: 0.75em 0 0.5em;
    }
  }
}

.cover_image {
  width: 100%;
  height: auto;
}

@media only screen and (min-width:900px) {
  .container {
    width: 50%;
  }

  .cover_image {
    width: 60% !important;
  }
}

@media only screen and (min-width: 768px) {
  .full_image {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .cover_image {
    width: 90%;
  }
}
</style>
