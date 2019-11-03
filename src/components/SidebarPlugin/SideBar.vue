<template>
  <div
    class="sidebar"
    style="box-shadow: none !important; background: white !important;"
    :data-color="activeColor"
    :data-image="backgroundImage"
    :data-background-color="backgroundColor"
    :style="sidebarStyle"
  >
    <div class="md-layout" style="margin-top: 6%; z-index:100;">
      <div class="md-layout-item md-size-100">
        <div class="logotipe_una">
          <img src="../../../public/img/logo_unabase.png" />
        </div>
      </div>
    </div>

    <div class="md-layout sidebarContainer slide-in-bottom">
      <div class="md-layout-item md-size-20" style="z-index: 1000;">
        <div :class="['scrollbar scrollContainer', thumbColor]">
          <div id="scrollDiv" class="force-overflow">
            <div id="somos_2" style="height: 100vh !important;"></div>
            <div id="mira_el_video_2" style="height: 100vh !important;"></div>
          </div>
        </div>
      </div>

      <div class="md-layout-item md-size-80" style="z-index:100;">
        <md-list>
          <md-list-item
            style="cursor:pointer;"
            v-scroll-to="'#somos'"
            @click="scrollToPoint('somosColor', 150, 0)"
          >
            <a style="padding-left: 20px; z-index:100" href="#somos_2" class="md-body-1">SOMOS</a>
          </md-list-item>
          <md-list-item
            v-scroll-to="'#mira_el_video'"
            style="padding-top:7vh; cursor:pointer;"
            @click="scrollToPoint('mira_el_videoColor', 1750, 1)"
          >
            <a
              href="#mira_el_video_2"
              style="padding-left: 20px; z-index:100"
              class="md-body-1"
            >MIRA EL VIDEO</a>
          </md-list-item>
          <md-list-item
            v-scroll-to="'#smart_budget'"
            style="padding-top:7vh; cursor:pointer;"
            @click="scrollToPoint('smart_budgetColor', 3300, 2)"
          >
            <a style="padding-left: 20px;" class="md-body-1">SMARTBUDGET</a>
          </md-list-item>
          <md-list-item
            v-scroll-to="'#caracteristicas'"
            style="padding-top:7vh; cursor:pointer;"
            @click="scrollToPoint('caracteristicasColor', 4850, 3)"
          >
            <a style="padding-left: 20px;" class="md-body-1">CARACTERISTICAS</a>
          </md-list-item>
          <md-list-item
            v-scroll-to="'#clientes'"
            style="padding-top:7vh; cursor:pointer;"
            @click="scrollToPoint('clienteColor', 6450, 4)"
          >
            <a style="padding-left: 20px;" class="md-body-1">CLIENTES</a>
          </md-list-item>
          <md-list-item
            v-scroll-to="'#contacto'"
            style="padding-top:7vh; cursor:pointer;"
            @click="scrollToPoint('contactColor', 8000, 5)"
          >
            <a style="padding-left: 20px;" class="md-body-1">CONTACTO</a>
          </md-list-item>
        </md-list>
      </div>
    </div>

    <!-- COMPONENTE PRINCIPAL (WELCOME) -->

    <div style="display:none !important;">
      <welcome @scrollToPoint="scrollToPoint" ref="welcome" style="display:none;"></welcome>
    </div>
  </div>
</template>
<script>
import welcome from "../../pages/landing_page/welcome";
import { mapMutations, mapGetters } from "vuex";
import $ from "jquery";
export default {
  name: "sidebar",
  props: {
    title: {
      type: String,
      default: "Vue MD PRO"
    },
    rtlTitle: {
      type: String,
      default: "توقيت الإبداعية"
    },
    activeColor: {
      type: String,
      default: "green",
      validator: value => {
        let acceptedValues = [
          "",
          "purple",
          "azure",
          "green",
          "orange",
          "danger",
          "rose"
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    backgroundImage: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "white",
      validator: value => {
        let acceptedValues = ["", "black", "white", "red"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    logo: {
      type: String,
      default: "./img/vue-logo.png"
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      thumbColor: "somosColor",
      show: false
    };
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
    ...mapMutations({
      changeSectionState: "changeSectionState"
    }),

    scrollToPoint(classColor, n, section) {
      if (classColor) {
        this.thumbColor = classColor;
      }
      this.changeSectionState(section);
      $(".scrollContainer").scrollTop(n);
    }
  },
  computed: {
    sidebarStyle() {
      return {
        // backgroundImage: `url(${this.backgroundImage})`
      };
    },
    ...mapGetters({
      getSectionState: "getSectionState"
    })
  },
  components: {
    welcome
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
};
</script>
<style>
@media (min-width: 992px) {
  .navbar-search-form-mobile,
  .nav-mobile-menu {
    display: none;
  }
}

@media (min-width: 992px) {
  .sidebarContainer {
    margin-top: 25%;
  }
}

@media (max-width: 992px) {
  .sidebarContainer {
    margin-top: 10%;
  }
}

.scrollbar {
  margin-left: 30px;
  float: left;
  height: 90vh !important;
  width: 20px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.scrollContainer {
  scroll-behavior: smooth;
  border-radius: 10px;
}

.force-overflow {
  min-height: 1550vh;
  border-radius: 20px !important;
}

.scrollContainer::-webkit-scrollbar-track {
  border-radius: 20px !important;
  background-color: #f5f5f5;
}

.scrollContainer::-webkit-scrollbar {
  width: 20px;
  border-radius: 20px !important;
  background-color: #f5f5f5;
}

.scrollContainer::-webkit-scrollbar-thumb {
  border-radius: 10px;
  padding-top: 300px !important;
  box-shadow: none;
}

.somosColor.scrollContainer::-webkit-scrollbar-thumb {
  background-color: #34cc02;
}

.mira_el_videoColor.scrollContainer::-webkit-scrollbar-thumb {
  background-color: #f9bd00;
}

.smart_budgetColor.scrollContainer::-webkit-scrollbar-thumb {
  background-color: #03d6f9;
}

.caracteristicasColor.scrollContainer::-webkit-scrollbar-thumb {
  background-color: #fc4903;
}

.clienteColor.scrollContainer::-webkit-scrollbar-thumb {
  background-color: #000000;
}

.contactColor.scrollContainer::-webkit-scrollbar-thumb {
  background-color: whitesmoke;
}

/* MAIN SCROLLBAR */

/* ::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}


::-webkit-scrollbar {
  width: 20px;
  background-color: #f5f5f5;
}


::-webkit-scrollbar-thumb {
  border-radius: 10px;
  padding-top: 300px !important;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #34cc02;
} */

span {
  font-family: Helvetica;
}

/* ANIMACION DE ENTRADA DE SIDEBAR!!!! */

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2019-11-3 1:35:31
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
</style>
