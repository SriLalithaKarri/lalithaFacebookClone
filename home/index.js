let toggleViewBtn = document.getElementById("toggleViewBtn")
let sideBarLstItms = document.querySelectorAll('#sideLstCont > li')
let caroslFrm = document.querySelector(".crsl-frame")
let crslsmCont = document.querySelector(".carsl-sm-main-cont")
let crslPrevBtn = document.querySelector(".crsl-prev-btn")
let crslNxtBtn = document.querySelector(".crsl-nxt-btn")
let postSecCont = document.querySelector(".post-sec-main-cont")
let createPostInput = document.querySelector("#createPost")
let modalPost = document.querySelector("#modal-post")
let txtAreaInput = document.getElementById("txtInput");
let postImgurl = document.querySelector(".img-input");
let imageFile = document.getElementById("image-file")
let hideCreatePost = document.querySelector("#hideCreatePost")
let commentModal = document.querySelector("#comment-modal")
let submitPost = document.getElementById("submitPost")
let commentModalOverlay = document.getElementById("commentModalOverlay")
let adsContainer = document.getElementById("ads-container");
let expand = false
let itmsToShowCount = 11
let is_Liked = false

const users_stories = [
    {
        user_img: "https://randomuser.me/api/portraits/men/9.jpg",
        story_url: "https://images.pexels.com/photos/3264665/pexels-photo-3264665.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Holiday Gift"
    },
    {
        user_img: "https://randomuser.me/api/portraits/women/85.jpg",
        story_url: "https://cdn.pixabay.com/photo/2024/05/09/00/17/cofee-8749326_1280.png",
        title: "Enjoying Holiday"
    },
    {
        user_img: "https://randomuser.me/api/portraits/men/77.jpg",
        story_url: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "City Lights"
    },
    {
        user_img: "https://randomuser.me/api/portraits/men/58.jpg",
        story_url: "../images/storycardimg/waterfall.jpeg",
        title: "Waterfall Break"
    },
    {
        user_img: "https://randomuser.me/api/portraits/women/63.jpg",
        story_url: "..//images/storycardimg/holyevent.jpeg",
        title: "Live Laugh Love"
    },
    {
        user_img: "https://randomuser.me/api/portraits/men/17.jpg",
        story_url: "https://cdn.pixabay.com/photo/2020/04/25/13/28/bird-5090810_1280.jpg",
        title: "Nature"
    },
    {
        user_img: "https://randomuser.me/api/portraits/men/65.jpg",
        story_url: "https://burst.shopifycdn.com/photos/painter-working-in-studio.jpg?height=570&format=pjpg&exif=0&iptc=0",
        title: "Art Studio"
    },
    {
        user_img: "https://randomuser.me/api/portraits/men/32.jpg",
        story_url: "https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_1280.jpg",
        title: "Music Love"
    },
    {
        user_img: "https://randomuser.me/api/portraits/women/90.jpg",
        story_url: "../images/storycardimg/desert.jpeg",
        title: "Desert View"
    },
    {
        user_img: "https://randomuser.me/api/portraits/men/32.jpg",
        story_url: "https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712_1280.jpg",
        title: "Mountain View"
    },
    {
        user_img: "https://randomuser.me/api/portraits/women/90.jpg",
        story_url: "https://cdn.pixabay.com/photo/2013/08/22/19/18/flowers-174817_1280.jpg",
        title: "Rose Love"
    },
    {
        user_img: "https://randomuser.me/api/portraits/women/85.jpg",
        story_url: "https://cdn.pixabay.com/photo/2017/01/04/21/00/new-years-eve-1953253_1280.jpg",
        title: "Happy Diwali"
    }
];

