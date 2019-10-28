<template>
  <div style="heigth: 100vh;">
    <v-layout class="principalContainer" style="heigth: 100vh !important;">
      <v-flex>
        <v-card class="mx-auto fade-in" max-width="344" style="margin-top: 25%; box-shadow: none;">
          <v-card-text>
            <span class="display-1 text--primary">
              <b>Smart Budget</b>
            </span>
            <br />
            <span
              class="subtitle-1"
            >Optimiza tus finanzas controlando los gastos de tu empresa y projectos.</span>

            <br />
            <br />
            <div
              class="caption"
            >Con unabase puedes proyectar los costos, saber cual es el valor de tu proyecto, estar al tanto de los gastos reales, saber en que lineas estuviste bien y en cuales no tanto. Nos preocupamos de la visibilidad y utilidad de tu negocio.</div>
          </v-card-text>
          <v-card-actions>
            <span class="subtitle-1 font-weight-black">
              <b>Prueba el demo ></b>
            </span>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <!--Barra izquierda width menos de lo normal alado de la normal (verde)-->
        <div class="container7 slide-in-top">
          <div class="tape7"></div>
        </div>

        <!--Barra izquierda width normal alado de la super fina (amarilla)-->
        <div class="container6 slide-in-top3">
          <div class="tape6"></div>
        </div>

        <!--Barra izquierda super fina alado de la ancha-->
        <div class="container5 slide-in-top">
          <div class="tape5"></div>
        </div>

        <!--Barra izquierda ancha-->
        <div class="container4 slide-in-top3">
          <div class="tape4"></div>
        </div>

        <!--barra verde-->
        <div class="container slide-in-top">
          <div class="tape"></div>
        </div>

        <!--bolita verde-->
        <div class="container2 slide-in-top">
          <div class="tape2"></div>
        </div>

        <!--barra finita derecha-->
        <div class="container3 slide-in-top2">
          <div class="tape3"></div>
        </div>

        <!--Barra derecha segunda derecha-->
        <div class="container8 slide-in-top">
          <div class="tape8"></div>
        </div>

        <!--Barra derecha tercera derecha-->
        <div class="container9 slide-in-top">
          <div class="tape9"></div>
        </div>

        <!--Barra derecha cuarta derecha-->
        <div class="container10 slide-in-top2">
          <div class="tape10"></div>
        </div>

        <!-- ANIMATION CONTAINERRRRRRRRRRRR -->
        <div class="animation2_container" style="display:none;">
          <!--Barra izquierda width menos de lo normal alado de la normal-->
          <div class="container7 slide-in-top">
            <div class="tape7"></div>
          </div>

          <!--Barra izquierda width normal alado de la super fina-->
          <div class="container6 slide-in-top3">
            <div class="tape6"></div>
          </div>

          <!--Barra izquierda super fina alado de la ancha-->
          <div class="container5 slide-in-top">
            <div class="tape5"></div>
          </div>

          <!--Barra izquierda ancha-->
          <div class="container4 slide-in-top3">
            <div class="tape4"></div>
          </div>

          <!--barra verde-->
          <div class="container slide-in-top">
            <div class="tape"></div>
          </div>
          <!--bolita verde-->
          <div class="container2 slide-in-top">
            <div class="tape2"></div>
          </div>

          <!--barra finita derecha-->
          <div class="container3 slide-in-top2">
            <div class="tape3"></div>
          </div>

          <!--Barra derecha segunda derecha-->
          <div class="container8 slide-in-top">
            <div class="tape8"></div>
          </div>

          <!--Barra derecha tercera derecha-->
          <div class="container9 slide-in-top">
            <div class="tape9"></div>
          </div>

          <!--Barra derecha cuarta derecha-->
          <div class="container10 slide-in-top2">
            <div class="tape10"></div>
          </div>

          <div class="v-container">
            <!-- v de unabase lado derecho-->
            <div class="container-v slide-in-top">
              <div class="tape-v"></div>
            </div>

            <!-- v de unabase lado izquierdo-->
            <div class="container-v-i slide-in-top">
              <div class="tape-v-i"></div>
            </div>
            <!-- v de unabase lado derecho-->
            <div class="container-v slide-in-top">
              <div class="tape-v"></div>
            </div>

            <!-- v de unabase lado izquierdo-->
            <div class="container-v-i slide-in-top">
              <div class="tape-v-i"></div>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style>
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

