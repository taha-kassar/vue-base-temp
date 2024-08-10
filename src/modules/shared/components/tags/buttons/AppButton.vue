<template>
  <button
    type="submit"
    class="text-sm rounded-md p-2 shadow-md hover:shadow-lg transition ease-in-out duration-300"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts"></script>
