import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://ec2-18-130-100-148.eu-west-2.compute.amazonaws.com',
  key: 'ef89982e83f60ba209f90b97a7',
  version: "v3"
});

//getting all posts for home 
export async function getPosts(){
  return await api.posts
    .browse({
      limit:"all",
      filter:"tag: - 'Artwork'",
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