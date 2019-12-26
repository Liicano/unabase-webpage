<template>
  <div style="heigth: 100vh;">
    <div class="md-layout animationDesktop">
      <div
        class="md-layout-item md-size-100 md-small-hide md-medium-size-100 md-large-size-100 md-xlarge-size-90"
      >
        <v-layout class="text-left" style="margin-top: 5% !important;">
          <v-flex class="text-left">
            <v-layout>
              <v-flex class="md2 xs2 sm2 text-center" style="padding-top: 2.5%;">
                <center>
                  <div class="cilinder">
                    <div class="cilinder_ball"></div>

                    <div class="cilinder_2">
                      <div class="cilinder_ball_2"></div>
                    </div>

                    <div class="cilinder_3">
                      <div class="cilinder_ball_3"></div>
                    </div>
                  </div>
                </center>
              </v-flex>
              <v-flex class="md10 xs10 sm10 text-left">
                <span class="headline">¿Por qué</span>
                <br />
                <span class="headline font-weight-black">Smart Budget?</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout style="margin-top: -5%;">
          <v-flex>
            <v-container>
              <center v-for="i in rangeFor(30, 299)" :key="i">
                <img
                  v-if="current == i"
                  id="animationGift"
                  class="animationGift"
                  :src="getImgSrc(i)"
                  alt="animatedImg"
                  @load="loadedFunc(i)"
                />
              </center>
            </v-container>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-100 md-small-size-100 animationMobile">
        <v-container>
          <v-timeline align-top dense>
            <v-timeline-item color="pink" small class="timeLineItem_1">
              <v-layout class="pt-1">
                <v-flex>
                  <strong>
                    <b>Visualizacion de todas tus lineas de proyectos</b>
                  </strong>
                  <div class="caption">Todos tus gastos pasados y futuros en un solo lugar.</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="teal lighten-3" small class="timeLineItem_2">
              <v-layout class="pt-1">
                <v-flex>
                  <strong>
                    <b>Control de gastos y utilidades</b>
                  </strong>
                  <div class="caption mb-2">Maneja tu dinero categorizando tus transacciones.</div>
                  <v-avatar>
                    <v-img
                      src="https://image.freepik.com/vector-gratis/diseno-fondo-ahorros_1270-10.jpg"
                    ></v-img>
                  </v-avatar>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <v-timeline-item color="pink" small class="timeLineItem_3">
              <v-layout class="pt-1">
                <v-flex>
                  <strong>
                    <b>Crecimiento, futuro y proyección</b>
                  </strong>
                  <div class="caption mb-2">Crece y alcanza tus metas a futuro.</div>
                </v-flex>
              </v-layout>
            </v-timeline-item>

            <!-- <v-timeline-item>
              <img class="unaLogoTimeline" src="../../../../public/img/logo_solo.png" alt="unaLogo" />
            </v-timeline-item>-->
          </v-timeline>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { current: 30, loaded: true };
  },
  components: {},
  methods: {
    zeroPad(num) {
      if (num < 10) {
        return String(num).padStart(5, "0");
      } else if (num > 10 && num < 100) {
        return String(num).padStart(5, "0");
      } else {
        return String(num).padStart(5, "0");
      }
    },

    rangeFor(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },

    loadedFunc() {
      this.loaded = true;
    },

    getImgSrc(i) {
      this.setCurrent(i);

      if (this.loaded) {
        return require("../../../assets/animation_sequence/smartbudget_contexto_" +
          this.zeroPad(i) +
          ".png");
      } else {
        return require("../../../assets/animation_sequence/smartbudget_contexto_" +
          this.zeroPad(i - 1) +
          ".png");
      }
    },
    setCurrent(i) {
      let a = null;
      if (this.current == 185) {
        console.log("Fin de la animaciòn");
        clearTimeout(a);
      } else {
        a = setTimeout(() => {
          i < 299 ? (this.current = i + 1) : (this.current = 299);

          this.loaded = false;
        }, 50);
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
.animationGift {
  height: 100%;
  margin-top: 5%;
  background: transparent !important;
}
.animationMobile {
  display: none !important;
  height: 100vh !important;
}

@media (max-width: 992px) {
  .animationDesktop {
    display: none !important;
  }

  .animationMobile {
    display: block !important;
    height: 100vh !important;
  }

  .timeLineItem_1 {
    margin-top: 25% !important;
    -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .timeLineItem_2 {
    margin-top: 25% !important;
    -webkit-animation: slide-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .timeLineItem_3 {
    margin-top: 25% !important;
    -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .theme--light.v-timeline:before {
    background: #34cc02;
    width: 15px;
    border-radius: 20px;
    height: 90vh !important;
    -webkit-animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .theme--light.v-timeline .v-timeline-item__dot {
    margin-left: 1.5%;
  }

  .v-timeline-item__dot--small .v-timeline-item__inner-dot {
    background: #f9bd00 !important;
    -webkit-animation: scale-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: scale-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .unaLogoTimeline {
    margin-top: -1% !important;
    width: 50px !important;
    height: 50px !important;
    margin-left: -63px !important;
    -webkit-animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
}

/* ANIMACIONES DEL TIMELINE MOBILE */

.slide-in-top {
  -webkit-animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-to2 {
  -webkit-animation: slide-in-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-26 13:34:21
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.scale-in-center {
  -webkit-animation: scale-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-26 13:38:22
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-in-center
 * ----------------------------------------
 */
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.slide-in-left {
  -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-26 13:39:29
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

.cilinder {
  width: 50px;
  height: 13px;
  border-radius: 25%;
  background: #34cc02;
  transform: rotate(-45deg);
}

.cilinder_ball {
  width: 12px;
  height: 13px;
  border-radius: 50%;
  background: black;
  float: right;
}

.cilinder_2 {
  width: 37px;
  height: 13px;
  border-radius: 30%;
  background: #34cc02;
  transform: rotate(90deg);
  float: right;
  margin-right: -24px;
  margin-top: 12px;
}

.cilinder_ball_2 {
  width: 12px;
  height: 13px;
  border-radius: 50%;
  background: black;
  float: left;
}

.cilinder_3 {
  margin-right: -63px;
  margin-top: 25px;
  width: 50px;
  height: 13px;
  border-radius: 30%;
  background: #34cc02;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  float: right;
}

.cilinder_ball_3 {
  width: 12px;
  height: 13px;
  border-radius: 50%;
  background: black;
  float: right;
}
</style>
