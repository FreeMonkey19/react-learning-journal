import { data } from "../data";

function saveBlogPost(blogPost) {
  return data.push(blogPost);
}

export default saveBlogPost;
