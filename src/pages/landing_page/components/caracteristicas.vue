<template>
  <div style="heigth: 100vh;">
    <div style="display:contents;" class="desktopClass">
      <div class="md-layout" style="padding:0;">
        <div class="md-layout-item md-size-100" style="padding:0;">
          <caracteristicasMedium class="medium"></caracteristicasMedium>
          <caracteristicasLarge class="large"></caracteristicasLarge>
        </div>
      </div>
    </div>
    <div style="display:contents;" class="mobileClass"></div>
  </div>
</template>

<script>
import caracteristicasMedium from "../subcomponents/caracteristicas/caracteristicas_medium";
import caracteristicasLarge from "../subcomponents/caracteristicas/caracteristicas_extra_large";
export default {
  data() {
    return {};
  },
  components: {
    caracteristicasMedium,
    caracteristicasLarge
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
/* DESKTOP  */
.medium {
  display: none !important;
}

@media (max-width: 1904px) {
  .medium {
    display: block !important;
  }
}

/* 4K ULTRA-WIDES  */
.large {
  display: none !important;
}

@media (min-width: 1904px) {
  .large {
    display: block !important;
  }
}
</style>