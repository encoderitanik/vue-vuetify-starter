# Vue Vuetify Starter

##### Project setup
```
yarn install
yarn serve
yarn build
```

##### Folder structure

```
/node_modules
/public
/src
│   /api
|   /assets
|   |   /css
|   |   |   variables.scss
|   |   /fonts
|   |   /images
|   |   /scss
|   |   |   _fonts.scss
|   |   |   _mixins.scss
|   |   |   _responsive.scss
|   |   |   _styles.scss
|   |   |   _utils.scss
|   |   |   _variables.scss
|   |   |   main.scss
|   |   /svg
|   /components
|   |   ...
│   /layouts
|   |   Default.vue    
|   |   ...
│   /plugins
|   |   vuetify.js
|   |   ...
|   /router
|   /storage
|   /store
|   |   /modules
|   |   |   module.store.js
|   |   |   ...
|   |   |   index.js
|   |   index.js
|   /views
|   |   ...
|   App.vue
|   consts.js
|   helper.js
|   main.js
|   registerServiceWorker.js
.editorconfig
.env
.env.example
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
  For component file name we will user `PascalCase` or `kebab-case` like examples below,<br>
  ```
  // do this
  TodoList.vue
  todo-list.vue

  // not this
  Todo-List.vue
  todoList.vue
  todolist.vue
  todo_list.vue
  ```
  <br>
- Component Registration<br>
  Same as Component name.`PascalCase` or `kebab-case`.
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
  For using.
  ```jsx
  <MyComponent/>
  ```
  or
  ```jsx
  <my-component>
      // ...
  </my-component>
  ```
- Folder name<br>
  We will use `kebab-case`.
  ```
  /auth
  /components
  |   /utils
  |   /folder-name
  |   ...
  ```
- Variables<br>
  We will use `camelCase` but for global constants we will use a `_` before variable name
  </sup>
  ```js
  // variables
  let firstName = 'John'
  let lastName = 'Doe'
  const authAPI = axios.create({})

  // global constsants
  const _baseURL = '/'
  ```