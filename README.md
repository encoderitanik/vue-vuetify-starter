# Vue Vuetify Starter

##### Project setup
```
yarn install
yarn serve
yarn build
```

##### Folder structure

```
node_modules
public
src
│   api
|   assets
|   |   css
|   |   |   variables.scss
|   |   fonts
|   |   images
|   |   scss
|   |   |   _fonts.scss
|   |   |   _mixins.scss
|   |   |   _responsive.scss
|   |   |   _styles.scss
|   |   |   _utils.scss
|   |   |   _variables.scss
|   |   |   main.scss
|   |   svg
|   components
|   |   ...
│   layouts
|   |   Default.vue    
|   |   ...
│   plugins
|   |   vuetify.js
|   |   ...
|   router
|   storage
|   store
|   |   modules
|   |   |   module.store.js
|   |   |   ...
|   |   |   index.js
|   |   index.js
|   views
|   |   ...
|   App.vue
|   consts.js
|   helper.js
|   main.js
|   registerServiceWorker.js
.editorconfig
.gitignore
babel.config.js
jsconfig.json
package.json
README.md
vue.config.
yarn.lock
```

##### Naming convention

- Vue component<br>
  <sup>For component file name we will user `PascalCase` or `kebab-case` like examples below,<sup><br>

  :heavy_check_mark: TodoList.vue
  :x: Todo-List.vue
  :heavy_check_mark: todo-list.vue
  :x: todoList.vue
  :x: todolist.vue
  <br>
- Component Registration<br>
  <sup>Same as Component name.`PascalCase` or `kebab-case`.<sup>
  ```js
  Vue.component('MyComponent', {
    // ...
  })
  ```
  or
  ```js
  Vue.component('my-component', {
    // ...
  })
  ```
  <sup>For using.<sup>
  ```jsx
  <MyComponent/>
  ```
  or
  ```jsx
  <my-component>
      // ...
  </my-component>
  ```

- Variables<br>
  <sup>We will use `camelCase` but for global contants we will use a `_` before variable name
  </sup>
  ```js
  // variables
  let firstName = 'John'
  let lastName = 'Doe'
  const authAPI = axios.create({})

  // global constsants
  const _baseURL = '/'
  ```