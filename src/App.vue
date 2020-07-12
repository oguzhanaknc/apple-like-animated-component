<template>
  <div class="wrapper">
    <div class="intro">
      <h1>Apple Like Componenet</h1>
      <video src="./assets/video.mp4"></video>
    </div>
    <section>
      <h1>asdasd</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const intro = document.querySelector(".intro");
    const video = intro.querySelector("video");

    video.load();
    video.loop = false;
    //SCROLLMAGICs
    const scene = this.$scrollmagic
      .scene({
        duration: 2000,
        triggerElement: intro,
        triggerHook: 0
      })
      .addIndicators()
      .setPin(intro);
    this.$scrollmagic.addScene(scene);
    //cideo handlers
    //handler should sbe mosdaqsd2sss  adadss first
    let endtime = 0;
    video.addEventListener(
      "timeupdate",
      function() {
        if (this.currentTime >= endtime) {
          this.pause();
        }
      },
      false
    );
    // Videso Animation
    let lastscroll = 0;
    let scrollpos = 0;

    scene.on("update", async () => {
      scrollpos = window.scrollY / 1000;

      if (lastscroll < scrollpos) {
        endtime = scrollpos + 0.3;
        video.play();
      } else {
        video.currentTime = scrollpos;
      }
      lastscroll = scrollpos;
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  font-family: sans-serif;
}
.intro {
  height: 100vh;
}
.intro video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.intro h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 55px;
  color: white;
}

section {
  height: 100vh;
  color: black;
}
section h1 {
  padding-top: 300px;
  text-align: center;
  font-size: 55px;
}
</style>
