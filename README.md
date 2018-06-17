# Stencil components in Vue

[Stencil](https://stenciljs.com/) is not a JS framework. It is a compiler that produces a reusable web component that can be embedded anywhere else.

This is a step by step guide to consume a non-trivial stencil component in a [Vue](https://vuejs.org/) app.

The starter Vue app was created with [Vue CLI](https://cli.vuejs.org/).

## Similar guides
- [Stencil components in React](https://github.com/alesgenova/stenciljs-in-react.git)
- [Stencil components in Angular](https://github.com/alesgenova/stenciljs-in-angular.git)

## Table of contents
- [Add the component to the dependencies](#1-add-the-component-to-the-dependencies)
- [Load the component](#2-load-the-component)
- [Consume the component](#3-consume-the-component)
- [Appendix: Attribute vs Prop](#appendix-attribute-vs-prop)

## 0: Build a stenciljs component and publish it to npm
Creating your first stencil component is very easy and it is well documented [here](https://stenciljs.com/docs/my-first-component). 

This example will consume the [@openchemistry/molecule-moljs](https://github.com/OpenChemistry/oc-web-components/tree/master/packages/molecule-moljs) component.

## 1: Add the component to the dependencies

Add the component to the app dependencies in `package.json`

```json
// package.json

"dependencies": {
  ...
  "@openchemistry/molecule-moljs": "^0.0.7"
}
```

In order to have the component code bundled with the app, copy the `dist/` folder of the component into the `public/` folder of the app. This can be automated by adding a `postinstall` command.

```json
// package.json

"scripts": {
    ...
    "postinstall": "cp -R node_modules/@openchemistry/molecule-moljs/dist public/molecule-moljs"
  }
```

## 2: Load the component
Now that the component code is in the `public/molecule-moljs` folder, add the following to the `public/index.html` file.
```html
<script src="molecule-moljs/molecule-moljs.js"></script>
```

## 3: Consume the component
To prevent Vue from complaining that your component has an unrecognized tag, add the following in `main.js`. Use either the full name, or regex if you want to capture a family of components.
```js
Vue.config.ignoredElements = [
  "oc-molecule-moljs"
];
```

It is now possible to use the tag provided by the stencil component in any template of the app.

```html
<oc-molecule-moljs v-bind:cjson.prop="molecule" />
```

## Appendix: Attribute vs Prop
`oc-molecule-moljs` has a property named `cjson` that expects an object (or a JSON.stringified object).

Strings can be passed directly as attributes to a stencil component.
```html
<oc-molecule-moljs v-bind:cjson="moleculeStr" />
```

While this would work, it is probably a good idea to avoid the `JSON.stringify()` and `JSON.parse()` and directly pass the object itself to the component.

Vue provides a way to explicitly pass the object as a property rather than an attribute, it is as simple as adding `.prop` to the property name of the stencil component.

```html
<oc-molecule-moljs v-bind:cjson.prop="molecule" />
```
