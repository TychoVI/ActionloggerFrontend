<template>
  <button @click="this.fetchData">Refresh</button>
  <div v-if="loading">
    <h4>Loading...</h4>
  </div>
  <div v-else>
    <Action
        v-for="action in actions"
        :key="action.id"
        :action="action"
    />
  </div>
</template>

<script>
import Action from "@/components/Action.vue";
import {getActions} from "@/api/actions.ts";
export default {
  components: {Action},
  data() {
    return  {
      actions: [],
      loading: true
    }
  },
  mounted() {
    this.fetchData();
  },
  methods:{
    async fetchData(){
      this.loading = true;
      await getActions(this.$oidc.accessToken).then(response => this.actions = response);
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>