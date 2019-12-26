<template>
  <div class="fullpage-container">
    <div
      style="margin: 0 !important; width: 100% !important;"
      class="scrollDiv fullpage-wp"
      ref="example"
      v-fullpage="opts"
    >
      <div id="somos" class="somos" style="margin: 0 !important; heigth: 100vh;">
        <somos v-if="getSectionState == 0"></somos>
      </div>

      <div id="mira_el_video" class="mira_el_video" style="heigth: 100vh;">
        <miraElVideo v-if="getSectionState == 1"></miraElVideo>
      </div>

      <div id="smart_budget" class="smart_budget" style="heigth: 100vh;">
        <smartBudget v-if="getSectionState == 2"></smartBudget>
      </div>

      <div id="caracteristicas" class="caracteristicas" style="heigth: 100vh;">
        <caracteristicas v-if="getSectionState == 3"></caracteristicas>
      </div>

      <div id="clientes" class="clientes" style="heigth: 100vh;">
        <clientes v-if="getSectionState == 4"></clientes>
      </div>

      <div id="contacto" class="contacto" style="heigth: 100vh;">
        <contacto v-if="getSectionState == 5"></contacto>
      </div>
    </div>
  </div>
</template>
<script>
import somos from "./components/somos";
import miraElVideo from "./components/miraElVideo";
import smartBudget from "./components/smartBudget";
import caracteristicas from "./components/caracteristicas";
import clientes from "./components/clientes";
import contacto from "./components/contacto";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {
    somos,
    miraElVideo,
    smartBudget,
    caracteristicas,
    clientes,
    contacto
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        loop: false,
        duration: 50,
        beforeChange: function(el, prev, next) {
          console.log("before", prev, next);
          this.vm.setSectionOnScroll(next);
        },
        afterChange: function(prev, next) {
          this.vm.sectionState = next;
        }
      },
      sectionState: 0
    };
  },
  methods: {
    changeSectionInStore(n) {
      this.changeSectionState(n);
    },
    ...mapMutations({
      changeSectionState: "changeSectionState"
    }),
    setSectionOnScroll(next) {
      if (next == 0) this.$emit("scrollToPoint", "somosColor", 150, 0);
      if (next == 1) this.$emit("scrollToPoint", "mira_el_videoColor", 1750, 1);
      if (next == 2) this.$emit("scrollToPoint", "smart_budgetColor", 3300, 2);
      if (next == 3)
        this.$emit("scrollToPoint", "caracteristicasColor", 4850, 3);
      if (next == 4) this.$emit("scrollToPoint", "clienteColor", 6450, 4);
      if (next == 5) this.$emit("scrollToPoint", "contactColor", 8000, 5);
    }
  },
  computed: {
    ...mapGetters({
      getSectionState: "getSectionState"
    })
  },
  created() {},
  mounted() {},
  watch: {
    getSectionState(val) {
      this.sectionState = val;
      this.$refs.example.$fullpage.moveTo(val);
    },
    sectionState(val) {
      this.changeSectionInStore(val);
    }
  }
};
</script>
<style>
.somos {
  height: 100vh !important;
  width: 100% !important;
  background: white;
}

.mira_el_video {
  height: 100vh !important;
  width: 100% !important;
  background: white;
}

.smart_budget {
  height: 100vh !important;
  width: 100% !important;
  background: white;
}

.caracteristicas {
  height: 100vh !important;
  width: 100% !important;
  background: white;
}

.clientes {
  height: 100vh !important;
  width: 100% !important;
  background: white;
}

.contacto {
  height: 100vh !important;
  width: 100% !important;
  background: white;
}

.fullpage-container {
  width: 100% !important;
  height: 100vh;
}
</style>
