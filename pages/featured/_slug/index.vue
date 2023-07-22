<template>
  <div>
    <div class="container">
      <h1 class="title">{{ post.title }}</h1>
    </div>
    <figure class="full_image">
      <img :src="post.feature_image" class="cover_image" />
    </figure>
    <div class="container">
      <section class="content">
        <nuxt-content :document="post" class="text" />
      </section>
    </div>
  </div>
</template>

<script>
import { getSinglePost } from "~/api/posts";
export default {
  async asyncData({ $content, params }) {
    console.log(params);
    const post = await $content(`/hero/${params.slug}`).fetch();
    return { post: post };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1em 0 1em;

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
    margin-top: 0.5em;
  }

  .read_time {
    font-size: 1.25em;
    color: #333333;
    opacity: 0.5;
    margin: 0.75em 0 0.5em;
  }
}

.content {
  margin-bottom: 4em;
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
