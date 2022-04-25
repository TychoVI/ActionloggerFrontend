<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import mainOidc from "@/oidc";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/actions">Actions</RouterLink>
        <a href="#" @click="mainOidc.signIn()">SignIn</a>
        <a href="#" @click="mainOidc.signOut()">SignOut</a>
      </nav>
    </div>
  </header>

  <router-view />
</template>