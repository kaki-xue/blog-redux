// TODO: add and export your own actions
export const SET_POSTS = "SET_POSTS";
export const FETCH_POST = 'FETCH_POST'
export const POST_CREATED = 'POST_CREATED'

export function setPosts() {
  const promise =  fetch('http://reduxblog.herokuapp.com/api/posts?key=kaki')
    .then(response => response.json())


        return {
          type: SET_POSTS,
          payload: promise
        }

}

export function fetchPost(id) {
  const promise = fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=kaki`)
                  .then(response => response.Json());

  return {
    type: FETCH_POST,
    payload: promise
  }
}

export function createPost(body, callback) {
  const request = fetch("http://reduxblog.herokuapp.com/api/posts?key=kaki", {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringyfy(body)
  }).then(response => response.json())
  .then(callback);
  return {
    type:POST_CREATED,
    payload: request
  };

}