let ads = [
    {
        "id": "ad001",
        "title": "Master JavaScript in 30 Days",
        "description": "Join our intensive bootcamp and become a JS pro.",
        "image_url": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        "target_url": "https://example.com/courses/javascript",
        "category": "Education",
        "cta_text": "Enroll Now"
    },
    {
        "id": "ad002",
        "title": "50% Off on Python Courses",
        "description": "Limited time offer on our best-selling Python courses.",
        "image_url": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
        "target_url": "https://example.com/deals/python",
        "category": "Education",
        "cta_text": "Get Offer"
    },
    {
        "id": "ad003",
        "title": "Learn Data Science with Experts",
        "description": "Comprehensive data science program with real-world projects.",
        "image_url": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
        "target_url": "https://example.com/courses/data-science",
        "category": "Education",
        "cta_text": "Start Learning"
    },
    {
        "id": "ad004",
        "title": "UI/UX Design Fundamentals",
        "description": "Understand the principles of great design.",
        "image_url": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        "target_url": "https://example.com/courses/ui-ux",
        "category": "Design",
        "cta_text": "Join Now"
    },
    {
        "id": "ad005",
        "title": "Cloud Computing Essentials",
        "description": "Get started with AWS, Azure, and Google Cloud.",
        "image_url": "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
        "target_url": "https://example.com/courses/cloud",
        "category": "Technology",
        "cta_text": "Explore Courses"
    }
];

const postData = [
    {
        "post_id": "1747731398959",
        "user_id": "Dabboo_Ratnani",
        "user_name": "Dabboo Ratnani",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-11-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-2-img.png",
            "caption": "#Nofilter needed,"
        },
        "likes_count": 8,
        "comments": [
            {
                "user_name": "Varun Aadithya",
                "user_id": "Varun_Aadithya",
                "comment": "Beauty is power; a smile is its sword."
            },
            {
                "user_name": "Atul Kasbekar",
                "user_id": "Atul_Kasbekar",
                "comment": "Someone looked pretty today."
            }
        ],
        "created_at": "2025-05-24T06:44:00.200Z",
        "share_count": 3,
        "isLiked": false
    },
    {
        "post_id": "1747731549000",
        "user_id": "Rathika_Ramasamy",
        "user_name": "Rathika Ramasamy",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-10-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-4-img.png",
            "caption": "Friends Forever"
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Guru Charan",
                "user_id": "Guru_Charan",
                "comment": "Friendship is another word for love."
            },
            {
                "user_name": "Atul Kasbekar",
                "user_id": "Atul_Kasbekar",
                "comment": "A friend is what the heart needs all the time."
            }
        ],
        "created_at": "2025-05-22T08:00:00.000Z",
        "share_count": 9,
        "isLiked": false
    },
    {
        "post_id": "1747732082639",
        "user_id": "Guru_Charan",
        "user_name": "Guru Charan",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-9-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-26-img.png",
            "caption": "Beautiful things don't ask for attention."
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Rathika Ramasamy",
                "user_id": "Rathika_Ramasamy",
                "comment": "lovely"
            },
            {
                "user_name": "Arjun Mark",
                "user_id": "Arjun_Mark",
                "comment": "awesome"
            }
        ],
        "created_at": "2025-01-03T07:55:40.100Z",
        "share_count": 7,
        "isLiked": false
    },
    {
        "post_id": "1747732055029",
        "user_id": "Varun_Aadithya",
        "user_name": "Varun Aadithya",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-1-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-28-img.png",
            "caption": "Keep calm and drive on."
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Varun Aadithya",
                "user_id": "Varun_Aadithya",
                "comment": "The cars we drive say a lot about us."
            },
            {
                "user_name": "Guru Charan",
                "user_id": "Guru_Charan",
                "comment": "We aren't addicted to oil, but our cars are."
            }
        ],
        "created_at": "2024-12-20T18:30:15.250Z",
        "share_count": 3,
        "isLiked": false
    },
    {
        "post_id": "1747732040087",
        "user_id": "Rathika_Ramasamy",
        "user_name": "Rathika Ramasamy",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-10-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-29-img.png",
            "caption": "Love is the flower you've got to let grow."
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Prabuddha Dasgupta",
                "user_id": "Prabuddha_Dasgupta",
                "comment": "Beautiful flower"
            },
            {
                "user_name": "Sooni Taraporevala",
                "user_id": "Sooni_Taraporevala",
                "comment": "Life is the flower for which love is the honey."
            }
        ],
        "created_at": "2024-12-05T11:45:00.000Z",
        "share_count": 6,
        "isLiked": false
    },
    {
        "post_id": "1747731883762",
        "user_id": "Varun_Aadithya",
        "user_name": "Varun Aadithya",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-1-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-30-img.png",
            "caption": "Random click"
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Atul Kasbekar",
                "user_id": "Atul_Kasbekar",
                "comment": "Cool."
            },
            {
                "user_name": "Sooni Taraporevala",
                "user_id": "Sooni_Taraporevala",
                "comment": "Nice."
            }
        ],
        "created_at": "2024-11-28T14:10:30.500Z",
        "share_count": 9,
        "isLiked": false
    },
    {
        "post_id": "1747731866117",
        "user_id": "rahul",
        "user_name": "Rahul",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-12-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-31-img.png",
            "caption": "Take time to smell the roses."
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Varun Aadithya",
                "user_id": "Varun_Aadithya",
                "comment": "Love is the flower you've got to let grow."
            },
            {
                "user_name": "Sooni Taraporevala",
                "user_id": "Sooni_Taraporevala",
                "comment": "This picture fascinates me. I just get lost into it."
            }
        ],
        "created_at": "2024-11-15T08:23:45.000Z",
        "share_count": 2,
        "isLiked": false
    },
    {
        "post_id": "1747731840482",
        "user_id": "rahul",
        "user_name": "Rahul",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-12-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-32-img.png",
            "caption": "Be water, my friend."
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Atul Kasbekar",
                "user_id": "Atul_Kasbekar",
                "comment": "Wonderful Place"
            },
            {
                "user_name": "Dayanita Singh",
                "user_id": "Dayanita_Singh",
                "comment": "Beautiful"
            }
        ],
        "created_at": "2024-11-20T18:30:15.250Z",
        "share_count": 7,
        "isLiked": false
    }
]


