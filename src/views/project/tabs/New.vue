
<template>
  <div class="page">
    this page includes the top of header and router view of the content
    <header class="mc-header">
      <div class="mc-header-line">
        <span class="mc-button-icon" mc-action="menu"></span>
        <p class="mc-title">Bars</p>
        <div class="mc-right">
          <span class="mc-button-icon" mc-action="download"></span>
          <span class="mc-button-icon" mc-action="share"></span>
        </div>
      </div>
    </header>

    //// this is content page 
        <div class="content" router-view></div>


  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>