<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  // components: {
  //   HelloWorld, 
  // },
  data: () => ({
    //
  }),
};
</script>
