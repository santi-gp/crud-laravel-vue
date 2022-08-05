### Install modules
```bash
npm install 
```
### Install vue, vue-loader, axios, y vue-router
```bash
npm install vue@next vue-loader@next vue-router@next
```
### Install vitejs/plugin-vue plugin
```bash
npm i @vitejs/plugin-vue
```
### Edit /routes/api.php folder amd write
```php
Route::resource('movie', MovieController::class);
```
### Edit vite.config file amd write
```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/main.css',
                // save in this route the css file, example main.css
                'resources/js/vue/app.js'
                // save in this route app.js file
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
```
### Create app.js file 
* Create in the **/resources/js** folder the **app.js** file
```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```


