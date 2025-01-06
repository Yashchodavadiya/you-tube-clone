import React from "react";
import "./VideoGrid.css";

const videos = [
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=6c1c5d22222e3e367078e071f5d01097b5f460bc-10358358-images-thumbs&n=13",
    title: "Dwarikadhish Ne Khamma ",

    channel: "RAJESH AHIR",
    views: "1M views",
    time: "2 days ago",
    // songname: "Dwarikadhish Ne Khamma",
    // showname: "Sabhiben Ahir | ‪@RAJESH_AHIR",
    url: "https://www.youtube.com/watch?v=gTastlkWMFs&pp=ygUQa2hhbW1hIHJlIGtoYW1tYQ%3D%3D",
  },
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=80f625577cf099e446cc96cc9fb490b5d6167d12-4590869-images-thumbs&n=13",
    title: " Devara (2024) New South Movie Hindi Dubbed 2024 ",
    channel: "Kunal Ganjawala ",
    views: "10M views",
    time: "1 month ago",
    url: "https://www.youtube.com/watch?v=ub93gIMvEzY&pp=ygUHZGV2YXJhIA%3D%3D",
  },
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=cb46ab3e2a7c23fe2a15d605546d1401597024da-10848716-images-thumbs&n=13",
    title: "Daya के हाथ का Aamras खाकर Sundar हुआ खुश",
    channel: "Live Comedy",
    views: "50k views",
    time: "2 year ago",
    url: "https://www.youtube.com/watch?v=av2eto3PAdw&pp=ygVLRGF5YSDgpJXgpYcg4KS54KS-4KSlIOCkleCkviBBYW1yYXMg4KSW4KS-4KSV4KSwIFN1bmRhciDgpLngpYHgpIYg4KSW4KWB4KS2",
    // showname: "Taarak Mehta Ka Ooltah Chashmah",
  },
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=70af0c5c3c1e2679bfc1f5974195a6337197b834-10114558-images-thumbs&n=13",
    title: "Lecture 1 : Flowchart & Pseudocode + Installation",
    channel: "Apna Collage",
    views: "1M views",
    time: "2 days ago",
    // showname: "DSA Series by Shradha Ma'am ",
    url: "https://www.youtube.com/watch?v=VTLCoHnyACE&list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&index=1&pp=iAQB",
  },
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=01d75d75dd02929509d949e81a94cd9d7084d023-4569313-images-thumbs&n=13",
    title: "How to Build & Deploy a Full Stack Chat Application Using MERN",
    channel: " Learn Coding",
    views: "54k views",
    time: " 7 months  ago",
    url: "https://www.youtube.com/watch?v=HONob0RSJ6Y&t=11399s",
    // showname: "JWT, Socket IO, Zustand "
  },
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=1d2a04285838237c9907ee0f7492d227b384befd0948f748-11741862-images-thumbs&n=13",
    title: "MS Dhoni 62 (38) vs Australia 7th Odi 2013",
    channel: "CricSpectaculars",
    views: "1.5M views",
    time: "9 Month ago",
    url: "https://www.youtube.com/watch?v=SNou0ZfTH-I&pp=ygUIbXMgZGhvbmk%3D",
    // showname: "Bengaluru (Ball By Ball)"
  },
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=ac01c7e3847299c70ebc9d33b18c8a599ab3bf51-8185142-images-thumbs&n=13",
    title: "Arijit Singh Mashup 2024 | Non Stop Mashup |",
    channel: "Mood Fresh Song",
    views: "833k views",
    time: "7 Month ago",
    url: "https://www.youtube.com/watch?v=jVpmW4b907A",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/HQymt-PINyw/maxresdefault.jpg",
    title: "Uri : The Surgical Strike - Hindi Patriotic Full Movie ",
    channel: "Zee Studios",
    views: "15M views",
    time: "4 month ago",
    url: "https://www.youtube.com/watch?v=j903ASEDWxc",
  },
  {
    thumbnail:
      "https://avatars.mds.yandex.net/i?id=2a00000194167a819b4ef58502d6ac93ec8f-1702569-fast-images&n=13",
    title: "Amazing Video Title",
    channel: "Hindu In Life",
    views: "17k views",
    time: "2 Hour ago",
    url: "https://www.youtube.com/watch?v=RPh3Py7gKsQ&pp=ygUbdGVzdCBtYXRjaCBoaWdobGlnaHRzIHRvZGF5",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/ntLJmHOJ0ME/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyFQ0oe6H-Ti29BAon05OD2dTC3Q",
    title: "Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java",
    channel: "Code WithHarry",
    views: "9.4M views",
    time: "4 years ago",
    url: "https://www.youtube.com/watch?v=zIdg7hkqNE0&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",
  },
  // {
  //   thumbnail:
  //     "https://avatars.mds.yandex.net/i?id=ea2552b2dbee1b25c0dc20cab80b4604e5684af9-5690699-images-thumbs&n=13",
  //   title: "Amazing Video Title",
  //   channel: "Channel Name",
  //   views: "1M views",
  //   time: "2 days ago",
  //   url: "https://example.com/amazing-video-title",
  // },
  // {
  //   thumbnail:
  //     "https://avatars.mds.yandex.net/i?id=ea2552b2dbee1b25c0dc20cab80b4604e5684af9-5690699-images-thumbs&n=13",
  //   title: "Amazing Video Title",
  //   channel: "Channel Name",
  //   views: "1M views",
  //   time: "2 days ago",
  //   url: "https://example.com/amazing-video-title",
  // },
];

function VideoGrid() {
  return (
    <div className="main video-grid">
      {videos.map((video, index) => (
        <div className="youtube-card" key={index}>
          <div className="youtube-card-thumbnail">
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="thumbnail-image"
              />
            </a>
          </div>
          <div className="youtube-card-content">
            <h3 className="video-title">{video.title}</h3>
            <p className="channel-name">{video.channel}</p>
            <div className="video-stats">
              <span className="views">{video.views}</span>
              <span className="time">{video.time}</span><br></br>
              <span className="artist">{video.artist}</span>
            </div>
            <br></br>
            <span className="showname">{video.showname}</span>
            <span className="songname">{video.songname}</span>
            <br></br>

          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoGrid;
