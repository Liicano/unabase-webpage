<template>
  <div style="heigth: 100vh;">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <br />
        <br />
        <div class="md-layout switchClientes">
          <div class="md-layout-item md-size-100">
            <div class="checkForm pull-left fade-in-fwd">
              <div class="checkCircle slide-in-left"></div>
            </div>

            <p class="display-1 pull-left fade-in-fwd" style="margin-top: 15px; margin-left: 10px;">
              <center>
                <b>{{ text.title }}</b>
              </center>
            </p>
          </div>
        </div>
        <br />
        <br />

        <div class="md-layout" style=" opacity: 1 !important;">
          <div
            class="md-layout-item md-size-30 md-medium-size-30 md-large-size-30 md-xlarge-size-40 mapImg"
            style="z-index: 10000 !important; background: white !important; opacity: 1 !important;"
          >
            <center style="z-index: 1000 !important; opacity: 1 !important;">
              <img class="fade-in-fwd" src="../../../../../public/img/mapa.png" alt="map" />
            </center>
          </div>
          <div
            class="md-layout-item md-size-20 md-medium-size-20 md-large-size-20 md-xlarge-size-20 clientsCount"
            style="z-index: 0 !important;"
          >
            <div style="position: absolute !important;">
              <center>
                <br />
                <br />
                <div class="md-layout">
                  <div class="md-layout-item md-size-100">
                    <center class="slide-in-left2">
                      <span class="title titleColor font-weight-black">
                        <b>{{ text.mapCount[0].text }}</b>
                      </span>
                      <br />
                      <span class="display-3 font-weight-black numbersColor">
                        <animated-number :value="parseInt(text.mapCount[0].number)"></animated-number>
                      </span>
                    </center>
                  </div>
                </div>
                <br />
                <div class="md-layout">
                  <div class="md-layout-item md-size-100">
                    <center class="slide-in-left3">
                      <span class="title titleColor font-weight-black">
                        <b>{{ text.mapCount[1].text }}</b>
                      </span>
                      <br />
                      <span class="display-3 font-weight-black numbersColor">
                        <animated-number :value="parseInt(text.mapCount[1].number)"></animated-number>
                      </span>
                    </center>
                  </div>
                </div>
                <br />
                <div class="md-layout">
                  <div class="md-layout-item md-size-100">
                    <center class="slide-in-left4">
                      <span class="title titleColor font-weight-black">
                        <b>{{ text.mapCount[2].text }}</b>
                      </span>
                      <br />
                      <span class="display-3 font-weight-black numbersColor">
                        <animated-number :value="parseInt(text.mapCount[2].number)"></animated-number>
                      </span>
                    </center>
                  </div>
                </div>
              </center>
            </div>
          </div>

          <div
            class="md-layout-item md-size-40 md-small-size-100 md-medium-size-40 md-large-size-40 md-xlarge-size-40 fade-in-fwd commetsCard"
            style="margin-top: 4%"
          >
            <center>
              <span class="headline font-weight-thin" style="color:black;">
                {{
                text.carrousel.title
                }}
              </span>
              <br />
              <span class="display-1 font-weight-light" style="color:black;">
                {{
                text.carrousel.body
                }}
              </span>

              <br />
              <div class="commentsCarousel">
                <v-carousel
                  height="250"
                  width="344"
                  hide-delimiter-background
                  show-arrows-on-hover
                  :interval="6000"
                >
                  <v-carousel-item v-for="(slide, i) in text.carrousel.items" :key="i">
                    <v-sheet color="white" height="100%">
                      <br />
                      <v-layout>
                        <v-flex>
                          <span>
                            <div class="subtitle-1 black--text font-italic font-weight-light">
                              <b>"{{ slide.text }}"</b>
                            </div>
                          </span>

                          <br />
                          <div class="subtitle-1 black--text font-weight-black">
                            <b>{{ slide.autor }}</b>
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </div>
            </center>
          </div>
        </div>

        <div class="md-layout">
          <div
            class="md-layout-item md-size-100 md-medium-size-100 md-large-size-100 md-xlarge-size-100 slide-in-left3 usersCarousel"
          >
            <v-carousel
              height="100%"
              width="100%"
              :hide-delimiters="true"
              :hide-delimiter-background="true"
              :interval="4500"
              class="userCarouselClass"
            >
              <v-carousel-item>
                <v-sheet color="white" height="100%">
                  <!-- DIV (PRIMEROS 10) -->
                  <div>
                    <v-layout>
                      <v-flex>
                        <center>
                          <img
                            src="../../../../../public/img/logos/fe-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/ficv-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/filmcompany-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/flamingo-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/forza-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/fueria-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/glovox-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/goodsheep-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/gyt-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/ig-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                        </center>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-sheet>
              </v-carousel-item>

              <v-carousel-item>
                <v-sheet color="white" height="100%">
                  <!-- DIV (SEGUNDOS 10) -->
                  <div>
                    <v-layout>
                      <v-flex>
                        <center>
                          <img
                            src="../../../../../public/img/logos/inbrax-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/jaquemate-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/lacasa-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/lm-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/ludika.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/madocm-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/micro-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/nomada-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/ole-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/nitro-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                        </center>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-sheet>
              </v-carousel-item>

              <v-carousel-item>
                <v-sheet color="white" height="100%">
                  <!-- DIV (SEGUNDOS 10) -->
                  <div>
                    <v-layout>
                      <v-flex>
                        <center>
                          <img
                            src="../../../../../public/img/logos/otrofoco-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/play-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/plaza-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/puerto-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/quijote-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/root-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/sientecinco-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/siete-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/street-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/studio-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                        </center>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-sheet>
              </v-carousel-item>

              <v-carousel-item>
                <v-sheet color="white" height="100%">
                  <!-- DIV (TERCEROS 10) -->
                  <div>
                    <v-layout>
                      <v-flex>
                        <center>
                          <img
                            src="../../../../../public/img/logos/sud.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/tkl-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/tomate.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/toro-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/triciclofilms-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../../public/img/logos/volta-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/wake-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../../public/img/logos/welove-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                        </center>
                      </v-flex>
                    </v-layout>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AnimatedNumber } from "@/components";
