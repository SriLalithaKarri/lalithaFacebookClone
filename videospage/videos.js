const videosData = [
    {
        title: 'Big Buck Bunny',
        uploaderImg: 'https://placehold.co/40x40/FF5733/ffffff?text=BB',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        uploader: 'Open Movie Project',
        views: '5.3M views',
        time: '1 week ago'
    },
    {
        title: 'Sintel',
        uploaderImg: 'https://placehold.co/40x40/33FF57/ffffff?text=SL',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        uploader: 'Blender Foundation',
        views: '3.1M views',
        time: '3 days ago'
    },
    {
        title: 'Tears of Steel',
        uploaderImg: 'https://placehold.co/40x40/3357FF/ffffff?text=TS',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        uploader: 'Blender Institute',
        views: '2.8M views',
        time: '5 days ago'
    },
    {
        title: 'Small Test Video',
        uploaderImg: 'https://placehold.co/40x40/FF33A1/ffffff?text=ST',
        videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
        uploader: 'Test Videos Inc.',
        views: '89K views',
        time: '1 month ago'
    },
    {
        title: 'For Bigger Blazes',
        uploaderImg: 'https://placehold.co/40x40/A133FF/ffffff?text=FB',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        uploader: 'Adverts Channel',
        views: '1.5M views',
        time: '2 weeks ago'
    },
    {
        title: 'For Bigger Escape',
        uploaderImg: 'https://placehold.co/40x40/33FFA1/ffffff?text=FE',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscape.mp4',
        uploader: 'Travel Vlogs',
        views: '950K views',
        time: '4 days ago'
    },
    {
        title: 'For Bigger Fun',
        uploaderImg: 'https://placehold.co/40x40/FF8833/ffffff?text=FF',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        uploader: 'Comedy Central',
        views: '2.1M views',
        time: '6 days ago'
    },
    {
        title: 'For Bigger Joyrides',
        uploaderImg: 'https://placehold.co/40x40/8833FF/ffffff?text=FJ',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        uploader: 'Car Enthusiast',
        views: '780K views',
        time: '1 month ago'
    },
    {
        title: 'For Bigger Meltdowns',
        uploaderImg: 'https://placehold.co/40x40/33FF88/ffffff?text=FM',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        uploader: 'Drama Series',
        views: '1.9M views',
        time: '9 days ago'
    },
    {
        title: 'Subaru Outback On Street And Dirt',
        uploaderImg: 'https://placehold.co/40x40/FF3333/ffffff?text=SO',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        uploader: 'Auto Reviews',
        views: '620K views',
        time: '2 weeks ago'
    },
    {
        title: 'Volkswagen GTI Review',
        uploaderImg: 'https://placehold.co/40x40/3333FF/ffffff?text=VW',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        uploader: 'Car Critics',
        views: '1.1M views',
        time: '3 weeks ago'
    }
];

const container = document.getElementById("videos-cont");

videosData.forEach(video => {
  container.innerHTML += `
    <div class="fb-video-card">
      <div class="video-header">
        <img src="${video.uploaderImg}" class="uploader-img" alt="Uploader" />
        <div>
          <h6 class="uploader-name">${video.uploader}</h6>
          <div>
            <span>${video.views}.</span>
            <small class="upload-time">${video.time} · <i class="fa-solid fa-globe"></i></small>
          </div>
        </div>
      </div>

      <p class="video-title">${video.title}</p>

      <div class="video-thumbnail">
        <video controls width="100%" class="video-element">
          <source src="${video.videoUrl}" type="video/mp4">
        </video>
      </div>
    </div>
  `;
});

