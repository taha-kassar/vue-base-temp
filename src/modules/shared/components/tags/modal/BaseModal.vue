<template>
  <Teleport to="body">
    <Transition name="nested">
      <div v-if="show" class="outer">
        <div class="fixed inset-0 bg-black/80 opacity-40"></div>

        <div class="fixed inset-0 flex items-center justify-center inner">
          <div class="bg-white rounded-md">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>