function getPostDetailsFrmLocalStrg() {
    let res = localStorage.getItem("postDetails")
    if (res == null) {
        return postData
    } else {
        return JSON.parse(res)
    }
}
let posts = getPostDetailsFrmLocalStrg()



//left-side-bar-view see-more/see-less
function updateView() {
    sideBarLstItms.forEach((item, index) => {
        if ((!expand) && (index >= itmsToShowCount)) {
            item.classList.add("hidden")
        } else {
            item.classList.remove("hidden")
        }
    })
    if (expand) {
        toggleViewBtn.innerHTML = `
            <div class="see-more-icon-cont"><i class="fa-solid fa-caret-up"></i></div>
            <h6 class="mt-1">See less</h6>
        `

    } else {
        toggleViewBtn.innerHTML = `
            <div class="see-more-icon-cont"><i class="fa-solid fa-caret-down"></i></div>
            <h6 class="mt-1">See more</h6>
        `
    }
}

//cilcking on see-more/see-less-button-left-side-bar
toggleViewBtn.addEventListener("click", () => {
    expand = !expand
    updateView()

})
updateView()

// displaying story cards lg-dvc
let count = 1;
let ulChild = "";
const totalItems = users_stories.length;

users_stories.forEach((item, index) => {
    ulChild += `<li style="background-image:url('${item.story_url}')" class="story-card">
        <img src="${item.user_img}" alt="profile-pic" class="usr-profile"/>
        <h6>${item.title}</h6>
    </li>`;

    // When we have 3 items or it's the last item
    if (count === 4 || index === totalItems - 1) {
        caroslFrm.innerHTML += `<ul>${ulChild}</ul>`;
        ulChild = "";
        count = 0;
    }
    count++
});

// sm-dvc-crsl
users_stories.forEach((item) => {
    crslsmCont.innerHTML += `<div style="background-image:url('${item.story_url}')" class="story-card">
        <img src="${item.user_img}" alt="profile-pic" class="usr-profile"/>
        <h6>${item.title}</h6>
    </div>`
})

