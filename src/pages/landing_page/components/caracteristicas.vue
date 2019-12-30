<template>
  <div style="heigth: 100vh;">
    <div style="display:contents;">
      <div class="md-layout" style="padding:0;">
        <div class="md-layout-item md-size-100" style="padding:0;">
          <caracteristicasMobile
            :text="text"
            class="mobile_cat"
          ></caracteristicasMobile>
          <caracteristicasMedium
            :text="text"
            class="medium_cat"
          ></caracteristicasMedium>
          <caracteristicasLarge
            :text="text"
            class="large_cat"
          ></caracteristicasLarge>
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
          title: "Work from anywhere on multiple devices",
          icon: "offline_bolt",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident"
        },
        card_2: {
          title: "Work from anywhere on multiple devices",
          icon: "person_pin",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident"
        },
        card_3: {
          title: "Work from anywhere on multiple devices",
          icon: "dns",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident"
        },
        card_4: {
          title: "Work from anywhere on multiple devices",
          icon: "verified_user",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident"
        },
        card_5: {
          title: "Work from anywhere on multiple devices",
          icon: "check_circle",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis commodi nostrum, provident"
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
