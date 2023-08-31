


url =
  "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json";
async function gallery() {
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // fetch no of fans from api
      const fans = document.getElementById("Fans");
      const fansval = document.createElement("p");
      fansval.textContent = data[0].views;
      fansval.classList.add("text-muted");
      fans.append(fansval);
      //heart values from api
      const heart = document.getElementById("Hearts");
      const heartval = document.createElement("p");
      heartval.textContent = data[0].views;
      heartval.classList.add("text-muted");
      heart.append(heartval);
      //fetch no of followers
      const following = document.getElementById("following");
      const followingvalue = document.createElement("p");
      followingvalue.textContent = data[0].subscriber;

      following.append(followingvalue);
      //for video.
      let videos = "";
      videos = data.map((values) => {
        const videocontainer = document.getElementById("gallery");
        const video = document.createElement("video");

        video.controls = true;
        video.src = values.videoUrl;
        videocontainer.append(video);

        // Append the heart icon using Font Awesome
        const likeIcon = document.createElement("div");
        likeIcon.classList.add("heart-icon");
        likeIcon.innerHTML = '<i class="fa fa-heart-o" aria-hidden="true"></i>';
        videocontainer.appendChild(likeIcon);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    const video = document.getElementById('video');
    const toggleButton = document.getElementById('toggleControls');
    const videoContainer = document.querySelector('.video-container');

    toggleButton.addEventListener('click', function() {
        videoContainer.classList.toggle('show-controls');
    });
}
