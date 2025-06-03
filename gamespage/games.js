let gameCards = document.querySelector(".game-cards")
let categoryFilter = document.getElementById("categoryFilter");


const gamesData = [
  
  {
    id: 1,
    title: "Candy Crush Saga",
    category: "match",
    players: "100M+",
    rating: 4.5,
    imageUrl: "https://www.gameart2d.com/uploads/3/0/9/1/30917885/preview1_13.jpg"
    
  },
  {
    id: 2,
    title: "Wild Life",
    category: "design",
    players: "50M+",
    rating: 4.2,
    imageUrl: "https://www.gameart2d.com/uploads/3/0/9/1/30917885/wild-life-bundle-1.png"
  },
  {
    id: 3,
    title: "Dragon City",
    category: "adventure",
    players: "80M+",
    rating: 4.3,
    imageUrl: "https://th.bing.com/th/id/OIP.WVEpVVeR7md3hsQIb-DKOwHaDa?w=270&h=161&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    
  },
  {
    id: 4,
    title: "Asphalt 9: Legends",
    category: "racing",
    players: "30M+",
    rating: 4.6,
    imageUrl: "https://th.bing.com/th/id/OIP.CgVah_KT7uoyv3EZC4_k1QAAAA?w=250&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    id: 5,
    title: "Words with Friends",
    category: "board",
    players: "25M+",
    rating: 4.4,
    imageUrl: "https://th.bing.com/th/id/OIP.eSSswYaioVH88He3UdlRAwAAAA?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    
  },
  {
    id: 6,
    title: "Board Game",
    category: "design",
    players: "15M+",
    rating: 4.1,
    imageUrl: "../images/games/boardgame.jpg",
  },
  {
    id: 7,
    title: "Harry Potter",
    category: "match",
    players: "20M+",
    rating: 4.3,
    imageUrl: "https://th.bing.com/th/id/OIP.mfGctQXA-K7Z4FgZoAhFYgHaFE?w=236&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    
  },
  {
    id: 8,
    title: "Hill Truck",
    category: "adventure",
    players: "45M+",
    rating: 4.2,
    imageUrl: "../images/games/hill truck.jpg",
  },
  {
    id: 9,
    title: "XOX",
    category: "board",
    players: "500M+",
    rating: 4.7,
    imageUrl: "../images/games/xox.png",
  },
  {
    id: 25,
    title: "Bubble Shooter",
    category: "match",
    players: "100M+",
    rating: 4.5,
    imageUrl: "../images/games/bubbleshooter.jpg"
    
  },
  {
    id: 10,
    title: "Crazy Racing",
    category: "racing",
    players: "35M+",
    rating: 4.0,
    imageUrl: "../images/games/dragrace.jpg",
  },
  {
    id: 3,
    title: "Dragon City",
    category: "adventure",
    players: "80M+",
    rating: 4.3,
    imageUrl: "../images/games/secretinvestigation.jpg",
  },
  {
    id: 8,
    title: "Angry Birds Friends",
    category: "adventure",
    players: "45M+",
    rating: 4.2,
    imageUrl: "https://ts3.mm.bing.net/th?id=OIP.UGjBvKeDiY6muC4ltsb5eAHaFk&pid=15.1",
  },
  {
    id: 11,
    title: "Pirate Kings",
    category: "adventure",
    players: "60M+",
    rating: 4.1,
    imageUrl: "https://th.bing.com/th/id/OIP.3Nz-wofAcLoJRu-5kEqBQwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    
  },
  {
    id: 4,
    title: "Asphalt 9: Legends",
    category: "racing",
    players: "30M+",
    rating: 4.6,
    imageUrl: "../images/games/neon racer.jpg",
  },
  {
    id: 12,
    title: "CSR Racing 2",
    category: "racing",
    players: "25M+",
    rating: 4.5,
    imageUrl: "../images/games/rushrace.jpg",
    
  },
  {
    id: 5,
    title: "Words with Friends",
    category: "board",
    players: "25M+",
    rating: 4.4,
    imageUrl: "https://th.bing.com/th/id/OIP.6Wlgi5vz613LZzvm_pK9dgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    
  },
  {
    id: 9,
    title: "Super Bowling",
    category: "sports",
    players: "500M+",
    rating: 4.7,
    imageUrl: "../images/games/superbowling.jpg",
  },
  {
    id: 9,
    title: "Cricket",
    category: "sports",
    players: "500M+",
    rating: 4.7,
    imageUrl: "../images/games/cricket.jpg",
  },
  {
    id: 9,
    title: "Carams",
    category: "board",
    players: "500M+",
    rating: 4.7,
    imageUrl: "../images/games/carams.jpg",
  },
  {
    id: 13,
    title: "Ludo King",
    category: "board",
    players: "400M+",
    rating: 4.3,
    imageUrl: "../images/games/ludo.png",
  },
  {
    id: 2,
    title: "FarmVille 3",
    category: "design",
    players: "50M+",
    rating: 4.2,
    imageUrl: "../images/games/puzzlezoy.jpg",
    
  },
  
  {
    id: 10,
    title: "SimCity BuildIt",
    category: "design",
    players: "35M+",
    rating: 4.0,
    imageUrl: "https://th.bing.com/th/id/OIP.Mrb01odS3To8kPcBwaNv9wHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 1,
    title: "Candy Crush Saga",
    category: "match",
    players: "100M+",
    rating: 4.5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBEQzH8pSBpSXNh_Fuj_KLXPQdMroGMdYYw&s",
  },
  {
    id: 7,
    title: "Harry Potter",
    category: "match",
    players: "20M+",
    rating: 4.3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPK4Iw1H58nQ8BMnW-dnAvtb-Sq6xW3WgNA&s",
  },
  {
    id: 14,
    title: "Homescapes",
    category: "match",
    players: "75M+",
    rating: 4.4,
    imageUrl: "https://ts2.mm.bing.net/th?id=OIP.vMNnwg1cOIbujF48PxadwAHaDW&pid=15.1",
  }
]

function renderGamesData(games) {
  gameCards.innerHTML = ""
  games.map((item) => {
    gameCards.innerHTML += `
      <div class="card" style="background-image:url('${item.imageUrl}')">
        <div class="text-content">
            <h5>${item.title}</h5>
            <p>${item.players} Players</p>
        </div>
  </div>
    ` 
  })
}
renderGamesData(gamesData)

// Filter on select change
categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  gamesData.forEach((item) => console.log(item.category))

  if (selectedCategory === "Allgames") {
    renderGamesData(gamesData);
  } else {
    const filteredGames = gamesData.filter(game => (game.category).toLowerCase() === selectedCategory.toLowerCase());
    renderGamesData(filteredGames);
  }
});