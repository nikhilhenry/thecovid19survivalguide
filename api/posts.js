import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://www.nikhilhenry.tech',
  key: '09f9d3fcd6994f82815a25602d',
  version: "v3"
});

//getting all posts for home 
export async function getPosts(page){
  return await api.posts
    .browse({
      limit:"7",
      page:page,
      filter:"tag: - 'Artwork'+tag: - 'hero'",
      include:"tags,authors"
    })
    .catch(err=>{
      console.error(err);
    });
}
//getting single post
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include:"tags,authors",
    })
    .catch(err => {
      console.error(err);
    });
}

//getting a featured post
export async function getFeaturedPost(){
  return await api.posts
    .browse({
      limit:"5",
      filter:"featured:true",
      order:"published_at ASCD"
    })
    .catch(err=>{
      console.log(err);
    });
}

// getting all posts for galley
export async function getGallery() {
  return await api.posts
    .browse({
      limit: "all",
      filter:"tag:Artwork",
      include:"tags,authors",
    })
    .catch(err => {
      console.error(err);
    });
}

//getting a single page
export async function getPage(pageSlug ) {
  return await api.pages
    .read({
      slug: pageSlug,
    })
    .catch(err => {
      console.error(err);
    });
}