function timeAgo(date) {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000)
    if (seconds < 60) return "just now";

    if (seconds < 3600) {
        const val = Math.floor(seconds / 60);
        return val + (val > 1 ? " mins ago" : " min ago");
    }

    if (seconds < 86400) {
        const val = Math.floor(seconds / 3600);
        return val + (val > 1 ? " hrs ago" : " hr ago");
    }

    if (seconds < 604800) {
        const val = Math.floor(seconds / 86400);
        return val + (val > 1 ? " days ago" : " day ago");
    }

    if (seconds < 2419200) {
        const val = Math.floor(seconds / 604800);
        return val + (val > 1 ? " weeks ago" : " week ago");
    }

    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

function getPostImage(imgUrl) {
    let element = `<p></p>`
    if (imgUrl !== "") {
        element = `<img src="${imgUrl}" class="w-100"/>`
    }
    return element

}
function getModalBody(item) {
    let imgUrl
    let noOfComments = (item.comments).length
    if (item.post_details.image_url == "undefined") {
        imgUrl = ""
    } else {
        imgUrl = item.post_details.image_url
    }
    if(item.post_details.caption == "undefined"){
        caption = `<p class="mt-0 mb-0"></p>`
    }else{
        caption = `<p class="post-caption p-3 pb-2" >${item.post_details.caption}</p>`

    }
    let modal_body = `
        <div>
          ${caption}
          ${getPostImage(imgUrl)}
      </div>
      <div class="post-bottom-top-cont ps-md-3 pe-md-4">
          <p class="mt-3">
              <i class="bi bi-hand-thumbs-up"></i>
            <span id="like${item.post_id}">${item.likes_count}</span>
          </p>
          <div class="d-flex">
              <p class="mt-3">
                  <i class="bi bi-chat id="commentsCount"></i>
                  <span id="commentCount${item.post_id}">${noOfComments}</span>
              </p>
              <p class="mt-3 ms-4">
                  <i class="bi bi-share"></i>
                  <span>${item.share_count}</span>
              </p>
          </div>
      </div>
       <div class="border post-bottom-cont px-md-4 ps-md-3 pe-md-3 py-md-4">
          <button id="likeBtn${item.post_id}" onclick="changeLikeBtnStatus(${item.post_id})">
              <i class="fa-solid fa-thumbs-up me-1"></i>
              <span class="h6">Like</span>
          </button>
          <button id="commentBtn${item.post_id}" onclick="showData(${item.post_id})">
              <i class="fa-solid fa-comment me-1"></i>
              <span class="h6 text-secondary">Comment</span>
          </button>
          <button>
              <i class="fa-solid fa-share-from-square"></i>
              <span class="me-1 h6">Share</span>
          </button>
        </div>
    `
    return modal_body
}
function getInnerHtmlElements(item) {
    let post_created_at = timeAgo(item.created_at)
    let elements = `
    <div class="post" id="${item.post_id}">
      <div class="d-flex justify-content-between align-items-center p-1 ps-3 pe-4 border-bottom">
          <div class="d-flex align-items-center">
          <img src="${item.profile_pic}" class="nav-top-icon-cont post-top-icon-cont"/>
          <div class="ms-3 mt-3">
              <h6>${item.user_name}</h6> 
              <p class="time-stamp">${post_created_at}<span class="ms-2"><i class="fa-solid fa-earth-asia"></i></span></p>
          </div>
          </div>
          <i class="fa-solid fa-xmark" onclick="onDeletePostFromFedd(${item.post_id})"></i>
      </div>
      ${getModalBody(item)}
  </div>
  `
    return elements
}



function renderPost(item) {
    let htmlElements = getInnerHtmlElements(item)
    postSecCont.innerHTML += htmlElements
}

function renderCommentModalBody(item) {
    let htmlElements = getInnerHtmlElements(item)
    console.log(htmlElements)
    return htmlElements
}


