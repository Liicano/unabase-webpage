<template>
  <div style="heigth: 100vh;">
    <div class="md-layout">
      <div
        class="md-layout-item md-size-100 md-medium-size-100 md-large-size-100 md-xlarge-size-90"
      >
        <div class="player_overlay desktopVideo">
          <video
            width="400"
            controls
            poster="../../../../public/img/video_placeholder_desktop.png"
            preload="none"
            onclick="this.play()"
          >
            <source src="../../../../public/video/presentation.webm" type="video/webm" />
          </video>
        </div>

        <div class="player_overlay mobileVideo">
          <video
            width="400"
            controls
            poster="../../../../public/img/video_placeholder_mobile.png"
            preload="none"
            onclick="this.play()"
          >
            <source src="../../../../public/video/presentation.webm" type="video/webm" />
          </video>
        </div>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style>
video {
  display: block;
  width: 100% !important;
  height: 100% !important;
}

@media (min-width: 992px) {
  .player_overlay {
    margin-top: 10%;
  }

  .mobileVideo {
    display: none;
  }
}

@media (max-width: 992px) {
  .player_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .desktopVideo {
    display: none;
  }
}
</style>