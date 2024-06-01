<template>
  <div class="container flex flex-col mx-auto px-8 min-h-screen">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
