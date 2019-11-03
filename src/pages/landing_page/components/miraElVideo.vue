<template>
  <div style="heigth: 100vh;">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <div class="player_overlay">
          <video
            width="400"
            controls
            poster="../../../../public/video/video_presentation.png"
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
}
</style>