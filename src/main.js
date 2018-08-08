import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements as defineMolecule } from '@openchemistry/molecule-vtkjs';
import { defineCustomElements as defineSplitMe } from 'split-me';

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
