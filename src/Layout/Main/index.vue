<template>
  <div class="">
    <tagview class="tagview"></tagview>
      <router-view/>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import tagview from '../../components/tagview/index.vue'
import { useStore } from 'vuex';
const store = useStore()
const taglists = computed(() => {
  return store.state.taglist
})
console.log(taglists)
//  import { useRouter, useRoute } from 'vue-router';

</script>

<style lang="scss">
.tagview{
  width: 100%;
  height: 100px;
  background-color: aqua;
  margin: 0;
  padding: 0;
}
</style>