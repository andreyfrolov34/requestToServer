const api = (postId, method, name) => {
    let options = {
        method: 'GET'
    }

    if (method) {
        options.method = method;
    }
    if (name) {
        options.body = JSON.stringify({name})
        options.headers = {
            'content-type': 'application/json'
        }
    }

    return fetch(`http://localhost:8000/posts${postId ? `/${postId}` : ' '}`, options)
        .then(response => {
            return response.json()
        })
}
//http://localhost:8000${postId ? `/${postId}` : ''}
export default api