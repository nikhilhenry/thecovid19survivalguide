<template>
  <div class="container">
    <main>
      <h1 class="title">About us</h1>
      <div class="video">
        <iframe
          width="100%"
          height=""
          src="https://www.youtube.com/embed/H4ijjt-Nh9I"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="content">
        <nuxt-content :document="post" class="text" />
      </div>
    </main>
  </div>
</template>

<script>
import { getPage } from "~/api/posts";
export default {
  async asyncData({ $content, params }) {
    const post = await $content("about").fetch();
    return { post: post };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .video iframe {
    margin: 1em 0 1em;
    min-height: 300px;
  }

  .title {
    font-weight: bolder;
    font-size: 3em;
    margin-top: 1em;
  }

  .read_time {
    font-size: 1.25em;
    color: #333333;
    opacity: 0.5;
  }

  .content {
    padding: 1em 0 3em;

    ::v-deep p {
      margin-bottom: 1em;
      text-justify: auto;
      text-align: justify;
    }
  }
}

.video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  margin-bottom: 2em;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 768px) {
  .container {
    width: 50%;
  }
}
</style>
