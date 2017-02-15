<template>
  <div id="">
    <router-view></router-view>
  </div>
</template>
<script type="text/babel">
  export default {
    data () {
      return {
        num1: 10
      }
    }
  }

</script>

<style>
  :root {
    --mainColor: black;
    --danger-theme: {
      color: white;
      border:1px solid sienna;
    };
  }
b{
  color: var(--mainColor);
}
  b {
    background-color: var(--mainColor);
    @apply --danger-theme;
  }

</style>
