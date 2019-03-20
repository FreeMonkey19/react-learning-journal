function saveBlogPost(blogPost) {
  const allPosts = JSON.parse(localStorage.getItem("posts"));

  return allPosts.push(blogPost);
}

export default saveBlogPost;
