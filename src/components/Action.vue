<template>
  <h4>{{ action.id }}</h4>
  <h5>{{ action.task }}</h5>
</template>

<script>
export default {
  name: "Action",
  props: ['action']
}
</script>

<style scoped>

</style>