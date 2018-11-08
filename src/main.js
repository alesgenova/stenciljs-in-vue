import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements as defineMolecule } from '@openchemistry/molecule-vtkjs/dist/loader';
import { defineCustomElements as defineSplitMe } from 'split-me/dist/loader';

defineMolecule(window);
defineSplitMe(window);

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  /^oc-/,
  'split-me'
];

new Vue({
  render: h => h(App)
}).$mount('#app')
