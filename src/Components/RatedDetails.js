import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

export default function RatedDetails() {
  const [topDetails, setTopDetails] = useState([]);
  var { id } = useParams();

  console.log("id", id);
  var { Type } = useParams();
  console.log("id", id, Type);
  const getRate = async () => {
    var response = await fetch(
      `https://api.themoviedb.org/3/${
        Type === "movie" ? "movie" : "tv"
      }/${id}?api_key=ef15b76e12a7817de222263fb254e12e&language=en-US`
    );

    var res = await response.json();
    console.log("res", res);
    setTopDetails(res);
  };

  // console.log("new", moviedetails.production_companies[0].logo_path)

  useEffect(() => {
    getRate();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <article>
          <section
            style={{
              background: `url(https://image.tmdb.org/t/p/original${topDetails.poster_path})`,
              height: "800px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat !important",
              opacity: "0.3",
            }}
            className="movie-detail"
          >
            <div className="container">
              <figure className="movie-detail-banner">
                <img
                  style={{ width: "100%", height: "400px" }}
                  src={`https://image.tmdb.org/t/p/original${topDetails.backdrop_path}`}
                  alt="Free guy movie poster"
                />

                <button className="play-btn">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </button>
              </figure>

              <div className="movie-detail-content">
                <h1 className="h1 detail-title">
                  {Type.includes("movie") ? topDetails.title : topDetails.name}
                </h1>
                <div className="meta-wrapper">
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">PG 13</div>

                    <div className="badge badge-outline">HD</div>
                  </div>

                  <div className="ganre-wrapper">
                    {topDetails.genres?.map((item) => (
                      <a href="#"> {item.name} </a>
                    ))}
                  </div>

                  <div className="date-time">
                    <div>
                      <ion-icon name="calendar-outline"></ion-icon>

                      <time datetime="2021"> {topDetails.release_date} </time>
                    </div>

                    <div>
                      <ion-icon name="time-outline"></ion-icon>

                      <time datetime="PT115M"> {topDetails.runtime} </time>
                    </div>
                  </div>
                </div>

                <p className="storyline">{topDetails.overview}</p>
                <p className="detail-subtitle">
                  {" "}
                  Status:{topDetails.status} ,Popularity:{topDetails.popularity}{" "}
                </p>
                {/* {
                  moviedetails.production_companies?.map((item)=>(
                    <a href="#">Production company: {item.name} </a>

                  ))
                } */}
                {/* <p>Production company: </p>
                <img src={`https://image.tmdb.org/t/p/original${moviedetails.production_companies[0].logo_path}`} alt="hello" /> */}
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

                <a
                  href="./assets/images/movie-4.png"
                  download
                  className="download-btn"
                >
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
                    <figure class="card-banner">
                      <img
                        src="/images/series-1.png"
                        alt="Moon Knight movie poster"
                      />
                    </figure>

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
                    <figure class="card-banner">
                      <img src="/images/series-2.png" alt="Halo movie poster" />
                    </figure>

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
                    <figure class="card-banner">
                      <img
                        src="/images/series-3.png"
                        alt="Vikings: Valhalla movie poster"
                      />
                    </figure>

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
                    <figure class="card-banner">
                      <img
                        src="/images/series-4.png"
                        alt="Money Heist movie poster"
                      />
                    </figure>

                    <div class="title-wrapper">
                      <h3 class="card-title">Money Heist</h3>

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
      <Footer/>
    </>
  );
}
