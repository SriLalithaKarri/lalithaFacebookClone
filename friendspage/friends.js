let requestsCont = document.querySelector("#requests-cont")
let frndsSuggestionsCont = document.querySelector("#frnds-suggestions-cont")
let paginationCont = document.getElementById("paginationCont")
let seeMoreBtn = document.getElementById("seeMoreBtn")
let itemstoShowCount = 8
let expand = false

let friendRequests = [
  {
    "id": 101,
    "name": "Emma Johnson",
    "profilePic": "https://i.pravatar.cc/300?img=1",
    "mutualFriends": 8,
    "requestDate": "2025-05-20"
  },
  {
    "id": 102,
    "name": "Liam Smith",
    "profilePic": "https://i.pravatar.cc/300?img=2",
    "mutualFriends": 3,
    "requestDate": "2025-05-20"
  },
  {
    "id": 103,
    "name": "Olivia Brown",
    "profilePic": "https://i.pravatar.cc/300?img=3",
    "mutualFriends": 6,
    "requestDate": "2025-05-19"
  },
  {
    "id": 104,
    "name": "Noah Davis",
    "profilePic": "https://i.pravatar.cc/300?img=4",
    "mutualFriends": 10,
    "requestDate": "2025-05-19"
  },
  {
    "id": 105,
    "name": "Sophia Wilson",
    "profilePic": "https://i.pravatar.cc/300?img=5",
    "mutualFriends": 4,
    "requestDate": "2025-05-18"
  },
  {
    "id": 106,
    "name": "James Taylor",
    "profilePic": "https://i.pravatar.cc/300?img=52",
    "mutualFriends": 7,
    "requestDate": "2025-05-18"
  },
  {
    "id": 107,
    "name": "Ava Moore",
    "profilePic": "https://i.pravatar.cc/300?img=7",
    "mutualFriends": 2,
    "requestDate": "2025-05-17"
  },
  {
    "id": 108,
    "name": "William Anderson",
    "profilePic": "https://i.pravatar.cc/300?img=8",
    "mutualFriends": 9,
    "requestDate": "2025-05-17"
  },
  {
    "id": 109,
    "name": "Isabella Thomas",
    "profilePic": "https://i.pravatar.cc/300?img=9",
    "mutualFriends": 5,
    "requestDate": "2025-05-16"
  },
  {
    "id": 110,
    "name": "Mason Jackson",
    "profilePic": "https://i.pravatar.cc/300?img=10",
    "mutualFriends": 3,
    "requestDate": "2025-05-16"
  },
  {
    "id": 111,
    "name": "Mia White",
    "profilePic": "https://i.pravatar.cc/300?img=11",
    "mutualFriends": 11,
    "requestDate": "2025-05-15"
  },
  {
    "id": 112,
    "name": "Elijah Harris",
    "profilePic": "https://i.pravatar.cc/300?img=12",
    "mutualFriends": 1,
    "requestDate": "2025-05-15"
  },
  {
    "id": 113,
    "name": "Charlotte Martin",
    "profilePic": "https://i.pravatar.cc/300?img=13",
    "mutualFriends": 6,
    "requestDate": "2025-05-14"
  },
  {
    "id": 114,
    "name": "Logan Thompson",
    "profilePic": "https://i.pravatar.cc/300?img=14",
    "mutualFriends": 7,
    "requestDate": "2025-05-14"
  },
  {
    "id": 115,
    "name": "Amelia Garcia",
    "profilePic": "https://i.pravatar.cc/300?img=15",
    "mutualFriends": 2,
    "requestDate": "2025-05-13"
  },
  {
    "id": 116,
    "name": "Lucas Martinez",
    "profilePic": "https://i.pravatar.cc/300?img=16",
    "mutualFriends": 9,
    "requestDate": "2025-05-13"
  },
  {
    "id": 117,
    "name": "Harper Robinson",
    "profilePic": "https://i.pravatar.cc/300?img=17",
    "mutualFriends": 4,
    "requestDate": "2025-05-12"
  },
  {
    "id": 118,
    "name": "Benjamin Clark",
    "profilePic": "https://i.pravatar.cc/300?img=18",
    "mutualFriends": 3,
    "requestDate": "2025-05-12"
  },
  {
    "id": 119,
    "name": "Evelyn Rodriguez",
    "profilePic": "https://i.pravatar.cc/300?img=19",
    "mutualFriends": 5,
    "requestDate": "2025-05-11"
  },
  {
    "id": 120,
    "name": "Henry Lewis",
    "profilePic": "https://i.pravatar.cc/300?img=20",
    "mutualFriends": 6,
    "requestDate": "2025-05-11"
  },
  {
    "id": 121,
    "name": "Abigail Lee",
    "profilePic": "https://i.pravatar.cc/300?img=21",
    "mutualFriends": 10,
    "requestDate": "2025-05-10"
  },
  {
    "id": 122,
    "name": "Sebastian Walker",
    "profilePic": "https://i.pravatar.cc/300?img=22",
    "mutualFriends": 2,
    "requestDate": "2025-05-10"
  },
  {
    "id": 123,
    "name": "Ella Hall",
    "profilePic": "https://i.pravatar.cc/300?img=23",
    "mutualFriends": 8,
    "requestDate": "2025-05-09"
  },
  {
    "id": 124,
    "name": "Daniel Allen",
    "profilePic": "https://i.pravatar.cc/300?img=24",
    "mutualFriends": 1,
    "requestDate": "2025-05-09"
  },
  {
    "id": 125,
    "name": "Grace Young",
    "profilePic": "https://i.pravatar.cc/300?img=25",
    "mutualFriends": 4,
    "requestDate": "2025-05-08"
  },
  {
    "id": 126,
    "name": "Matthew Hernandez",
    "profilePic": "https://i.pravatar.cc/300?img=26",
    "mutualFriends": 5,
    "requestDate": "2025-05-08"
  },
  {
    "id": 127,
    "name": "Chloe King",
    "profilePic": "https://i.pravatar.cc/300?img=27",
    "mutualFriends": 7,
    "requestDate": "2025-05-07"
  },
  {
    "id": 128,
    "name": "Jackson Wright",
    "profilePic": "https://i.pravatar.cc/300?img=28",
    "mutualFriends": 6,
    "requestDate": "2025-05-07"
  },
  {
    "id": 129,
    "name": "Lily Scott",
    "profilePic": "https://i.pravatar.cc/300?img=29",
    "mutualFriends": 3,
    "requestDate": "2025-05-06"
  },
  {
    "id": 130,
    "name": "Alexander Green",
    "profilePic": "https://i.pravatar.cc/300?img=30",
    "mutualFriends": 4,
    "requestDate": "2025-05-06"
  },
  {
    "id": 131,
    "name": "Zoe Adams",
    "profilePic": "https://i.pravatar.cc/300?img=31",
    "mutualFriends": 6,
    "requestDate": "2025-05-05"
  },
  {
    "id": 132,
    "name": "Nathan Perez",
    "profilePic": "https://i.pravatar.cc/300?img=32",
    "mutualFriends": 4,
    "requestDate": "2025-05-05"
  }
]

