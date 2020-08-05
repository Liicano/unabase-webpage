<template>
  <div style="heigth: 100vh;">
    <div style="display:contents;">
      <div class="md-layout" style="padding:0;">
        <div class="md-layout-item md-size-100" style="padding:0;">
          <caracteristicasMobile :text="text" class="mobile_cat"></caracteristicasMobile>
          <caracteristicasMedium :text="text" class="medium_cat"></caracteristicasMedium>
          <caracteristicasLarge :text="text" class="large_cat"></caracteristicasLarge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import caracteristicasMedium from "../subcomponents/caracteristicas/caracteristicas_medium";
import caracteristicasLarge from "../subcomponents/caracteristicas/caracteristicas_extra_large";
import caracteristicasMobile from "../subcomponents/caracteristicas/caracteristicas_mobile";
export default {
  data() {
    return {
      text: {
        title: "Características",
        card_1: {
          title: "Todo parte de un presupuesto",
          icon: "list",
          body:
            "¿Imaginas una solución donde todo parte de un presupuesto? Compras, facturas, pagos y resultados. Todo nace desde ahí."
        },
        card_2: {
          title: "Valida desde cualquier parte",
          icon: "smartphone",
          body:
            "Puedes controlar tus negocios validando desde tu teléfono ingresos de gastos u órdenes de compra que excedan lo presupuestado."
        },
        card_3: {
          title: "100% en tiempo real",
          icon: "access_time",
          body:
            "No es necesario esperar informes basados en facturas para saber cómo va tu negocio, Unabase te lo informa día a día."
        },
        card_4: {
          title: "Transversal",
          icon: "timeline",
          body:
            "Ventas, compras, producción, finanzas y administración. Somos una solución 360° que conecta a toda tu organización."
        },
        card_5: {
          title: "Maximiza la utilidad",
          icon: "monetization_on",
          body:
            "Presupuesta y proyecta ingresos, costos y gastos.  Utilidad proyectada versus real. Compara con lo que ocurrió realmente y cierra las compras de tus presupuestos para asegurar tu utilidad final."
        }
      }
    };
  },
  components: {
    caracteristicasMedium,
    caracteristicasLarge,
    caracteristicasMobile
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
/* MOBILE  */
.mobile_cat {
  display: none !important;
}

@media (max-width: 992px) {
  .mobile_cat {
    display: block !important;
  }
}

/* DESKTOP  */
.medium_cat {
  display: none !important;
}

@media (min-width: 992px) and (max-width: 1904px) {
  .medium_cat {
    display: block !important;
  }
}

/* 4K ULTRA-WIDES  */
.large_cat {
  display: none !important;
}

@media (min-width: 1904px) {
  .large_cat {
    display: block !important;
  }
}
</style>
