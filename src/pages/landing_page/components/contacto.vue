<template>
  <div style="heigth: 100vh; margin-top: 10%;">
    <div class="md-layout">
      <!-- FORMULARIO EN MOBILE -->

      <div
        class="md-layout-item md-size-45 md-small-size-100 slide-in-bottom-1 noPadding showOnMobile"
      >
        <v-card
          class="mx-auto fade-in"
          max-width="100%"
          style="margin-top: 5%; box-shadow: none; z-index:1000 !important;"
        >
          <v-card-text>
            <center>
              <span class="headline font-weight-regular pull-center text-center">Solicita una demo</span>
            </center>

            <v-divider inset></v-divider>
            <!-- <v-spacer></v-spacer> -->

            <v-layout style="padding-top: 10px;">
              <v-flex md12 xs12 sm12>
                <v-text-field v-model="client.name" placeholder="Nombre" solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout style="padding-top: 0; margin-top: 0;">
              <v-flex md12 xs12 sm12>
                <v-text-field v-model="client.lastName" placeholder="Apellido" solo></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex md12 xs12 sm12>
                <v-text-field v-model="client.business" placeholder="Empresa" solo></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex md12 xs12 sm12>
                <v-text-field v-model="client.email" placeholder="Email" solo></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex md12 xs12 sm12>
                <v-text-field v-model="client.phone" placeholder="Telefono" solo></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md6>
                <v-btn
                  color="#34cc02"
                  class="white--text"
                  dark
                  block
                  large
                  @click="sendMail()"
                >Enviar</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </div>

      <!-- MOSTRAR DATA EN MOBILE -->
      <div
        class="md-layout-item md-size-33 md-small-size-100 slide-in-bottom-3 noPadding showOnMobile"
      >
        <br />
        <v-card
          class="mx-auto fade-in"
          max-width="100%"
          style="margin-top: -8%; box-shadow: none; z-index:1000 !important;"
        >
          <v-card-text class="borderClass-left">
            <v-layout>
              <v-flex>
                <center>
                  <span class="headline text--primary">
                    <b>Contactanos</b>
                  </span>
                  <v-divider inset></v-divider>
                </center>
              </v-flex>
            </v-layout>

            <!-- <v-layout>
              <v-flex>
                <span class="subtitle-1 text-right"
                  >Hablemos y conoce nuestra soluciòn!</span
                >
              </v-flex>
            </v-layout>-->
            <v-layout>
              <v-flex>
                <v-layout>
                  <v-flex>
                    <v-layout>
                      <v-flex>
                        <div class="headline">Ventas perú</div>

                        <div class="subtitle-1 pull-left">
                          +51 959 619 835
                          <br />
                        </div>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                        <div class="headline">Soporte</div>

                        <div class="subtitle-1 pull-left">
                          +56 9 5207 0908
                          <br />
                        </div>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                        <div class="subheading font-weight-bold pull-left">
                          <!-- <b>ventas@unabase.cl</b> -->
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>

              <!-- <v-divider vertical></v-divider> -->
              <v-flex>
                <v-layout>
                  <v-flex>
                    <v-layout>
                      <v-flex>
                        <div class="headline text-right">Ventas chile</div>
                        <div class="subtitle-1 pull-right">+56 9 5207 0907</div>
                        <br />
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-flex>
                        <div class="subheading font-weight-bold pull-right">
                          <b>ventas@unabase.com</b>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions style="z-index:1000 !important;"></v-card-actions>
        </v-card>
      </div>

      <div
        class="md-layout-item md-size-33 md-small-size-100 slide-in-bottom-3 noPadding hideOnMobile"
      >
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

            <span class="subheading pull-right">Hablemos y conoce nuestra solución!</span>

            <br />
            <br />
            <div class="display-1 pull-right">Ventas chile</div>
            <br />
            <br />
            <div class="subtitle-1 pull-right">+56 9 5207 0907</div>

            <br />
            <br />
            <div class="display-1 pull-right">Ventas perú</div>
            <br />
            <br />
            <div class="subtitle-2 pull-right">+51 9 5961 9835</div>
            <br />
            <br />
            <div class="display-1 pull-right">Soporte</div>
            <br />
            <br />
            <div class="subtitle-2 pull-right">+56 9 5207 0908</div>

            <br />
            <br />
            <div class="subheading font-weight-bold pull-right">
              <b>ventas@unabase.com</b>
            </div>
          </v-card-text>
          <v-card-actions style="z-index:1000 !important;"></v-card-actions>
        </v-card>
      </div>

      <div
        class="md-layout-item md-size-45 md-small-size-100 slide-in-bottom-1 noPadding hideOnMobile"
      >
        <v-card
          class="mx-auto fade-in"
          max-width="100%"
          style="margin-top: 15%; box-shadow: none; z-index:1000 !important;"
        >
          <v-card-text>
            <span class="display-1 font-weight-regular pull-left">Solicita una demo</span>
            <v-spacer></v-spacer>

            <br />
            <br />
            <v-layout style="padding-top: 10px;">
              <v-flex md6 xs6 sm12>
                <v-text-field v-model="client.name" placeholder="Nombre" solo></v-text-field>
              </v-flex>

              <v-flex md6 xs6 sm12 style="margin-left: 10px;">
                <v-text-field v-model="client.lastName" placeholder="Apellido" solo></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex md6 xs6 sm12>
                <v-text-field v-model="client.business" placeholder="Empresa" solo></v-text-field>
              </v-flex>

              <v-flex class="md6 xs6 sm12" style="margin-left: 10px;">
                <v-text-field v-model="client.email" placeholder="Email" solo></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex md6 xs6>
                <v-text-field v-model="client.phone" placeholder="Telefono" solo></v-text-field>
              </v-flex>

              <v-flex md6>
                <!-- <v-text-field placeholder="Apellido" solo></v-text-field> -->
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md6>
                <v-btn color="#34cc02" class="white--text" dark large @click="sendMail()">Enviar</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </div>

      <div
        class="md-layout-item md-size-22 md-small-size-100 slide-in-bottom-2 noPadding hideOnMobile"
      >
        <v-card
          class="mx-auto fade-in"
          max-width="200"
          style="margin-top: 43%; box-shadow: none; z-index:1000 !important;"
        >
          <v-card-text class="borderClass-right">
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <div style="background: #d2d4dc; border-radius: 5px; width: 50px; padding: 10px;">
                  <img
                    color="white"
                    class="svg-icon"
                    @click="goTo('instagram')"
                    src="../../../../public/img/instagram.svg"
                    width="40px;"
                    alt="instagram"
                  />
                </div>
              </v-flex>
            </v-layout>
            <br />
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <div style="background: #d2d4dc; border-radius: 5px; width: 50px; padding: 10px;">
                  <img
                    class="svg-icon"
                    @click="goTo('youtube')"
                    src="../../../../public/img/youtube.svg"
                    width="40px;"
                    alt="youtube"
                  />
                </div>
              </v-flex>
            </v-layout>
            <br />
            <!-- <v-layout>
              <v-flex style="mouse: pointer !important;">
                <div style="background: #d2d4dc; border-radius: 5px; width: 50px; padding: 10px;">
                  <img
                    class="svg-icon"
                    @click="goTo('twitter')"
                    src="../../../../public/img/twitter.svg"
                    width="40px;"
                    alt="twitter"
                  />
                </div>
              </v-flex>
            </v-layout>-->
            <br />
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <div style="background: #d2d4dc; border-radius: 5px; width: 50px; padding: 10px;">
                  <img
                    class="svg-icon"
                    @click="goTo('linkedin')"
                    src="../../../../public/img/linkedin.svg"
                    width="40px;"
                    alt="linkedin"
                  />
                </div>
              </v-flex>
            </v-layout>
            <br />
            <v-layout>
              <v-flex style="mouse: pointer !important;">
                <div
                  style="background: #d2d4dc; border-radius: 5px; width: 50px; padding: 10px; mouse:pointer;"
                  class="white--text"
                >
                  <img
                    @click="goTo('facebook')"
                    src="../../../../public/img/facebook.svg"
                    width="40px;"
                    alt="facebok"
                    class="svg-icon"
                  />
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      client: {
        name: "",
        lastName: "",
        business: "",
        email: "",
        phone: ""
      }
    };
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
    },
    async sendMail() {
      let response = await emailjs.send(
        "gmail",
        "template_rHWtBJwg",
        this.client
      );
      console.log("RESPONSE EMAIL!", response.status, response.text);

      Swal.fire({
        title: "¡Correo enviado con exito!",
        text: `Gracias por contactarnos, pronto nos comunicaremos contigo.`,
        type: "success",
        showCancelButton: false,
        confirmButtonClass: "md-button md-success",
        confirmButtonText: "OK!",
        buttonsStyling: false
      });

      this.client = {
        name: "",
        lastName: "",
        business: "",
        email: "",
        phone: ""
      };
    }
  },
  // v=spf1 a mx ptr include:justhost.com ?all

  created() {},
  mounted() {}
};
</script>

<style>
/* ANIMACIONES DE ENTRADA */

.slide-in-bottom-1 {
  -webkit-animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-bottom-2 {
  -webkit-animation: slide-in-bottom 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-in-bottom-3 {
  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

.noPadding {
  padding-left: 0;
  padding-right: 0;
}

.v-text-field.v-text-field--solo .v-input__control {
  padding: 0;
  min-height: 35px;
}

@media (max-width: 992px) {
  .hideOnMobile {
    display: none !important;
  }
}

.showOnMobile {
  display: none;
}

@media (max-width: 992px) {
  .showOnMobile {
    display: block !important;
  }
}

.svg-icon {
  filter: invert(100%);
}
</style>