.container {
  position: absolute;
  top: -75%;
  bottom: 0;
  left: 11%;
  right: 0;
}

.container4 {
  position: absolute;
  top: -10%;
  bottom: 0;
  left: 6%;
  right: 0;
}

.container5 {
  position: absolute;
  top: -1%;
  bottom: 0;
  left: -5%;
  right: 0;
}

.tape5 {
  margin: auto;
  height: 115px;
  width: 10px;
  opacity: 0.5;
  border-radius: 50px;
  background: red;
}

.container3 {
  position: absolute;
  top: -5%;
  bottom: 0;
  left: 32%;
  right: 0;
}

.container2 {
  position: absolute;
  top: 47.5%;
  bottom: 0;
  left: 22%;
  right: 0;
}

.container6 {
  position: absolute;
  top: -5%;
  bottom: 0;
  left: 1%;
  right: 15%;
}
.tape6 {
  margin: auto;
  height: 165px;
  width: 40px;
  opacity: 0.5;
  border-radius: 50px;
  background: #f9bd00;
}

.container7 {
  position: absolute;
  top: -5%;
  bottom: 0;
  left: 0;
  right: 25%;
}
.tape7 {
  margin: auto;
  height: 100px;
  width: 20px;
  opacity: 0.5;
  border-radius: 50px;
  background: #34cc02;
}

.container8 {
  position: absolute;
  top: -5%;
  bottom: 0;
  left: 42%;
  right: 0;
}
.tape8 {
  margin: auto;
  height: 245px;
  width: 40px;
  opacity: 0.5;
  border-radius: 50px;
  background: red;
}

.container9 {
  position: absolute;
  top: -5%;
  bottom: 0;
  left: 54%;
  right: 0;
}
.tape9 {
  margin: auto;
  height: 150px;
  width: 40px;
  opacity: 0.5;
  border-radius: 50px;
  background: #03d6f9;
}

.container10 {
  position: absolute;
  top: -5%;
  bottom: 0;
  left: 61.5%;
  right: 0;
}
.tape10 {
  margin: auto;
  height: 115px;
  width: 10px;
  opacity: 0.5;
  border-radius: 50px;
  background: #34cc02;
}

.tape {
  margin: auto;
  height: 500px;
  width: 40px;
  opacity: 0.5;
  border-radius: 50px;
  background: #34cc02;
}
.tape4 {
  margin: auto;
  height: 245px;
  width: 60px;
  opacity: 0.5;
  border-radius: 50px;
  background: #03d6f9;
}
.tape2 {
  margin: auto;
  height: 40px;
  width: 40px;
  opacity: 0.5;
  border-radius: 50px;
  background: green;
}

.tape3 {
  margin: auto;
  height: 200px;
  width: 25px;
  opacity: 0.5;
  border-radius: 50px;
  background: #f9bd00;
}

.container-v {
  position: absolute;
  top: 75%;
  bottom: 0;
  left: 0;
  right: 0;
}

.tape-v {
  margin: auto;
  height: 130px;
  width: 45px;
  opacity: 0.5;
  border-radius: 50px;
  background: #000000;

  -webkit-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  -o-transform: rotate(50deg);
  -ms-transform: rotate(50deg);
  transform: rotate(50deg);
}

.container-v-i {
  position: absolute;
  top: 75%;
  bottom: 0;
  left: 0;
  right: 7%;
}

.tape-v-i {
  margin: auto;
  height: 130px;
  width: 45px;
  opacity: 0.5;
  border-radius: 50px;
  background: #000000;

  -webkit-transform: rotate(-50deg);
  -moz-transform: rotate(-50deg);
  -o-transform: rotate(-50deg);
  -ms-transform: rotate(-50deg);
  transform: rotate(-50deg);
}

.v-container {
  position: absolute;
  top: -15%;
  bottom: 0;
  left: 3.5%;
  right: 0%;
}

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
</style>