let peopleYouMayKnow = [
  {
    "id": 201,
    "name": "Ethan Morgan",
    "profilePic": "https://i.pravatar.cc/300?img=11",
    "mutualFriends": 5
  },
  {
    "id": 202,
    "name": "Zoe Bennett",
    "profilePic": "https://i.pravatar.cc/300?img=12",
    "mutualFriends": 3
  },
  {
    "id": 203,
    "name": "Nathan Foster",
    "profilePic": "https://i.pravatar.cc/300?img=13",
    "mutualFriends": 4
  },
  {
    "id": 204,
    "name": "Luna Hayes",
    "profilePic": "https://i.pravatar.cc/300?img=14",
    "mutualFriends": 6
  },
  {
    "id": 205,
    "name": "Aiden Perry",
    "profilePic": "https://i.pravatar.cc/300?img=15",
    "mutualFriends": 2
  },
  {
    "id": 206,
    "name": "Scarlett Simmons",
    "profilePic": "https://i.pravatar.cc/300?img=16",
    "mutualFriends": 8
  },
  {
    "id": 207,
    "name": "Julian Ross",
    "profilePic": "https://i.pravatar.cc/300?img=17",
    "mutualFriends": 5
  },
  {
    "id": 208,
    "name": "Violet Reed",
    "profilePic": "https://i.pravatar.cc/300?img=18",
    "mutualFriends": 7
  },
  {
    "id": 209,
    "name": "Liam Parker",
    "profilePic": "https://i.pravatar.cc/300?img=19",
    "mutualFriends": 4
  },
  {
    "id": 210,
    "name": "Emily Turner",
    "profilePic": "https://i.pravatar.cc/300?img=20",
    "mutualFriends": 6
  },
  {
    "id": 211,
    "name": "Caleb Mitchell",
    "profilePic": "https://i.pravatar.cc/300?img=21",
    "mutualFriends": 3
  },
  {
    "id": 212,
    "name": "Sophie Adams",
    "profilePic": "https://i.pravatar.cc/300?img=22",
    "mutualFriends": 9
  },
  {
    "id": 213,
    "name": "Isaac Rivera",
    "profilePic": "https://i.pravatar.cc/300?img=23",
    "mutualFriends": 5
  },
  {
    "id": 214,
    "name": "Aria Cooper",
    "profilePic": "https://i.pravatar.cc/300?img=24",
    "mutualFriends": 7
  },
  {
    "id": 215,
    "name": "Gabriel Ward",
    "profilePic": "https://i.pravatar.cc/300?img=25",
    "mutualFriends": 2
  },
  {
    "id": 216,
    "name": "Grace Bell",
    "profilePic": "https://i.pravatar.cc/300?img=26",
    "mutualFriends": 8
  }
]