function getCommentSection(selectedPost) {
    let comments = selectedPost.comments
    let commentSecInnerHtml
    if (comments.length > 0) {
        commentSecInnerHtml = `<h6 class="mb-4 p-2 border-bottom">All Comments</h6>`
        commentSecInnerHtml += comments.map((item) => {
            return `<div class="d-flex mb-2">
                <img src="${item.image_url}" class="avatar"/>
                <div class="ms-3">
                    <h6 class="mb-1">${item.user_name}</h6>
                    <p>${item.comment}</p>
                </div>
                </div>`
        }).join("")
    } else {
        commentSecInnerHtml = `
            <div class="align-self-center p-2">
                <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?uid=R201463527&ga=GA1.1.479712402.1745080411&semt=ais_hybrid&w=740" class="no-comments-img"/>
                <h4>No comments yet</h4>
                <p>Be the first to comment</p> 
            </div>
        `
    }
    return commentSecInnerHtml
}

//post card
let newDateStr
function showData(postId) {
    let selectedPost = posts.find((item) => item.post_id == postId)
    let post_created_at = timeAgo(selectedPost.created_at)
    newDateStr = Date.now()
    commentModalOverlay.classList.remove("hide-modal")
    document.body.style.overflow = "hidden"

    commentModal.innerHTML = `
        <div class="comnt-modal-header">
            <h5>${selectedPost.user_name}'s Post</h5>
            <div class="nav-top-icon-cont icn-cont" onclick="hideCommentModal()"><i class="fa-solid fa-xmark" id="hideCommentModal"></i></div>
        </div>
        <div class="d-flex align-items-center p-2 border-bottom">
            <img src="${selectedPost.profile_pic}" class="nav-top-icon-cont post-top-icon-cont"/>
            <div class="ms-2 mt-3">
                <h6>${selectedPost.user_name}</h6> 
                <p class="time-stamp">${post_created_at}<span class="ms-2"><i class="fa-solid fa-earth-asia"></i></span></p>
            </div>
        </div>
        <div class="comment-modal-post-body">
            ${getModalBody(selectedPost)}
        </div>
        <div>
            <div class="d-flex flex-column align-items-start w-100 p-2 ps-4 px-4" id="comments_sec">${getCommentSection(selectedPost)}</div>
        </div>
        <div class="comment-modal-bottom-cont">
            <img src="${user.imgUrl}" class="avatar"/>
            <div class="comment-input-cont">
                <textarea type="text" placeholder="write a public comment" oninput="onChangeCommentInput(event)" id=${`comment${newDateStr}`}></textarea>
                <i class="bi bi-send-fill" id="sendComentBtn" onclick="onAddComment(${postId})" disabled></i>
            </div>
        </div>
    `

}



//input event on write comment input element
function onChangeCommentInput(event) {
    let sendComentBtn = document.getElementById("sendComentBtn")
    if (event.target.value != "") {
        sendComentBtn.style.color = "#2381fa"
        sendComentBtn.disabled = false
    } else {
        sendComentBtn.style.color = "#616057"
        sendComentBtn.disabled = true
    }
}

//onsend comment
function onAddComment(id) {
    let commentText = document.getElementById(`comment${newDateStr}`).value
    let comments_sec = document.getElementById("comments_sec")
    let commentCountText = document.getElementById(`commentCount${id}`)
    commentCountText.textContent = Number(commentCountText.textContent) + 1
    posts = posts.map((item) => {
        if (item.post_id == id) {
            item.comments.unshift(
                { user_name: user.name, user_id: user.name, comment: commentText, image_url: user.imgUrl }
            )
        }
        return item
    })
    localStorage.setItem("postDetails", JSON.stringify(posts))
    document.getElementById(`comment${newDateStr}`).value = ""
    // console.log(commentText)
    //disable send btn
    let sendBtn = document.getElementById("sendComentBtn");
    sendBtn.disabled = true;
    sendBtn.style.color = "#616057";
    //rerender the comments-sec
    let selectedPost = posts.find(item => item.post_id == id);
    console.log(selectedPost, "selectedPost")
    comments_sec.innerHTML = `
        <div class="d-flex flex-column align-items-start w-100 p-2 ps-4 px-4">
            ${getCommentSection(selectedPost)}
        </div>
    `

}

//hidecomment-modal
function hideCommentModal() {
    commentModalOverlay.classList.add("hide-modal")
    document.body.style.overflow = ""
}

