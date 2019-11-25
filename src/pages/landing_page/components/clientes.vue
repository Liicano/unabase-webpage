<template>
  <div style="heigth: 100vh;">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <br />
        <br />
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <div class="checkForm pull-left fade-in-fwd">
              <div class="checkCircle slide-in-left"></div>
            </div>

            <p class="display-1 pull-left fade-in-fwd" style="margin-top: 15px; margin-left: 10px;">
              <center>
                <b>Clientes</b>
              </center>
            </p>
          </div>
        </div>
        <br />
        <br />
        <div class="md-layout">
          <div class="md-layout-item md-size-30 fade-in-fwd">
            <img src="../../../../public/img/mapa.png" alt="map" />
          </div>
          <div class="md-layout-item md-size-20 slide-in-left2">
            <br />
            <br />
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <center>
                  <span class="title titleColor font-weight-black">
                    <b>Países</b>
                  </span>
                  <br />
                  <span class="display-3 font-weight-black numbersColor">
                    <animated-number :value="4"></animated-number>
                  </span>
                </center>
              </div>
            </div>
            <br />
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <center>
                  <span class="title titleColor font-weight-black">
                    <b>Clientes</b>
                  </span>
                  <br />
                  <span class="display-3 font-weight-black numbersColor">
                    <animated-number :value="250"></animated-number>
                  </span>
                </center>
              </div>
            </div>
            <br />
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <center>
                  <span class="title titleColor font-weight-black">
                    <b>Usuarios</b>
                  </span>
                  <br />
                  <span class="display-3 font-weight-black numbersColor">
                    <animated-number :value="1250"></animated-number>
                  </span>
                </center>
              </div>
            </div>
          </div>

          <div class="md-layout-item md-size-50 fade-in-fwd" style="margin-top: 4%">
            <span
              class="headline font-weight-thin"
              style="color:black;"
            >Nuestros clientes nos definen</span>
            <br />
            <span
              class="display-1 font-weight-light"
              style="color:black;"
            >Somos el software de la industria creativa</span>

            <br />
            <div class="commentsCarousel">
              <v-carousel
                height="250"
                width="344"
                hide-delimiter-background
                show-arrows-on-hover
                :interval="2000"
              >
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet color="white" height="100%">
                    <br />
                    <v-layout>
                      <v-flex>
                        <span>
                          <div class="subtitle-1 black--text font-italic font-weight-light">
                            <b>"Unabase nos ha ayudado a generar mecanismos de normalización de precios y costos. Permitiendo modernizar y transparentar la comunicación comercial con nuestros clientes"</b>
                          </div>
                        </span>

                        <br />
                        <div class="subtitle-1 black--text font-weight-black">
                          <b>Andres Paucay - Shangri LA.</b>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </div>

        <div class="md-layout">
          <div class="md-layout-item md-size-100 slide-in-left3">
            <v-carousel
              height="165"
              width="344"
              :hide-delimiters="true"
              :hide-delimiter-background="true"
              :interval="2000"
              style="margin-top: -9%;"
            >
              <v-carousel-item>
                <v-sheet color="white" height="100%">
                  <!-- DIV (PRIMEROS 10) -->
                  <div>
                    <v-layout>
                      <v-flex>
                        <center>
                          <img
                            src="../../../../public/img/logos/fe-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/ficv-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/filmcompany-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/flamingo-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/forza-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/fueria-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/glovox-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/goodsheep-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/gyt-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/ig-min.jpg"
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
                            src="../../../../public/img/logos/inbrax-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/jaquemate-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/lacasa-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/lm-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/ludika.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/madocm-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/micro-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/nomada-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/ole-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/nitro-min.jpg"
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
                            src="../../../../public/img/logos/otrofoco-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/play-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/plaza-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/puerto-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/quijote-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/root-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/sientecinco-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/siete-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/street-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/studio-min.jpg"
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
                            src="../../../../public/img/logos/sud.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/tkl-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/tomate.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/toro-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/triciclofilms-min.jpg"
                            class="grey lighten-2 imgClass"
                          />
                          <img
                            src="../../../../public/img/logos/volta-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/wake-min.jpg"
                            class="grey lighten-2 imgClass"
                          />

                          <img
                            src="../../../../public/img/logos/welove-min.jpg"
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
  data() {
    return {
      slides: ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"]
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


<style>
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
  -webkit-animation: slide-in-left 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left2 {
  -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left3 {
  -webkit-animation: slide-in-left 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>