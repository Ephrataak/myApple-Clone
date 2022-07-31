import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "../../src/commonResource/css/youtube.css" 

function YoutubeVideos() {
    const[videos,setVideos]=useState([]);
useEffect(()=>{
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA_J7YB4LvsXAItzTeM0NWZTpxjw7TlKKE&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
        .then((res) => res.json())
   
      .then((data) => {setVideos(data.items);});
}, []);
    
         

    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">
                Latest Videos <br />
                <br />
              </div>
              <div className="container-fluid">
                <div className="row">
                  {videos.map((singleVideo, i) => {
                    let vidId = singleVideo.id.videoId;
                    let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                    let videoWrapper = (
                      <div key={i} className="col-sm-12 col-md-6">
                        <div className="singleVideoWrapper">
                          <div className="videoThumbnail">
                            <a href={vidLink} target="_blank">
                              <img
                                src={singleVideo.snippet.thumbnails.high.url}
                              />
                            </a>
                          </div>
                          <div className="videoInfoWrapper">
                            <div className="videoTitle">
                              <a href={vidLink} target="_blank">
                                {singleVideo.snippet.title}
                              </a>
                            </div>
                            <div className="videoDescription">
                              {singleVideo.snippet.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                    return videoWrapper;
                  })}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default YoutubeVideos;