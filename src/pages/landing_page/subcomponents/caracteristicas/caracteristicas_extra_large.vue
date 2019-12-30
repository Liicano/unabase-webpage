<template>
  <div style="heigth: 100vh;">
    <div style="display:contents;" class="desktopClass">
      <div class="md-layout">
        <div class="md-layout-item md-size-100" style="padding:0;">
          <v-container style="padding:0;">
            <div class="animatedContainer2_large">
              <!-- Primera barra verde (ARRIBA HACIA ABAJO) -->
              <div class="firstContainer_large slide-in-right1s">
                <div class="firstTape_large slide-in-right1s"></div>
              </div>

              <!-- Segunda barra verde (ARRIBA HACIA ABAJO) -->
              <div class="secondContainer_large slide-in-right2s">
                <div class="secondTape_large slide-in-right2s">
                  <div class="textInfo_2_large">
                    <span class="display-1 white--text">
                      <b>Características</b>
                    </span>
                  </div>
                </div>
              </div>

              <!-- Tercera barra verde (ARRIBA HACIA ABAJO) -->
              <div class="thirdContainer_large pull-right slide-in-right15s">
                <div class="thirdTape_large slide-in-right15s"></div>
              </div>

              <!-- Cuarta barra verde (ARRIBA HACIA ABAJO) -->
              <div class="fourContainer_large pull-right slide-in-right2s">
                <div class="fourTape_large slide-in-right2s"></div>
              </div>

              <!-- Quinta barra verde (ARRIBA HACIA ABAJO) -->
              <div class="fiveContainer_large pull-right slide-in-right1s">
                <div class="fiveTape_large slide-in-right1s"></div>
              </div>
            </div>
          </v-container>

          <v-container>
            <div class="md-layout">
              <div
                class="md-layout-item md-size-40 md-small-size-100 primeraCard"
                style="margin-left: -7%;margin-top: -10%;"
              >
                <v-card
                  class="mx-auto slide-in-bottom1s cardMargin"
                  max-width="320"
                  style="margin-top: 70%; box-shadow: none; z-index:0 !important; "
                >
                  <v-card-text style="z-index:1000 !important;padding-left:0; padding-right:0;">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-20">
                        <center>
                          <div class="divColored_large slide-in-bottom_1_d fade-in">
                            <v-icon class="white--text" style="margin-top: 10px;">verified_user</v-icon>
                          </div>
                        </center>
                      </div>
                      <div class="md-layout-item md-size-80">
                        <span class="headline">
                          <b>Work from anywhere on multiple devices</b>
                        </span>
                        <br />
                        <br />
                        <span
                          class="title font-weight-regular"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
              <div
                class="md-layout-item md-size-40 md-small-size-100 segundaCard"
                style="margin-left: -7%; margin-top: -10%;"
              >
                <v-card
                  class="mx-auto fade-in slide-in-bottom2s cardMargin"
                  max-width="320"
                  style="margin-top: 70%; box-shadow: none; z-index:0 !important; "
                >
                  <v-card-text style="z-index:1000 !important;padding-left:0; padding-right:0;">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-20">
                        <center>
                          <div class="divColored2_large slide-in-bottom_2_d">
                            <v-icon class="white--text" style="margin-top: 10px;">all_inbox</v-icon>
                          </div>
                        </center>
                      </div>
                      <div class="md-layout-item md-size-80">
                        <span class="headline">
                          <b>Work from anywhere on multiple devices</b>
                        </span>
                        <br />
                        <br />
                        <span
                          class="title font-weight-regular"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </v-container>

          <!-- SEGUNDA FILA DE CARDS (CANTIDAD: 3) -->
          <v-container>
            <div class="md-layout">
              <div
                class="md-layout-item md-size-40 md-small-size-100 terceraCard"
                style="margin-left: -7%;"
              >
                <v-card
                  class="mx-auto fade-in slide-in-bottom3s cardMargin"
                  max-width="320"
                  style=" box-shadow: none; z-index:0 !important; "
                >
                  <v-card-text style="z-index:1000 !important;padding-left:0; padding-right:0;">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-20">
                        <center>
                          <div class="divColored3_large slide-in-bottom_3_d">
                            <v-icon class="white--text" style="margin-top: 10px;">offline_bolt</v-icon>
                          </div>
                        </center>
                      </div>
                      <div class="md-layout-item md-size-80">
                        <span class="headline">
                          <b>Work from anywhere on multiple devices</b>
                        </span>
                        <br />
                        <br />
                        <span
                          class="title font-weight-regular"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
              <div
                class="md-layout-item md-size-40 md-small-size-100 cuartaCard"
                style="margin-left: -7%;"
              >
                <v-card
                  class="mx-auto fade-in slide-in-bottom4s cardMargin"
                  max-width="320"
                  style=" box-shadow: none; z-index:0 !important; "
                >
                  <v-card-text style="z-index:1000 !important;padding-left:0; padding-right:0;">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-20">
                        <center>
                          <div class="divColored4_large slide-in-bottom_4_d">
                            <v-icon class="white--text" style="margin-top: 10px;">shop_two</v-icon>
                          </div>
                        </center>
                      </div>
                      <div class="md-layout-item md-size-80">
                        <span class="headline">
                          <b>Work from anywhere on multiple devices</b>
                        </span>
                        <br />
                        <br />
                        <span
                          class="title font-weight-regular"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>

              <div
                class="md-layout-item md-size-40 md-small-size-100 quintaCard"
                style="margin-left: -7%;"
              >
                <v-card
                  class="mx-auto fade-in slide-in-bottom5s cardMargin"
                  max-width="320"
                  style=" box-shadow: none; z-index:0 !important; "
                >
                  <v-card-text style="z-index:1000 !important;padding-left:0; padding-right:0;">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-20">
                        <center>
                          <div class="divColored5_large slide-in-bottom_5_d">
                            <v-icon class="white--text" style="margin-top: 10px;">person_pin</v-icon>
                          </div>
                        </center>
                      </div>
                      <div class="md-layout-item md-size-80">
                        <span class="headline">
                          <b>Work from anywhere on multiple devices</b>
                        </span>
                        <br />
                        <br />
                        <span
                          class="title font-weight-regular"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </v-container>
        </div>
      </div>

      <!-- BUTTOM MORE FEAUTRES -->
      <!-- <div class="md-layout moreFeaturesButton">
        <div class="md-layout-item md-size-50 pull-right"></div>
        <div
          class="md-layout-item md-size-50 pull-right slide-in-left"
          style="cursor:pointer !important;"
        >
          <b class="title font-weight-regular" style="margin-left: 80px;">Mas caracteristicas</b>

          <v-avatar
            style="height: 80px;width: 80px;background: #34cc02 !important; margin-left: 20px;"
            size="66"
          >
            <span class="white--text display-3">+</span>
          </v-avatar>
        </div>
      </div>-->
    </div>
    <div style="display:contents;" class="mobileClass"></div>
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
<style lang="scss">
.animatedContainer2_large {
  position: absolute;
  height: 100% !important;
  width: 100% !important;
  top: 2.5%;
  padding: 2px;
  right: -15% !important;
  float: right;
}
.firstContainer_large {
  position: relative;
  top: 0;
  bottom: 0;
  right: -32%;
  width: 1500px;
}
.firstTape_large {
  margin: auto;
  height: 60px;
  width: 1500px;
  opacity: none;
  border-radius: 50px;

  background: rgb(37, 125, 8);
  background: linear-gradient(
    264deg,
    rgba(37, 125, 8, 1) 0%,
    rgba(52, 204, 2, 1) 100%
  );
}

