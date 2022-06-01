<template>
  <div v-if="loading">
    <h4>Loading...</h4>
  </div>
  <div v-else>
    <Meeting
        v-for="meeting in meetings"
        :key="meeting.id"
        :meeting="meeting"
    />
  </div>
</template>

<script>
import Meeting from "@/components/meeting/Meeting.vue";
import {getMeetings} from "@/api/meetings.ts";
import mainOidc from "@/oidc";
export default {
  components: {Meeting},
  data() {
    return  {
      meetings: [],
      loading: true
    }
  },
  mounted() {
    this.fetchData();
  },
  methods:{
    async fetchData(){
      this.loading = true;
      await getMeetings(mainOidc.accessToken).then(response => this.meetings = response);
      this.loading = false;
    }
  }
}
</script>

<style scoped>

</style>