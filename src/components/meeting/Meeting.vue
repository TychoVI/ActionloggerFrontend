<template>
  <h4>{{ meeting.id }}</h4>
  <h5>{{ meeting.name }}</h5>
</template>

<script>
export default {
  name: "Meeting",
  props: ['meeting']
}
</script>

<style scoped>

</style>