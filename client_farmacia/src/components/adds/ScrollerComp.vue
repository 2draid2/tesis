<template>
   <div class="overflow-hidden">
       <div ref="$mainContent" class="overflow-y-auto" :style="{ 'max-height': maxHeight }">
           <slot />
       </div>
   </div>
</template>
<script>
export default {
   name: "NiceScroller",
   props: {
       sub: {
           type: String,
           default: () => "0px"
       }
   },
   computed: {
       maxHeight() {
           return `calc(100vh - ${this.sub})`;
       }
   }
};
</script>