<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>Expression Through Media</h1>
        <p class="subtitle">
          To bring in some light during these troubling times
        </p>
      </div>
    </div>

    <div class="container">
      <main>
        <ul>
          <li
            v-for="(post, index) in posts"
            :key="index"
            v-on:click="pushToPost(post.slug)"
          >
            <img :src="post.feature_image" />
            <div class="content">
              <nuxt-link :to="{ path: '/gallery/' + post.slug }">{{
                post.title
              }}</nuxt-link>
              <span>{{ post.author }}</span>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  color: white;
  text-align: center;
  padding-top: 2em;
  height: 40vh;

  h1 {
    margin-bottom: 1em;
  }
  .subtitle {
    padding-bottom: 2.5em;
  }
}

.container ul {
  list-style-type: none;
  padding: 0;
}

main {
  li {
    background: white;
    margin: 1em 0;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    cursor: pointer;
  }

  li:hover {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  .content {
    padding: 0.5em;
    text-align: center;
    margin-bottom: 1em;
  }

  a {
    text-transform: uppercase;
    font-size: 1.5em;
    text-decoration: none;
    color: black;
    font-weight: bold;
    display: block;
    margin: 0.1em 0;
  }

  h2 {
    margin-top: 3em;
    text-transform: uppercase;
    font-size: 0.8em;
  }

  span {
    color: $title-color;
    padding: 0 0.5em;
  }
}

@media only screen and (min-width: 600px) {
  .container ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em;
  }
}

@media only screen and (min-width: 900px) {
  .container ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
  }
}

@media only screen and (min-width: 1200px) {
  .container ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2em;
  }
}
</style>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("gallery").fetch();
    return { posts: posts };
  },
  methods: {
    pushToPost(slug) {
      this.$router.push({
        path: "/gallery/" + slug,
      });
    },
  },
};
</script>
