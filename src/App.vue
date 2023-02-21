<script setup>
import Head from "@/components/Head/index.vue";
import Body from "@/components/Body/index.vue";
import LeftSide from "@/components/LeftSide/index.vue";
// import RightSide from "@/components/RightSide/index.vue";
</script>

<template>
  <div ref="screenRef" class="relative w-1920px h-1080px" bg="black">
    <Head class="absolute top-0 left-0 right-0 z-1"></Head>
    <Body class="absolute top-0 left-0 right-0 bottom-0"></Body>
    <LeftSide class="absolute top-0 left-0 bottom-0 z-2"></LeftSide>
  </div>
</template>

<style scoped></style>
