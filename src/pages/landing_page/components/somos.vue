<template>
  <div style="heigth: 100vh;">
    <v-container>
      <div class="principalContainer md-layout" style="heigth: 100vh !important;">
        <div class="md-layout-item md-size-100" style="padding:0;">
          <somosMediumSmall :text="card" class="medium_small" />
          <somosMediumLarge :text="card" class="medium_large" />
          <somosExtraLarge :text="card" class="extra_large" />
          <somosMobile :text="card" class="mobile" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import somosMediumSmall from "../subcomponents/somos/somos_medium_small";
import somosMediumLarge from "../subcomponents/somos/somos_medium_large";
import somosExtraLarge from "../subcomponents/somos/somos_extra_large";
import somosMobile from "../subcomponents/somos/somos_mobile";

export default {
  data() {
    return {
      card: {
        title: "Smart Budget",
        subheader:
          "Somos la app líder de la industria creativa basada 100% en el control de presupuestos y utilidades.",
        text:
          "En Unabase logramos lo que todos soñaban, una solución que a partir de una cotización conecta toda la cadena de producción, administración y control de una empresa. ",
        button: {
          text: "Prueba el demo",
          icon: "keyboard_arrow_right"
        }
      }
    };
  },

  components: {
    somosMediumSmall,
    somosMediumLarge,
    somosExtraLarge,
    somosMobile
  },
  methods: {
    goToDemo() {
      window.open("http://demo.unabase.cl/", "_blank");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
/* =============================================== */
/* MOSTRAR O OCULTAR DE ACUERDO A LA PANTALLA */
/* =============================================== */

/* MOBILE  */
.mobile {
  display: none;
}

@media (max-width: 992px) {
  .mobile {
    display: block !important;
  }
}

/* LARGE TABLET TO LAPTOP  */
.medium_small {
  display: none;
}

@media (min-width: 960px) and (max-width: 1264px) {
  .medium_small {
    display: block !important;
  }
}

/* DESKTOP  */
.medium_large {
  display: none;
}

@media (min-width: 1264px) and (max-width: 1904px) {
  .medium_large {
    display: block !important;
  }
}

/* 4K ULTRA-WIDES  */
.extra_large {
  display: none;
}

@media (min-width: 1904px) {
  .extra_large {
    display: block !important;
  }
}
</style>