//render all users posts
posts.forEach((item) => {
    renderPost(item)
})

function renderAllPosts(postArray) {
  postSecCont.innerHTML = "";
  if (postArray.length === 0) {
    postSecCont.innerHTML = `<div class="text-center mt-5">
        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png" 
             alt="No Match Found" 
             style="width: 250px; max-width: 100%; margin-bottom: 10px;" />
        <h5 class="text-muted">No Match Found</h5>
      </div>`
    return;
  }
  postArray.forEach(item => renderPost(item));
}

//searching for specific users post
let searchSpecificUserPost = document.getElementById("searchSpecificUserPost")
searchSpecificUserPost.addEventListener("input", () => {
  const query = searchSpecificUserPost.value.trim().toLowerCase();
  if (query === "") {
    renderAllPosts(posts); // Reset view to all posts
    return;
  }

  const filtered = posts.filter(post =>
    post.user_name.toLowerCase().includes(query)
  );
  renderAllPosts(filtered);
})


//changing like button status on user-action
function changeLikeBtnStatus(postId) {
    let likeBtn = document.getElementById(`likeBtn${postId}`)
    let likesCountEl = document.getElementById(`like${postId}`)
    let likesCount = Number(likesCountEl.textContent)
    is_Liked = !is_Liked
    likeBtn.classList.toggle("liked")
    likesCount = is_Liked ? likesCount + 1 : likesCount - 1
    likesCountEl.textContent = likesCount
    posts = posts.map((item) => {
        if (item.post_id == postId) {
            return { ...item, isLiked: is_Liked, likes_count: likesCount }
        } else {
            return item
        }
    })

}

//update input-placeholder based on screensize
function updatePlaceholder() {
    if (window.innerWidth >= 768) {
        createPostInput.placeholder = `What's on your mind, ${user.name}?`;
    } else {
        createPostInput.placeholder = "What's on your mind?";
    }
}
updatePlaceholder();
window.addEventListener("resize", updatePlaceholder);




//onclick createpostinputelement
let overlay = document.getElementById("overlay")
createPostInput.addEventListener("click", () => {
    overlay.classList.remove("hide-modal");
    document.body.style.overflow = "hidden";
})

//onclick xmark in create-post-cont
hideCreatePost.addEventListener("click", () => {
    overlay.classList.add("hide-modal");
    document.body.style.overflow = "";
})

//adding wheel event on carousel-frame
caroslFrm.addEventListener("wheel", (event) => {
    caroslFrm.scrollLeft += event.deltaX
})

//onclick carousel-prev-btn
crslPrevBtn.addEventListener("click", () => {
    caroslFrm.scrollLeft -= 600
    caroslFrm.style.scrollBehaviour = "smooth"
})
// onclick carousel-nxt-btn
crslNxtBtn.addEventListener("click", () => {
    caroslFrm.scrollLeft += 600
    caroslFrm.style.scrollBehaviour = "smooth"
})

//adding post details event listeners
let postCaptionText
let postImgUrl
txtAreaInput.placeholder = `What's in your mind ${user.name}?`
txtAreaInput.addEventListener("input", (event) => {
    postCaptionText = event.target.value
    submitPost.disabled = false
    submitPost.style.opacity = 1
})
postImgurl.addEventListener("change", (event) => {
    postImgUrl = event.target.value
    submitPost.disabled = false
    submitPost.style.opacity = 1
    console.log(submitPost.disabled)
})
imageFile.addEventListener("change", () => {
    let selectedImg = document.getElementById("selectedImg")
    let selectedFile = imageFile.files[0]
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
        const reader = new FileReader()
        reader.onload = function (e) {
            const base64Image = e.target.result;
            selectedImg.src = base64Image
            selectedImg.classList.remove("selected-img")
            selectedImg.classList.add("selected-img-preview")
            postImgUrl = base64Image
            submitPost.disabled = false
            submitPost.style.opacity = 1
        }
        reader.readAsDataURL(selectedFile)
    }
})


