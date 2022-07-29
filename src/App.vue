<template>
<div class="main-container">
  <TheHeader/>
  <TheContent/>
</div>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue'
import TheContent from './components/layout/TheContent.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheContent
}
}
</script>

<style>
@import url(./css/main.css);
@import url(./css/base.css);
</style>
