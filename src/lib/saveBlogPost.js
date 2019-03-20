function saveBlogPost(blogPost) {
  const allPosts = JSON.parse(localStorage.getItem("posts"));
  allPosts.push(blogPost);
  localStorage.setItem("posts", JSON.stringify(allPosts));
}

export default saveBlogPost;