let currentPage = 0
let totalPages = Math.round(friendRequests.length / 8)


function renderFriendRequestCards(data){
  data.map((item) => {
    requestsCont.innerHTML += `
    <div class="friend-card">
      <img src="${item.profilePic}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.mutualFriends} mutual friends</p>
          <button class="confirm-btn">Confirm</button>
          <button class="delete-btn">Delete</button>
      </div>
    </div>
  `
})
}


function renderPeopleYoumayKnowCards(){
  peopleYouMayKnow.map((item) => {
  frndsSuggestionsCont.innerHTML += `
    <div class="friend-card">
      <img src="${item.profilePic}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
          <button class="confirm-btn">Add friend</button>
          <button class="delete-btn">Remove</button>
      </div>
    </div>
  `
})
}

renderPeopleYoumayKnowCards()
//pagination btns and btns cont
function showPagination(){
    paginationCont.innerHTML = `<button class="pgntn-btn" id="prevBtn" disabled>Prev</button>
        <p class="mt-2 h6"><span id="currentPage">${currentPage + 1}</span> of <span id="totalPages">${totalPages}</span></p>
        <button class="pgntn-btn" id="nxtBtn">Next</button>`
}
showPagination()

//pagination logic
function getSlicedArr() {
    let strtIndx = currentPage * 8
    let endIndx = strtIndx + 8
    let slicedArr = friendRequests.slice(strtIndx, endIndx)
    return slicedArr
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage -= 1;
        let slicedArr = getSlicedArr(currentPage);
        // console.log(slicedArr)
        requestsCont.innerHTML = "";
        renderFriendRequestCards(slicedArr);
        document.getElementById("currentPage").textContent = currentPage + 1;
        document.getElementById("nxtBtn").disabled = false;
        if (currentPage === 0) {
            document.getElementById("prevBtn").disabled = true;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
})

nxtBtn.addEventListener("click", () => {
    // console.log(currentPage, 'currentpage')
    if (currentPage < totalPages - 1) {
        currentPage += 1;
        let slicedArr = getSlicedArr(currentPage);
        requestsCont.innerHTML = "";
        renderFriendRequestCards(slicedArr);
        document.getElementById("currentPage").textContent = currentPage + 1;
        document.getElementById("prevBtn").disabled = false;
        if (currentPage >= totalPages - 1) {
            document.getElementById("nxtBtn").disabled = true;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
})

renderFriendRequestCards(friendRequests.slice(0,8))

//see-more-or see less
function updateView(){
    let cards = document.querySelectorAll("#frnds-suggestions-cont .friend-card");
    cards.forEach((item,index) => {
      console.log(item,'item')
        if((!expand) && (index >= itemstoShowCount)){
            item.classList.add("hidden")
        }else{
            item.classList.remove("hidden")
        }
    })
    if(expand){
        seeMoreBtn.innerHTML = `
            <h6 class="mt-1 me-2 h5">See less</h6>
            <div class="see-more-icon-cont"><i class="fa-solid fa-caret-up"></i></div>
        `

    }else{
        seeMoreBtn.innerHTML = `
            <h6 class="mt-1 me-2 h5">See more</h6>
            <div class="see-more-icon-cont"><i class="fa-solid fa-caret-down"></i></div>
        `
    }
}
updateView()
seeMoreBtn.addEventListener('click',() => { 
  expand = !expand
  updateView()
})
