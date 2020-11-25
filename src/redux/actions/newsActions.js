import { CREATE_NEWS, DELETE_NEWS, PUBLIS_NEWS } from "../constants";

export function createNews(news) {
  return { type: CREATE_NEWS, news };
}
export function deleteNews(id) {
  return { type: DELETE_NEWS, id };
}
export function publishNews(id) {
  return { type: PUBLIS_NEWS, id };
}
