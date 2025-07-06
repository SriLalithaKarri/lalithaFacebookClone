let scheduledPosts = JSON.parse(localStorage.getItem("scheduledPosts")) || [];
console.log(scheduledPosts)
let posts = JSON.parse(localStorage.getItem("postDetails")) || [];

function renderScheduledPosts() {
  const container = document.getElementById("scheduledPostsContainer");
  container.innerHTML = "";

  if (scheduledPosts.length === 0) {
    container.innerHTML = `<div class="text-center text-muted mt-5">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbYSOcKyZJfmz6SS50Kd_5PuvlFTGrSNDdw&s" alt="No scheduled posts" style="max-width: 200px; margin-bottom: 20px;">
    <h5>No Scheduled Posts</h5>
    <p class="text-muted">You don't have any posts scheduled. Try scheduling one to share with your friends later!</p>
  </div>`;
    return;
  }

  scheduledPosts.forEach((post, index) => {
    let element 
    let caption
    if(post.post_details.caption == "undefined"){
      caption = "<p></p>"
    }else{
      caption = `<h6 class="ms-1">${post.post_details.caption}</h6>`
    }
    if(post.post_details.image_url == "undefined"){
      element = "<p></p>"
    }else{
      element = `<img src="${post.post_details.image_url}"/>`
    }
    const div = document.createElement("div");
    div.className = "scheduled-post";
    div.innerHTML = `
      <h5>${post.user_name}</h5>
      ${caption}
      ${element}
      <p class="mt-4">Scheduled for: ${new Date(post.scheduledTime).toLocaleString()}</p>
      <button class="btn btn-sm btn-danger mt-4 align-self-end">Delete</button>
    `;

    // Delete button logic
    const deleteBtn = div.querySelector("button");
    deleteBtn.addEventListener("click", () => {
      scheduledPosts.splice(index, 1);
      localStorage.setItem("scheduledPosts", JSON.stringify(scheduledPosts));
      renderScheduledPosts(); // re-render after deletion
    });

    container.appendChild(div);
  });
}

renderScheduledPosts();

// Move scheduled to feed when time arrives
setInterval(() => {
  const now = new Date();
  scheduledPosts = scheduledPosts.filter(post => {
    const scheduledTime = new Date(post.scheduledTime);
    if (scheduledTime <= now) {
      post.created_at = new Date().toISOString();
      posts.unshift(post);
      localStorage.setItem("postDetails", JSON.stringify(posts));
      return false;
    }
    return true;
  });

  localStorage.setItem("scheduledPosts", JSON.stringify(scheduledPosts));
  renderScheduledPosts();
}, 1000);
