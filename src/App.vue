<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import mainOidc from "@/oidc";
import "bootstrap/dist/css/bootstrap.min.css"
import * as Bootstrap from 'bootstrap'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Actionlogger</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link"><RouterLink to="/">Home</RouterLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><RouterLink to="/about">About</RouterLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><RouterLink to="/meetings">Meetings</RouterLink></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" v-if="mainOidc.isAuthenticated"  href="#" @click="mainOidc.signOut()">SignOut</a>
                <a class="nav-link" v-else href="#" @click="mainOidc.signIn()">SignIn</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <router-view />
</template>