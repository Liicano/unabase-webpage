<template>
  <div
    class="sidebar"
    style="box-shadow: none !important;"
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

    <div class="md-layout" style="margin-top: 40%;">
      <div class="md-layout-item md-size-20" style="z-index: 1000;">
        <div class="scrollbar" id="style-1">
          <div class="force-overflow"></div>
        </div>
      </div>

      <div class="md-layout-item md-size-80" style="z-index:100;">
        <md-list>
          <md-list-item v-scroll-to="{ element: '#somos', duration: 5000 }">
            <span style="padding-left: 20px; cursor:pointer;" class="md-body-1">SOMOS</span>
          </md-list-item>
          <md-list-item
            v-scroll-to="{ element: '#mira_el_video', duration: 5000 }"
            style="padding-top:35%;cursor:pointer;"
          >
            <span style="padding-left: 20px;cursor:pointer;" class="md-body-1">MIRA EL VIDEO</span>
          </md-list-item>
          <md-list-item
            v-scroll-to="{ element: '#smart_budget', duration: 3000 }"
            style="padding-top:35%;cursor:pointer;"
          >
            <span style="padding-left: 20px;cursor:pointer;" class="md-body-1">SMARTBUDGET</span>
          </md-list-item>
          <md-list-item
            v-scroll-to="{ element: '#caracteristicas', duration: 3000 }"
            style="padding-top:35%;cursor:pointer;"
          >
            <span style="padding-left: 20px;" class="md-body-1">CARACTERISTICAS</span>
          </md-list-item>
          <md-list-item
            v-scroll-to="{ element: '#clientes', duration: 3000 }"
            style="padding-top:35%;cursor:pointer;"
          >
            <span style="padding-left: 20px;" class="md-body-1">CLIENTES</span>
          </md-list-item>
          <md-list-item
            v-scroll-to="{ element: '#contacto', duration: 3000 }"
            style="padding-top:35%;cursor:pointer;"
          >
            <span style="padding-left: 20px;" class="md-body-1">CONTACTO</span>
          </md-list-item>
        </md-list>
      </div>
    </div>
    <!-- <div class="logo">
      <a href="https://www.creative-tim.com" class="simple-text logo-mini" target="_blank">
        <div class="logo-img">
          <img src="../../../public/img/logo_unabase.png" />
        </div>
      </a>

      <div class="navbar-minimize">
        <md-button
          id="minimizeSidebar"
          class="md-round md-just-icon md-transparent"
          @click="minimizeSidebar"
        >
          <i class="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
          <i class="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
        </md-button>
      </div>
    </div>-->
    <!-- <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot></slot>
      <md-list class="nav">
        <slot name="links">
          <sidebar-item v-for="(link, index) in sidebarLinks" :key="link.name + index" :link="link">
            <sidebar-item
              v-for="(subLink, index) in link.children"
              :key="subLink.name + index"
              :link="subLink"
            ></sidebar-item>
          </sidebar-item>
        </slot>
      </md-list>
    </div>-->
  </div>
</template>
<script>
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
    }
  },
  computed: {
    sidebarStyle() {
      return {
        // backgroundImage: `url(${this.backgroundImage})`
      };
    }
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

.scrollbar {
  margin-left: 30px;
  float: left;
  height: 90vh !important;
  width: 20px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.force-overflow {
  min-height: 1550vh;
}

#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 20px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #34cc02;
}
span {
  font-family: Helvetica;
}
</style>
