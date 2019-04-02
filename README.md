# vue-scrollmagic
ScrollMagicのVueカスタムディレクティブ 

[DEMO](https://ohagip.github.io/vue-scrollmagic/)

## Dependencies
```
npm i --save scrollmagic
npm i --save gsap
npm i --save-dev imports-loader
```

## Install
`./src/vue-scrollmagic.js`をコピー

## Usage
```
import VueScrollMagic from './vue-scrollmagic.js'

Vue.use(VueScrollMagic, controllerOptions)

<div v-scrollmagic="sceneOptions"></div>

mounted() {
  console.log(this.$scrollmagic)
  console.log(this.$scrollmagic.controller)
  console.log(this.$scrollmagic.scene['scene name'])
}
```

## Documentation
[http://scrollmagic.io](http://scrollmagic.io/)

### controllerOptions
[Controller options](http://scrollmagic.io/docs/ScrollMagic.Controller.html#constructor)

### sceneOptions
```
{
  name: 'scene name', // nameをもとにSceneのインスタンスにアクセス
  options: {}, // Scene options
  events: { // Scene events
    enter: (e) => {
      const elm = e.currentTarget.triggerElement()
      elm.classList.add('is-show')
    }
  },
  setTween: {} // Scene.setTween options
}
```
[Scene options](http://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor)  
[Scene events](http://scrollmagic.io/docs/ScrollMagic.Scene.html#event:enter)  
[Scene.setTween options](http://scrollmagic.io/docs/animation.GSAP.html#Scene.setTween)  

---
# Vue CLI npm script


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
