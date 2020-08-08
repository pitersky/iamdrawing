<template>
  <div class="app">
    <header role="banner" class="bg-blue">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center px-5 py-5">
        <router-link
          to="/"
          class="flex items-center text-3xl text-white leading-none uppercase relative"
        >
          <span>Instagram login test</span>
        </router-link>
      </div>
    </header>
    <main role="main">
      <div class="max-w-5xl mx-auto px-5 py-12">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
