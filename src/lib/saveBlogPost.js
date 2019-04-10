function saveBlogPost(blogPost) {
  fetch(`http://localhost:4000/blog_posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      blogPost: blogPost
    })
  })
    .then(response => response.text())

    .catch(error => console.error(error));
}
export default saveBlogPost;
