<template>
  <div style="heigth: 100vh;">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Y5oXr9ASHR8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <!-- <video width="400" controls style="margin-top:10%;">
          <source src="https://www.youtube.com/watch?v=Y5oXr9ASHR8" type="video/mp4" />
        </video>-->
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
  width: 100%;
  height: 100vh;
}
</style>