.secondContainer_large {
  position: relative;
  top: 0px;
  bottom: 0;
  right: 0;
  width: 2000px !important;
}
.secondTape_large {
  margin: auto;
  height: 90px;
  width: 2000px !important;
  opacity: none;
  border-radius: 50px;
  background: rgb(37, 125, 8);
  background: linear-gradient(
    264deg,
    rgba(37, 125, 8, 1) 0%,
    rgba(52, 204, 2, 1) 100%
  );
}

.thirdContainer_large {
  position: relative;
  top: 0px;
  bottom: 0;
  right: -15%;
  width: 73% !important;
}
.thirdTape_large {
  margin: auto;
  height: 80px;
  width: 73% !important;
  opacity: none;
  border-radius: 50px;
  background: rgb(37, 125, 8);
  background: linear-gradient(
    264deg,
    rgba(37, 125, 8, 1) 0%,
    rgba(52, 204, 2, 1) 100%
  );
}

.fourContainer_large {
  position: relative;
  top: 0px;
  bottom: 0;
  right: -19%;
  width: 73% !important;
}
.fourTape_large {
  margin: auto;
  height: 65px;
  width: 55% !important;
  opacity: none;
  border-radius: 50px;
  background: rgb(37, 125, 8);
  background: linear-gradient(
    264deg,
    rgba(37, 125, 8, 1) 0%,
    rgba(52, 204, 2, 1) 100%
  );
}

