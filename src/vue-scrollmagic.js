import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

const sceneMap = {};
let controller = null

export default class VueScrollMagic {
  constructor() {}
}

VueScrollMagic.install = function (Vue, options) {
  controller = new ScrollMagic.Controller(options);

  Vue.directive('scrollmagic', {
    inserted (el, binding) {
      const name = binding.value.name;
      const options = binding.value.options || {};
      const events = binding.value.events || {};
      const setTween = binding.value.setTween || {};
      options.triggerElement = el;
      sceneMap[name] = new ScrollMagic.Scene(options).addTo(controller);
      for (let k in events) {
        sceneMap[name].on(k, events[k]);
      }
      if (setTween !== undefined) {
        const target = setTween.target || el;
        const duration = setTween.duration;
        const params = setTween.params;
        if (duration === undefined) {
          sceneMap[name].setTween(target, params);
        } else {
          sceneMap[name].setTween(target, duration, params);
        }
      }
    },
    unbind (el, binding) {
      const name = binding.value.name;
      sceneMap[name].destroy(true);
      delete sceneMap[name];
    }
  });

  Vue.prototype.$scrollmagic = ScrollMagic;
  Vue.prototype.$scrollmagic.controller = controller;
  Vue.prototype.$scrollmagic.scene = sceneMap;
};