export default {
  props: {
    text: Object
  },

  data() {
    return {
      comments: ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"]
    };
  },
  components: {
    AnimatedNumber
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss">
.checkForm {
  width: 250px;
  height: 80px;
  background: #34cc03;
  border-radius: 55px;
}

.checkCircle {
  width: 70px;
  height: 70px;
  margin-top: 5px;
  margin-left: 175px;
  background: white;
  border-radius: 55px;
}

.numbersColor {
  color: #f9bd00;
}

.titleColor {
  color: black;
}

.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
  color: grey;
}
.v-carousel__controls > .v-item-group {
  background: white;
}
.v-carousel__controls {
  background: white;
  top: 0 !important;
}

.theme--dark.v-sheet {
  border-color: white !important;
  box-shadow: none !important;
  margin-top: 10%;
}

.v-sheet {
  border-color: white !important;
  box-shadow: none !important;
}
.v-carousel {
  box-shadow: none !important;
}

.v-carousel__prev {
  display: none;
}

.v-carousel__next {
  display: none;
}

.userCarouselClass {
  .v-carousel__prev {
    display: block !important;
    margin-top: 5%;
  }

  .v-carousel__next {
    display: block !important;
    margin-top: 5%;
  }
}

.imgClass {
  width: 80px;
  height: 80px;
  -webkit-filter: grayscale(95%); /* Safari 6.0 - 9.0 */
  filter: grayscale(95%);
}

/* ANIMACION DE ENTRADA DE SWITCH (BARRA) */

.fade-in-fwd {
  -webkit-animation: fade-in-fwd 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-fwd 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-25 18:17:38
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-fwd
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

/* ANIMACION DE ENTRADA DE SWITCH (BOLITA) */

.slide-in-left {
  -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left2 {
  -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left3 {
  -webkit-animation: slide-in-left 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left4 {
  -webkit-animation: slide-in-left 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left5 {
  -webkit-animation: slide-in-left 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-25 18:19:23
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
    display: none !important;
  }

  30% {
    -webkit-transform: translateX(-700px);
    transform: translateX(-700px);
    opacity: 0;
    display: none !important;
  }

  50% {
    -webkit-transform: translateX(-500px);
    transform: translateX(-500px);
    opacity: 0;
    display: none !important;
  }

  70% {
    -webkit-transform: translateX(-300px);
    transform: translateX(-300px);
    opacity: 0;
    display: none !important;
  }

  90% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
    display: none !important;
  }

  30% {
    -webkit-transform: translateX(-700px);
    transform: translateX(-700px);
    opacity: 0;
    display: none !important;
  }

  50% {
    -webkit-transform: translateX(-500px);
    transform: translateX(-500px);
    opacity: 0;
    display: none !important;
  }

  70% {
    -webkit-transform: translateX(-300px);
    transform: translateX(-300px);
    opacity: 0;
    display: none !important;
  }

  90% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.usersCarousel {
  margin-top: -7%;
}

@media (max-width: 992px) {
  .switchClientes {
    display: none !important;
  }
  .mapImg {
    display: none !important;
  }

  .clientsCount {
    display: none !important;
  }

  .usersCarousel {
    .v-carousel {
      height: 40% !important;
    }
    margin-top: 0 !important;
  }
}

img {
  opacity: 1 !important;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}
</style>
