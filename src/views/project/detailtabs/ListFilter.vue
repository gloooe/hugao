<template>
  <div>
    筛选条件
  </div>
</template>
<script type="text/babel">
export default {
  inject: ["reload"],
  methods: {
    refresh() {
      this.reload();
    }
  }
};
</script>
