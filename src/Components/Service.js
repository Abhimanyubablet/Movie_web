import React from 'react'

export default function Service() {
  return (
    <div>
        <section class="service">
        <div class="container">

          <div class="service-banner">
            <figure>
              <img src="images/service-banner.jpg" alt="HD 4k resolution! only $3.99"/>
            </figure>

            <a href="images/service-banner.jpg" download class="service-btn">
              <span>Download</span>

              <ion-icon name="download-outline"><i class="fa-solid fa-globe"></i></ion-icon>
            </a>
          </div>

          <div class="service-content">

            <p class="service-subtitle">Our Services</p>

            <h2 class="h2 service-title">Download Your Shows Watch Offline.</h2>

            <p class="service-text">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of
              passages of lorem
              Ipsum available, but the majority have suffered alteration in some injected humour.
            </p>

            <ul class="service-list">

              <li>
                <div class="service-card">

                  <div class="card-icon">
                    <ion-icon name="tv"><i class="fa-sharp fa-solid fa-file-export"></i></ion-icon>
                  </div>

                  <div class="card-content">
                    <h3 class="h3 card-title">Enjoy on Your TV.</h3>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="service-card">

                  <div class="card-icon">
                    <ion-icon name="videocam"><i class="fa-solid fa-video"></i></ion-icon>
                  </div>

                  <div class="card-content">
                    <h3 class="h3 card-title">Watch Everywhere.</h3>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>
    </div>
  )
}
