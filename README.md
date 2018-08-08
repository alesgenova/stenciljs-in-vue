# Stencil components in Vue

[Stencil](https://stenciljs.com/) is not a JS framework. It is a compiler that produces a reusable web component that can be embedded anywhere else.

This is a step by step guide to consume a non-trivial stencil component in a [Vue](https://vuejs.org/) app.

The starter Vue app was created with [Vue CLI](https://cli.vuejs.org/).

## Similar guides
- [Stencil components in React](https://github.com/alesgenova/stenciljs-in-react.git)
- [Stencil components in Angular](https://github.com/alesgenova/stenciljs-in-angular.git)

## Table of contents
- [Add the component(s) to the dependencies](#1-add-the-components-to-the-dependencies)
- [Import the component(s)](#2-import-the-components)
- [Consume the component](#3-consume-the-component)
- [Appendix: Attribute vs Prop](#appendix-attribute-vs-prop)

## 0: Build a stenciljs component and publish it to npm
Creating your first stencil component is very easy and it is well documented [here](https://stenciljs.com/docs/my-first-component). 

This example will consume two components:
- [@openchemistry/molecule-vtkjs](https://github.com/OpenChemistry/oc-web-components/tree/master/packages/molecule-vtkjs) : To display molecular structures
- [split-me](https://github.com/alesgenova/split-me) : To create resizable split layouts

## 1: Add the component(s) to the dependencies

Add the component to the app dependencies in `package.json`

```json
// package.json

"dependencies": {
  ...
  "@openchemistry/molecule-vtkjs": "^0.1.9",
  "split-me": "^0.3.1"
}
```

## 2: Import the component(s)
Import the component in the `main.js` of the app:
```js
import { defineCustomElements as defineMolecule } from '@openchemistry/molecule-vtkjs';
import { defineCustomElements as defineSplitMe } from 'split-me';

defineMolecule(window);
defineSplitMe(window);
```

## 3: Consume the component
To prevent Vue from complaining that your component has an unrecognized tag, add the following in `main.js`. Use either the full name, or regex if you want to capture a family of components.
```js
Vue.config.ignoredElements = [
  "oc-molecule-vtkjs",
  "split-me"
];
```

It is now possible to use the tag provided by the stencil component in any template of the app.

```html
<oc-molecule-vtkjs v-bind:cjson.prop="molecule" />
```

## Appendix: Attribute vs Prop
`oc-molecule-vtkjs` has a property named `cjson` that expects an object (or a JSON.stringified object).

Strings can be passed directly as attributes to a stencil component.
```html
<oc-molecule-vtkjs v-bind:cjson="moleculeStr" />
```

While this would work, it is probably a good idea to avoid the `JSON.stringify()` and `JSON.parse()` and directly pass the object itself to the component.

Vue provides a way to explicitly pass the object as a property rather than an attribute, it is as simple as adding `.prop` to the property name of the stencil component.

```html
<oc-molecule-vtkjs v-bind:cjson.prop="molecule" />
```
