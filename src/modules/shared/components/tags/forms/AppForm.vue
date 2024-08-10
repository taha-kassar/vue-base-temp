<script setup lang="ts">
import { type PropType } from 'vue'

import { useProvideForm } from '@/modules/shared/composables'

const props = defineProps({
  onSubmit: {
    type: Function as PropType<(values: Record<string, any>) => void>,
    required: true
  }
})

const { handleSubmit } = useProvideForm()

const _onSubmit = handleSubmit((values) => {
  props.onSubmit(values)
})
</script>

<template>
  <form @submit.prevent="_onSubmit" v-bind="$attrs">
    <slot></slot>
  </form>
</template>
