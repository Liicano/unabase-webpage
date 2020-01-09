<template>
  <div style="heigth: 100vh;">
    <v-container style="padding:0;">
      <div class="principalContainer md-layout" style="heigth: 100vh !important;">
        <div
          class="md-layout-item md-medium-size-50 md-small-size-100 md-large-size-45 md-xlarge-size-50 pull-right text-right"
        >
          <v-card
            class="mx-auto fade-in"
            max-width="844"
            style="position: fixed !important; bottom: 15% !important; left: 0 !important; right: 0 !important;"
          >
            <v-card-text style="z-index:1000 !important;">
              <span class="title text--primary">
                <b>{{text.title}}</b>
              </span>
              <br />
              <span class="subtitle-1 font-weight-light">
                <b>{{text.subheader}}</b>
              </span>

              <br />
              <br />
              <div class="subtitle-2 font-weight-light">{{text.text}}</div>
            </v-card-text>
            <v-card-actions style="z-index:1000 !important; margin-top: -3%;">
              <v-btn
                dark
                flat
                class="black--text font-weight-black subtitle-2"
                style="cursor:pointer;z-index:1000 !important;"
                tile
                @click="goToDemo()"
              >
                <span class="text-none">{{text.button.text}}</span>
                <v-icon center>{{text.button.icon}}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div
          class="md-layout-item md-medium-size-50 md-small-size-100 md-large-size-45 md-xlarge-size-50 pull-left"
          style="height: 100vh; padding: 0 !important;"
        >
          <div class="animatedContainer_mobile pull-left">
            <center>
              <v-container style="padding: 0 !important; margin:0 !important;">
                <!--Barra izquierda width menos de lo normal alado de la normal (verde)-->
                <div class="container7_mobile slide-in-top">
                  <div class="tape7_mobile"></div>
                </div>

                <!--Barra izquierda width normal alado de la super fina (amarilla)-->
                <div class="container6_mobile slide-in-top3">
                  <div class="tape6_mobile"></div>
                </div>

                <!--Barra izquierda super fina alado de la ancha-->
                <div class="container5_mobile slide-in-top">
                  <div class="tape5_mobile"></div>
                </div>

                <!--Barra izquierda ancha-->
                <div class="container4_mobile slide-in-top3">
                  <div class="tape4_mobile"></div>
                </div>

                <!--barra verde-->
                <div class="container1_mobile slide-in-top">
                  <div class="tape1_mobile"></div>
                  <!--bolita verde-->
                  <div class="container2_mobile">
                    <div class="tape2_mobile"></div>
                  </div>

                  <!-- CONTANEDOR DE LA V DE UNABASE -->
                  <div class="v-container-all">
                    <!-- v de unabase lado derecho-->
                    <div class="container-v_mobile slide-in-top">
                      <div class="tape-v_mobile"></div>
                    </div>

                    <!-- v de unabase lado izquierdo-->
                    <div class="container-v-i slide-in-top">
                      <div class="tape-v-i"></div>
                    </div>
                  </div>
                </div>

                <!--barra finita derecha-->
                <div class="container3_mobile slide-in-top2">
                  <div class="tape3_mobile"></div>
                </div>

                <!--Barra derecha segunda derecha-->
                <div class="container8_mobile slide-in-top">
                  <div class="tape8_mobile"></div>
                </div>

                <!--Barra derecha tercera derecha-->
                <div class="container9_mobile slide-in-top">
                  <div class="tape9_mobile"></div>
                </div>

                <!--Barra derecha cuarta derecha-->
                <div class="container10_mobile slide-in-top2">
                  <div class="tape10_mobile"></div>
                </div>
              </v-container>
            </center>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    text: Object
  },
  data() {
    return {};
  },

  components: {},
  methods: {
    goToDemo() {
      window.open("http://demo2017.unabase.cl/", "_blank");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
.principalContainer {
}

.animatedContainer_mobile {
  height: 100vh !important;
  width: 100% !important;
  padding-top: 10%;
  padding-left: 0;
  padding-right: 10%;
  position: fixed;
  top: -1%;
  right: 5;
  /* margin-top: -100%;
  margin-left: -10%; */
}
/* ================================ */
/* ENTRADA ANIMACION # 1 */
/* ================================= */
.fade-in {
  -webkit-animation: fade-in 3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-10-26 12:22:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* ANIMACIONES NUMERO 2  */

/* html {
  text-align: center;

  background: white;
} */

.animation2_container {
  /* position: relative;
  right: 25%; */
}

.container1_mobile {
  position: relative;
  top: -3%;
  bottom: 0;

  /* left: 58.6%; */
  /* right: 0; */
  width: 40px;
}

.container4_mobile {
  position: relative;
  top: 0;
  width: 60px;
  bottom: 0;
  /* left: 49%; */
  right: 0;
}

.container5_mobile {
  position: relative;
  top: 0;
  bottom: 0;
  /* left: 46.5%; */
  right: 0;
  width: 10px;
}

.tape5_mobile {
  margin: auto;
  height: 90px;
  width: 10px;
  opacity: 0.8;
  border-radius: 50px;
  background: red;
}

.container3_mobile {
  position: relative;
  /* top: 0;
  bottom: 0;
  left: 64.5%; */
  width: 25px;
  right: 0;
}

.container2_mobile {
  /* position: relative;
  margin-top: -100%; */
  position: absolute;
  margin-top: -100%;
  /* top: 0;
  bottom: 0; */
  /* left: 58.5%; */
  /* right: 0; */
  width: 40px;
}

.container6_mobile {
  position: relative;
  top: 0;
  bottom: 0;
  /* left: 40%; */
  right: 0;
  width: 40px;
}
.tape6_mobile {
  margin: auto;
  height: 120px;
  width: 40px;
  opacity: 0.8;
  border-radius: 50px;
  background: #f9bd00;
}

.container7_mobile {
  position: relative;
  top: 0;
  bottom: 0;
  /* left: 82.5%; */
  right: 0;
  width: 20px;
}
.tape7_mobile {
  margin: auto;
  height: 50px;
  width: 20px;
  opacity: 0.8;
  border-radius: 50px;
  background: #34cc02;
}

.container8_mobile {
  position: relative;
  top: 0;
  bottom: 0;
  /* left: 68.5%; */
  /* right: 0; */
  width: 40px;
}
.tape8_mobile {
  margin: auto;
  height: 145px;
  width: 40px;
  opacity: 0.8;
  border-radius: 50px;
  background: red;
}

.container9_mobile {
  position: relative;
  top: 0;
  bottom: 0;
  /* left: 74.5%; */
  /* right: 0; */
  width: 40px;
}
.tape9_mobile {
  margin: auto;
  height: 100px;
  width: 40px;
  opacity: 0.8;
  border-radius: 50px;
  background: #03d6f9;
}

.container10_mobile {
  position: relative;
  top: 0;
  bottom: 0;
  /* left: 80.5%; */
  /* right: 0; */
  width: 10px;
}
.tape10_mobile {
  margin: auto;
  height: 115px;
  width: 10px;
  opacity: 0.8;
  border-radius: 50px;
  background: #34cc02;
}

.container11 {
  position: relative;
  top: 0;
  bottom: 0;
  /* left: 61.5%; */
  right: 0;
}
.tape11 {
  margin: auto;
  height: 100px;
  width: 10px;
  opacity: 0.8;
  border-radius: 50px;
  background: #34cc02;
}

.tape1_mobile {
  margin: auto;
  height: 250px;
  width: 40px;
  opacity: 0.8;
  border-radius: 50px;
  background: rgb(52, 204, 2);
  background: linear-gradient(
    180deg,
    rgba(52, 204, 2, 1) 72%,
    rgba(255, 255, 255, 1) 100%
  );
}
.tape4_mobile {
  margin: auto;
  height: 145px;
  width: 60px;
  opacity: 0.8;
  border-radius: 50px;
  background: #03d6f9;
}
.tape2_mobile {
  margin: auto;
  height: 40px;
  width: 40px;
  opacity: 0.8;
  border-radius: 50px;
  background: #34cc02;
}

.tape3_mobile {
  margin: auto;
  height: 100px;
  width: 25px;
  opacity: 0.8;
  border-radius: 50px;
  background: #f9bd00;
}

.container-v_mobile {
  position: absolute;
  top: 0%;
  left: -36px;

  transform: rotate(-45deg);
}

.tape-v_mobile {
  margin: auto;
  height: 130px;
  width: 45px;
  opacity: none;
  border-radius: 50px;
  background: #000000;

  transform: rotate(-45deg);
}

.container-v-i {
  position: absolute;
  top: 0;
  left: 30px;

  transform: rotate(45deg);
}

.tape-v-i {
  margin: auto;
  height: 130px;
  width: 45px;
  opacity: none;
  border-radius: 50px;
  background: #000000;

  transform: rotate(45deg);
}

.v-container-all {
  position: absolute;
  margin-top: 5%;
  left: 0px;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: none;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: none;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: none;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: none;
  }
}

.slide-in-top {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-top2 {
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
@keyframes slide-in-top2 {
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

.slide-in-top2 {
  -webkit-animation: slide-in-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-top3 {
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
@keyframes slide-in-top3 {
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

.slide-in-top3 {
  -webkit-animation: slide-in-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-top4 {
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
@keyframes slide-in-top4 {
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

.slide-in-top4 {
  -webkit-animation: slide-in-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* @media (max-width: 992px) {
  .animatedContainer_mobile {
    display: none !important;
  }
} */
</style>