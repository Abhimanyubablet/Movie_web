import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
export default function TvDetail() {
    const[tvdetails,setTvdetails] = useState([])
    var {id} = useParams();
    console.log("id",id)

    const getTvDetail = async () => {
      var response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=ef15b76e12a7817de222263fb254e12e&language=en-US`
      )

      var res = await response.json()
      console.log("res",res)
      setTvdetails(res)
  }

  useEffect(() => {
    getTvDetail()
},[])
  return (
    <div>
    <Navbar/>
    <main>
       <article>
      <section style={{background:`url(https://image.tmdb.org/t/p/original${tvdetails.poster_path})`,height:"800px" ,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className="movie-detail" className="movie-detail" >
        <div className="container">

          <figure className="movie-detail-banner">

            <img style={{width:"100%",height:"400px"}} src={`https://image.tmdb.org/t/p/original${tvdetails.poster_path}`} alt="Free guy movie poster"/>

            <button className="play-btn">
              <ion-icon name="play-circle-outline"></ion-icon>
            </button>

          </figure>

          <div className="movie-detail-content">

            <p className="detail-subtitle">New Episodes</p>
            <h1 className="h1 detail-title">
           {tvdetails.name}            </h1>

            <div className="meta-wrapper">

              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 13</div>

                <div className="badge badge-outline">HD</div>
              </div>

              <div className="ganre-wrapper">
                {
                  tvdetails.genres?.map((item)=>(
                    <a href="#"> {item.name} </a>
                  ))
                }
              </div>

              <div className="date-time">

                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time datetime="2021"> {tvdetails.release_date} </time>
                </div>

                <div>
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT115M"> {tvdetails.runtime} </time>
                </div>

              </div>

            </div>

            <p className="storyline">
            {tvdetails.overview}
            </p>
            
            <div className="details-actions">

              <button className="share">
                <ion-icon name="share-social"></ion-icon>

                <span>Share</span>
              </button>

              <div className="title-wrapper">
                <p className="title">Prime Video</p>

                <p className="text">Streaming Channels</p>
              </div>

              <button className="btn btn-primary">
                <ion-icon name="play"></ion-icon>

                <span>Watch Now</span>
              </button>

            </div>

            <a href="./assets/images/movie-4.png" download className="download-btn">
              <span>Download</span>

              <ion-icon name="download-outline"></ion-icon>
            </a>

          </div>

        </div>
      </section>

      <section class="tv-series">
        <div class="container">

          <p class="section-subtitle">Best TV Series</p>

          <h2 class="h2 section-title">World Best TV Series</h2>

          <ul class="movies-list">

            <li>
              <div class="movie-card">

                <a href="./movie-details.html">
                  <figure class="card-banner">
                    <img src="/images/series-1.png" alt="Moon Knight movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="/movie-details.html">
                    <h3 class="card-title">Moon Knight</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT47M">47 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.6</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="/movie-details.html">
                  <figure class="card-banner">
                    <img src="/images/series-2.png" alt="Halo movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 class="card-title">Halo</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT59M">59 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.8</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="./movie-details.html">
                  <figure class="card-banner">
                    <img src="/images/series-3.png" alt="Vikings: Valhalla movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 class="card-title">Vikings: Valhalla</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT51M">51 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="./movie-details.html">
                  <figure class="card-banner">
                    <img src="/images/series-4.png" alt="Money Heist movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 class="card-title">Money Heist</h3>
                  </a>

                  <time datetime="2017">2017</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">4K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT70M">70 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>



      

      

    </article>
  </main>
    </div>
  )
}
