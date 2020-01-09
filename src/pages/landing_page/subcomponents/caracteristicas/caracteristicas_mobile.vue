<template>
  <div style="heigth: 100vh;">
    <div style="display:contents;">
      <div class="md-layout">
        <div class="md-layout-item md-size-100" style="padding:0;margin-top: 11%;">
          <center>
            <v-layout>
              <v-flex>
                <v-card class="mx-auto slide-in-left_cat">
                  <v-card-text>
                    <p class="display-1 font-weight-thin">Características</p>
                    <v-divider inset style="background: #34cc02 !important;"></v-divider>

                    <!-- <div
                      class="overline"
                      style="margin-top: 3%;"
                    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi impedit explicabo, ipsum aut ad aliquid reiciendis, rerum non excepturn.</div>-->
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

            <v-layout align-content-center style="padding-top: 0%;">
              <v-flex class="slide-in-fwd-center_cat sm12 md12">
                <v-card flat tile class="mx-auto slide-in-left_cat_2" max-width="100%">
                  <v-layout class="fill-height ma-0" align="center" justify="center">
                    <div class="divColored1_mobile">
                      <v-icon class="white--text" style="margin-top: 5px;">
                        {{
                        text.card_1.icon
                        }}
                      </v-icon>
                    </div>

                    <span class="caption pull-left text-justify">
                      <b
                        class="text-left pull-left"
                        style="margin-left: 6px;"
                      >{{ text.card_1.title }}</b>
                      <br />
                      <span class="overline">{{ text.card_1.body }}</span>
                    </span>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <br />
            <v-layout align-content-center style="padding-top: 2%;">
              <v-flex class="slide-in-fwd-center_cat sm12 md12">
                <v-card flat tile class="mx-auto slide-in-right_cat_1" max-width="100%">
                  <v-layout class="fill-height ma-0" align="center" justify="center">
                    <div class="divColored2_mobile">
                      <v-icon class="white--text" style="margin-top: 5px;">
                        {{
                        text.card_2.icon
                        }}
                      </v-icon>
                    </div>

                    <span class="caption pull-left text-justify">
                      <b
                        class="text-left pull-left"
                        style="margin-left: 6px;"
                      >{{ text.card_2.title }}</b>
                      <br />
                      <span class="overline">{{ text.card_2.body }}</span>
                    </span>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>

            <br />
            <v-layout align-content-center style="padding-top: 2%;">
              <v-flex class="slide-in-fwd-center_cat sm12 md12">
                <v-card flat tile class="mx-auto slide-in-left_cat_3" max-width="100%">
                  <v-layout class="fill-height ma-0" align="center" justify="center">
                    <div class="divColored3_mobile">
                      <v-icon class="white--text" style="margin-top: 5px;">
                        {{
                        text.card_3.icon
                        }}
                      </v-icon>
                    </div>

                    <span class="caption pull-left text-justify">
                      <b
                        class="text-left pull-left"
                        style="margin-left: 6px;"
                      >{{ text.card_3.title }}</b>
                      <br />
                      <span class="overline">{{ text.card_3.body }}</span>
                    </span>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>

            <br />
            <v-layout align-content-center style="padding-top: 2%;">
              <v-flex class="slide-in-fwd-center_cat sm12 md12">
                <v-card flat tile class="mx-auto slide-in-right_cat_1" max-width="100%">
                  <v-layout class="fill-height ma-0" align="center" justify="center">
                    <div class="divColored4_mobile">
                      <v-icon class="white--text" style="margin-top: 5px;">
                        {{
                        text.card_4.icon
                        }}
                      </v-icon>
                    </div>

                    <span class="caption pull-left text-justify">
                      <b
                        class="text-left pull-left"
                        style="margin-left: 6px;"
                      >{{ text.card_4.title }}</b>
                      <br />
                      <span class="overline">{{ text.card_4.body }}</span>
                    </span>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>

            <br />
            <v-layout align-content-center style="padding-top: 2%;">
              <v-flex class="slide-in-fwd-center_cat sm12 md12">
                <v-card flat tile class="mx-auto slide-in-bottom_3_d" max-width="100%">
                  <v-layout class="fill-height ma-0" align="center" justify="center">
                    <div class="divColored5_mobile">
                      <v-icon class="white--text" style="margin-top: 5px;">
                        {{
                        text.card_5.icon
                        }}
                      </v-icon>
                    </div>

                    <span class="caption pull-left text-justify">
                      <b
                        class="text-left pull-left"
                        style="margin-left: 6px;"
                      >{{ text.card_5.title }}</b>
                      <br />
                      <span class="overline">{{ text.card_5.body }}</span>
                    </span>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </center>
        </div>
      </div>
    </div>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.slide-in-left_cat {
  -webkit-animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left_cat_2 {
  -webkit-animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left_cat_3 {
  -webkit-animation: slide-in-left 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-12-30 15:46:38
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

.slide-in-fwd-center_cat {
  -webkit-animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-12-30 15:48:0
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-fwd-center
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

.slide-in-right_cat_1 {
  -webkit-animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-right_cat_2 {
  -webkit-animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-12-30 16:16:3
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

.divColored1_mobile {
  background: #03d6f9;
  width: 30px;
  height: 60px;
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;
}

.divColored2_mobile {
  width: 30px;
  height: 60px;
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;
  background: #f9bd00;
}

.divColored3_mobile {
  width: 30px;
  height: 60px;
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;
  background: #fc4903;
}

.divColored4_mobile {
  width: 30px;
  height: 60px;
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;
  background: #34cc02;
}

.divColored5_mobile {
  width: 30px;
  height: 60px;
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px;
  background: black;
}
</style>
