<script lang="ts">
import debug from "../mixins/debugger";

export default {
  mixins: [debug],
  data() {
    return {
      myObj: {
        some: "data",
        other: "values",
      },
    };
  },
  created() {
    console.log(this.debug(this.myObj));
  },
};
</script>

<template>
  <div id="app">
    <pre>{{ debug(myObj) }}</pre>
  </div>
</template>

