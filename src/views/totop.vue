<template>
  <div >
    
 <v-card
    class="mx-auto"
    max-width="1000"
   height="1000"
    outlined
  >
  <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>
      <v-btn bottom dark fab fixed right large color="primary"  v-show="showTop" @click="toTop">
      <v-icon dark>mdi-chevron-up</v-icon>
    </v-btn>

     </div> 
</template>
<script>
  export default {
    name: 'scroll-top',
    data (){
      return {
        scrollTop: 0,
        time: 0,
        dParams: 20,
        scrollState: 0
      }
    },
    computed:{
      showTop: function(){
        let value = this.scrollTop>200?true:false;
        return value;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.getScrollTop);
    },
    methods: {
      toTop(e) {
        if(!!this.scrollState){
          return;
        }
        this.scrollState = 1;
        e.preventDefault();
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        let _this = this;
        this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10);
      },
      gotoTop(distance){
        this.dParams += 20;
        distance = distance>0 ? distance : 0;
        document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
        if(this.scrollTop < 10){
          clearInterval(this.time);
          this.dParams = 20;
          this.scrollState = 0;
        }
      },
      getScrollTop() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    },
   
  }
</script>
<style scoped>
  .scrollTop {
      height: 1000px;
    position: fixed;
    right: 40px;
    bottom: 80px;
    cursor: pointer;
  }
</style>