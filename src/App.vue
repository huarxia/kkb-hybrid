<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css';
import fontSize from './common/lib/fontSize';
fontSize(document, window);
export default {
    name: 'app'
};
</script>
<style type="text/css" src="font-awesome/css/font-awesome.min.css"></style>
<style type="text/css" src="mint-ui/lib/style.min.css"></style>
<style src="./assets/style/common.scss"></style>
