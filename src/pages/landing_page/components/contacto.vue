<template>
  <div style="heigth: 100vh; margin-top: 10%;">
    <div class="md-layout">
      <div class="md-layout-item md-size-33 md-small-size-100 slide-in-bottom-3">
        <v-card
          class="mx-auto fade-in"
          max-width="344"
          style="margin-top: 25%; box-shadow: none; z-index:1000 !important;"
        >
          <v-card-text class="borderClass-left">
            <v-spacer></v-spacer>
            <span class="display-1 text--primary pull-right">
              <b>Contacto</b>
            </span>
            <br />
            <br />
            <br />

            <span class="subheading">Hablemos y conoce nuestra soluciòn!</span>

            <br />
            <br />
            <div class="display-1 pull-right">Chile</div>
            <br />
            <br />
            <div class="subtitle-1 pull-right">+56 9 4810 6304 / +56 9 4810 6304</div>

            <br />
            <br />
            <div class="display-1 pull-right">Perú</div>
            <br />
            <br />
            <div class="subtitle-2 pull-right">+51 9 4810 6304</div>

            <br />
            <br />
            <div class="subheading font-weight-bold pull-right">
              <b>ventas@unabase.com</b>
            </div>
          </v-card-text>
          <v-card-actions style="z-index:1000 !important;"></v-card-actions>
        </v-card>
      </div>

      <div class="md-layout-item md-size-53 md-small-size-100 slide-in-bottom-1">
        <v-card
          class="mx-auto fade-in"
          max-width="344"
          style="margin-top: 25%; box-shadow: none; z-index:1000 !important;"
        >
          <v-card-text>
            <span class="display-1 font-weight-regular pull-right">Solicita Una Demo</span>

            <br />
            <br />
            <v-layout style="padding-top: 5px;">
              <v-flex style="padding: 5px;">
                <v-text-field placeholder="Nombre" solo></v-text-field>
              </v-flex>

              <v-flex style="padding: 5px;">
                <v-text-field placeholder="Apellido" solo></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex style="padding: 5px;">
                <v-text-field placeholder="Empresa" solo></v-text-field>
              </v-flex>

              <v-flex style="padding: 5px;">
                <v-text-field placeholder="Email" solo></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex style="padding: 5px;">
                <v-text-field placeholder="Telefono" solo></v-text-field>
              </v-flex>

              <v-flex md6>
                <!-- <v-text-field placeholder="Apellido" solo></v-text-field> -->
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md6>
                <v-btn small color="green" dark>Enviar</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </div>

      <div class="md-layout-item md-size-13 md-small-size-100 slide-in-bottom-2">
        <v-card
          class="mx-auto fade-in"
          max-width="344"
          style="margin-top: 25%; box-shadow: none; z-index:1000 !important;"
        >
          <v-card-text class="borderClass-right">
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <img
                  @click="goTo('instagram')"
                  src="../../../../public/img/instagram.svg"
                  width="40px;"
                  alt="instagram"
                />
              </v-flex>
            </v-layout>
            <br />
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <img
                  @click="goTo('youtube')"
                  src="../../../../public/img/youtube.svg"
                  width="40px;"
                  alt="youtube"
                />
              </v-flex>
            </v-layout>
            <br />
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <img
                  @click="goTo('twitter')"
                  src="../../../../public/img/twitter.svg"
                  width="40px;"
                  alt="twitter"
                />
              </v-flex>
            </v-layout>
            <br />
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <img
                  @click="goTo('linkedin')"
                  src="../../../../public/img/linkedin.svg"
                  width="40px;"
                  alt="linkedin"
                />
              </v-flex>
            </v-layout>
            <br />
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <img
                  @click="goTo('facebook')"
                  src="../../../../public/img/facebook.svg"
                  width="40px;"
                  alt="facebok"
                />
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    goTo(socialNetwork) {
      socialNetwork == "instagram"
        ? window.open("https://www.instagram.com/unabase_com/", "_blank")
        : socialNetwork == "youtube"
        ? window.open(
            "https://www.youtube.com/channel/UCRiXGCKsl-O62GuHN51t_xQ",
            "_blank"
          )
        : socialNetwork == "twitter"
        ? window.open("https://twitter.com/UnaBase", "_blank")
        : socialNetwork == "linkedin"
        ? window.open(
            "https://cl.linkedin.com/company/unabase-software-de-gesti%C3%B3n",
            "_blank"
          )
        : socialNetwork == "facebook"
        ? window.open("https://www.facebook.com/unabase/", "_blank")
        : console.log("Error, red social no existe!");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
/* ANIMACIONES DE ENTRADA */

.slide-in-bottom-1 {
  -webkit-animation: slide-in-bottom 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-bottom-2 {
  -webkit-animation: slide-in-bottom 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-in-bottom-3 {
  -webkit-animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-3 21:21:11
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

.borderClass-left {
  border-style: dashed;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-block-start: none;
  border-color: #d2d4dc;
  border-width: 2px;
}

.borderClass-right {
  border-style: dashed;
  border-top: none;
  border-bottom: none;
  border-right: none;
  border-block-start: none;
  border-color: #d2d4dc;
  border-width: 2px;
}
</style>