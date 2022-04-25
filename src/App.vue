<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/actions">Actions</RouterLink>
        <a href="#" @click="$oidc.signIn()">SignIn</a>
        <a href="#" @click="$oidc.signOut()">SignOut</a>
      </nav>
    </div>
  </header>

  <router-view />
</template>