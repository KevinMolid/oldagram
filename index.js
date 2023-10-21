const postsEl = document.getElementById("posts-el")

const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    let name = posts[i].name
    let username = posts[i].username
    let location = posts[i].location
    let avatar = posts[i].avatar
    let post = posts[i].post
    let comment = posts[i].comment
    let likes = posts[i].likes
    
    let entry = `     
      <div class="container">
        <div class="user-wrapper">
          <img class="avatar" src=${avatar}>
          <div class="user-text-wrapper">
            <p class="bold-text">${name}</p>
            <p class="small-text">${location}</p>
          </div>
        </div>
        <img class="post-img" src=${post}>
        <div class="icon-wrapper">
          <img alt="like-button" src="images/icon-heart.png" onclick="increaseLikes(${i})">
          <img src="images/icon-comment.png">
          <img src="images/icon-dm.png">
        </div>
        <div class="likesAndComments">
          <p class="bold-text">${likes} likes</p>
          <p><span class="name">${username}</span> ${comment}</p>
        </div>
      </div>
      `

    postsEl.innerHTML += entry
  }
}

function increaseLikes(i) {
  posts[i].likes += 1
  postsEl.innerHTML = ""
  renderPosts()
}

renderPosts()