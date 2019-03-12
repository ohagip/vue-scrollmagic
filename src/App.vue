<template>
  <div id="app">
    <div class="page page-1"></div>
    <div class="page page-2">
      <div class="scene scene-1" v-scrollmagic="sceneData1">scene1</div>
    </div>
    <div class="page page-3">
      <div class="scene scene-2" v-scrollmagic="sceneData2">scene2</div>
    </div>
    <div class="page page-4"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      sceneData1: {
        name: 'scene1',
        options: {},
        events: {
          enter: (e) => {
            const elm = e.currentTarget.triggerElement()
            elm.classList.add('is-show')
          },
          leave: (e) => {
            const elm = e.currentTarget.triggerElement()
            elm.classList.remove('is-show')
          },
        }
      },

      sceneData2: {
        name: 'scene2',
        options: {
          duration: 300 // enterから300pxで100%になるよにtween
        },
        setTween: {
          // target: , Dom or Selector, 指定がない場合は自身のDOM
          // duration: 1, // 1秒でtween
          params: {
            opacity: 1
          }
        }
      },
    }
  },

  mounted() {
    console.log(this.$scrollmagic)
    console.log(this.$scrollmagic.controller)
    console.log(this.$scrollmagic.scene['scene1'])
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page {
  position: relative;
  height: 100vh;
}

.page-1 { background-color: #eff1f3; }
.page-2 { background-color: #373f51; }
.page-3 { background-color: #457b9d; }
.page-4 { background-color: #c0bcb5; }

.scene {
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  opacity: 0;
  transform: translate(-50%, -50%);
}

.scene-1 {
  transition: opacity .5s linear;
}

.scene.is-show {
  opacity: 1;
}

</style>
