<template>
  <div>
    <Hero v-bind:heroPosts="heroPosts" />
    <div class="container">
      <main>
        <section class="archive">
          <nuxt-link
            v-for="(post, index) in posts"
            :key="index"
            :to="{ path: '/blog/' + post.slug }"
          >
            <article>
              <img :src="post.feature_image" />
              <div class="content">
                <div class="stuff">
                  <h2 class="title">{{ post.title }}</h2>
                  <p>
                    <nuxt-content :document="{ body: post.excerpt }" />
                  </p>
                </div>
                <span class="author">{{ post.author }}</span>
                <div class="extra">
                  <span>{{ post.date }}</span>
                </div>
              </div>
            </article>
          </nuxt-link>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  margin: 3em 0 1em;
}
.archive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 2em;
}

a {
  text-decoration: none;
  color: black;
  display: flex;
}

main {
  article {
    display: flex;
    flex: 1 1 301px;
    flex-direction: column;
    border-bottom: 1px solid #dfe4e7;
    cursor: pointer;
    img {
      height: 200px;
      width: 100%;
      border-radius: 0.3em;
      object-fit: cover;
    }

    .content {
      padding: 0.5em 0 0.5em;
      margin-bottom: 0.5em;
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;

      .stuff {
        flex: 1 1 auto;
      }

      ul {
        list-style-type: none;
        padding: 0;
        .tag {
          color: $tag-color;
          text-transform: uppercase;
          margin: 0 0 0.2em;
          letter-spacing: 0.2px;
          font-size: 0.8em;
          font-weight: 400;
        }
      }

      .title {
        margin: 0.1em 0 0.4em;
        line-height: 1.2em;
      }

      p {
        text-align: justify;
        text-justify: auto;
        display: block;
        color: #738a94;
        margin-bottom: 2em;
        font-size: 0.9em;
      }
      .author {
        font-weight: 600;
        color: #424852;
        font-size: 0.9em;
      }

      .extra {
        span {
          color: #92a3ab;
          font-size: 0.8em;
        }
      }
    }
  }
}

.button {
  text-align: center;
  margin: 0 0 5em;
  .loadmore {
    font-size: 1em;
    text-transform: uppercase;
    background: none;
    border: solid 2px rgba($title-color, $alpha: 0.5);
    border-radius: 5px;
    color: rgba($title-color, $alpha: 0.5);
    opacity: 0.8;
    padding: 0.2em 1em 0.2em;
    transition: background 0.2s ease-in;
  }
  .loadmore:hover {
    background: $title-color;
    color: white;
  }
}

@media only screen and (min-width: 1000px) {
  a:nth-child(7n-6) {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: 50% auto;
    grid-column-gap: 1em;
    img {
      height: 300px;
      margin: 0 0 1em;
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
import { getFeaturedPost } from "~/api/posts";
import { getPosts } from "~/api/posts";
import Hero from "~/components/hero";
export default {
  components: {
    Hero,
  },
  data() {
    return {
      pageNum: 1,
      posts: [],
    };
  },
  async asyncData({ $content }) {
    const heroPosts = await $content("hero").sortBy("title", "desc").fetch();
    const posts = await $content("posts").sortBy("date", "asc").fetch();
    // console.log(posts)
    return { posts: posts, heroPosts: heroPosts };
  },
};
</script>
