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
          <div id="scrollDiv" class="force-overflow">
            <div id="somos_2" style="height: 100vh !important;"></div>
            <div id="mira_el_video_2" style="height: 100vh !important;"></div>
          </div>
        </div>
      </div>

      <div class="md-layout-item md-size-80" style="z-index:100;">
        <md-list>
          <md-list-item style="cursor:pointer;"   v-scroll-to="'#somos'" @click="scrollToPoint(150)">
            <a style="padding-left: 20px; z-index:100" href="#somos_2" class="md-body-1">SOMOS</a>
          </md-list-item>
          <md-list-item  v-scroll-to="'#mira_el_video'" style="padding-top:7vh; cursor:pointer;" @click="scrollToPoint(1750)">
            <a href='#mira_el_video_2' style="padding-left: 20px; z-index:100" class="md-body-1">MIRA EL VIDEO</a>
          </md-list-item>
          <md-list-item v-scroll-to="'#smart_budget'" style="padding-top:7vh; cursor:pointer;" @click="scrollToPoint(3300)">
            <a style="padding-left: 20px;" class="md-body-1">SMARTBUDGET</a>
          </md-list-item>
          <md-list-item v-scroll-to="'#caracteristicas'" style="padding-top:7vh; cursor:pointer;" @click="scrollToPoint(4850)">
            <a style="padding-left: 20px;" class="md-body-1">CARACTERISTICAS</a>
          </md-list-item>
          <md-list-item v-scroll-to="'#clientes'" style="padding-top:7vh; cursor:pointer;" @click="scrollToPoint(6450)">
            <a style="padding-left: 20px;" class="md-body-1">CLIENTES</a>
          </md-list-item>
          <md-list-item v-scroll-to="'#contacto'" style="padding-top:7vh; cursor:pointer;" @click="scrollToPoint(8000)">
            <a style="padding-left: 20px;" class="md-body-1">CONTACTO</a>
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
import welcome from '../../pages/landing_page/welcome'
import $ from 'jquery'
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
    },

  scrollToPoint(n){
    console.log('scroll')
    $("#style-1").scrollTop(n);
  }
  },
  computed: {
    sidebarStyle() {
      return {
        // backgroundImage: `url(${this.backgroundImage})`
      };
    }
  },
  components:{
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
  padding-top: 300px !important;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #34cc02;
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


</style>