let scheduledPosts = JSON.parse(localStorage.getItem("scheduledPosts")) || [];
//onsubmit-post
submitPost.addEventListener("click", (event) => {
    overlay.classList.add("hidden")
    document.body.style.overflow = ""
    const datetime = document.getElementById("postDatetime").value;
    let post_det = {
        "post_id": `${Date.now()}`,
        "user_id": `${user.name}`,
        "user_name": `${user.name}`,
        "profile_pic": `${user.imgUrl}`,
        "post_details": {
            "image_url": `${postImgUrl}`,
            "caption": `${postCaptionText}`
        },
        "likes_count": 0,
        "comments": [],
        "created_at": `${new Date().toISOString()}`,
        "share_count": 0,
        "isLiked": false
    }
    if (datetime) {
        // console.log(datetime)
        const selectedDate = new Date(datetime);
        const now = new Date();

        if (selectedDate <= now) {
            alert("Please choose a future time to schedule your post.");
            return;
        }
        post_det.scheduledTime = datetime;
        // console.log(post_det,"schdpost")
        scheduledPosts.push(post_det);
        localStorage.setItem("scheduledPosts", JSON.stringify(scheduledPosts))
        setTimeout(()=>{alert(`Your post is scheduled and will be shared at ${selectedDate.toLocaleString()}.`)},700)

        
    }else {
        posts.unshift(post_det)
        localStorage.setItem("postDetails", JSON.stringify(posts))
        let postElement = getInnerHtmlElements(post_det)
        postSecCont.insertAdjacentHTML("afterbegin", postElement)
        setTimeout(() => { alert("Your post has been shared with your friends Successfully") }, 700)

    }
    document.getElementById("txtInput").value = ""; // Clear textarea
    document.getElementById("image-file").value = ""; // Clear file input
    document.querySelector(".img-input").value = ""; // Clear image URL input
    document.getElementById("selectedImg").src = ""; // Remove image preview
    document.getElementById("postDatetime").value = ""; // Clear datetime
    document.getElementById("submitPost").disabled = true;
   
    //setTimeout(() => { alert("Your post has been shared with your friends Successfully") }, 700)
})

// Check for expired scheduled posts every second
setInterval(() => {
    const now = new Date();

    scheduledPosts = scheduledPosts.filter(post => {
        if (new Date(post.scheduledTime) <= now) {
            post.createdAt = new Date().toISOString();
            posts.unshift(post);
            localStorage.setItem("postDetails", JSON.stringify(posts));
            renderPost(post);
            return false; 
        }
        return true; 
    });

    localStorage.setItem("scheduledPosts", JSON.stringify(scheduledPosts));
}, 1000);


//delete  post from feed
function onDeletePostFromFedd(id) {
    let post = document.getElementById(`${id}`)
    postSecCont.removeChild(post)
    posts = posts.filter((item) => item.post_id !== String(id))
    localStorage.setItem("postDetails", JSON.stringify(posts))
    // console.log(posts)
}


const adsPerSet = 2; // Number of ads to show at once
let currentIndex = 0;

function renderAds() {
    // Start fade out
    adsContainer.style.opacity = 0;

    // Wait for fade out before updating content
    setTimeout(() => {
        adsContainer.innerHTML = "";

        // Get next set of ads
        for (let i = 0; i < adsPerSet; i++) {
            const ad = ads[(currentIndex + i) % ads.length];
            const adDiv = document.createElement("div");
            adDiv.className = "ad-card";
            adDiv.innerHTML = `
               <img src="${ad.image_url}" alt="${ad.title}">
               <div class="ad-title">${ad.title}</div>
               <div class="ad-description">${ad.description}</div>
               <a href="${ad.target_url}" target="_blank">${ad.cta_text}</a>
            `
            adsContainer.appendChild(adDiv);
        }

        // Fade in
        adsContainer.style.opacity = 1;

        // Move to next set
        currentIndex = (currentIndex + adsPerSet) % ads.length;
    }, 200); // wait 0.5s for fade-out
}

setTimeout(renderAds())

// Update ads every 10 seconds (12000 milliseconds)
setInterval(renderAds, 12000);


