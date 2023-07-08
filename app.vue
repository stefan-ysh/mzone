<template>
  <app-header></app-header>
  <!-- <NuxtPage /> -->
  <div class="flex justify-center">
    <ContentDoc class="prose" style="width: 100%;">
      <template #not-found>
        <NuxtPage />
      </template>
    </ContentDoc>
  </div>
  <app-footer></app-footer>
</template>