.fiveContainer_large {
  position: relative;
  top: 0px;
  bottom: 0;
  right: -28%;
  width: 73% !important;
}
.fiveTape_large {
  margin: auto;
  height: 65px;
  width: 35% !important;
  opacity: none;
  border-radius: 50px;
  background: rgb(37, 125, 8);
  background: linear-gradient(
    264deg,
    rgba(37, 125, 8, 1) 0%,
    rgba(52, 204, 2, 1) 100%
  );
}

.textInfo_2_large {
  padding-left: 30px;
  padding-top: 25px;
}

.divColored_large {
  width: 40px;
  height: 70px;
  background: #f9bd00;
  border-radius: 25px;
}
.divColored2_large {
  width: 40px;
  height: 70px;
  background: #fc4903;
  border-radius: 25px;
}

.divColored3_large {
  width: 40px;
  height: 70px;
  background: #03d6f9;
  border-radius: 25px;
}

.divColored4_large {
  width: 40px;
  height: 70px;
  background: #34cc02;
  border-radius: 25px;
}

.divColored5_large {
  width: 40px;
  height: 70px;
  background: black;
  border-radius: 25px;
}

.moreFeaturesCircle_large {
  width: 90px;
  height: 90px;
  background: #34cc02;
  border-radius: 55px;
}

// ANIMACION DE ENTRADA DE LAS FIGURAS VERDES

.slide-in-right1s {
  -webkit-animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-right2s {
  -webkit-animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-right3s {
  -webkit-animation: slide-in-right 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-right15s {
  -webkit-animation: slide-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-24 12:30:42
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-right
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

// ANIMACION DE ENTRADA DE LAS CARDS

// CARD # 1
.slide-in-bottom1s {
  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-bottom_1_d {
  -webkit-animation: slide-in-bottom 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
// CARD # 2
.slide-in-bottom2s {
  -webkit-animation: slide-in-bottom 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-bottom_2_d {
  -webkit-animation: slide-in-bottom 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

// CARD # 3
.slide-in-bottom3s {
  -webkit-animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-bottom_3_d {
  -webkit-animation: slide-in-bottom 2.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 2.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

// CARD # 4
.slide-in-bottom4s {
  -webkit-animation: slide-in-bottom 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-bottom_4_d {
  -webkit-animation: slide-in-bottom 2.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 2.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

// CARD # 5
.slide-in-bottom5s {
  -webkit-animation: slide-in-bottom 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-bottom_5_d {
  -webkit-animation: slide-in-bottom 3.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 3.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-24 14:9:19
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.cardMargin {
  background: transparent !important;
}

@media (max-width: 992px) {
  .animatedContainer2_large {
    display: none;
    padding-top: 16%;
    right: -5%;
  }

  .cardMargin {
    margin-top: 5% !important;
  }

  .primeraCard {
    margin-top: 10% !important;
  }
  .segundaCard {
    margin-top: 2% !important;
  }
  .terceraCard {
    margin-top: 2% !important;
  }
  .cuartaCard {
    display: none;
  }
  .quintaCard {
    display: none;
  }

  .moreFeaturesButton {
    display: none !important;
  }

  // .desktopClass {
  //   display: none;
  // }
}

// ENTRADA DE LA ANIMACION DE EL BUTTOM DE MAS CARACTERISTICAS

.slide-in-left {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-24 19:55:49
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