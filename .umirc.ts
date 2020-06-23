import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  sass: {
    implementation: require('node-sass'),
  },
  dva: {},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
