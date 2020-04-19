import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://ec2-18-130-100-148.eu-west-2.compute.amazonaws.com',
  key: 'ef89982e83f60ba209f90b97a7',
  version: "v3"
});

export async function getPosts(){
  return await api.posts
    .browse({
      limit:"all",
      include:"tags,authors"
    })
    .catch(err=>{
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}