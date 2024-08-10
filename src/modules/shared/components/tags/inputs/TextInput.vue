<template>
  <input :name="props.name" v-model="value" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  defaultValue: {
    type: [String, Number],
    default: null,
  },
  class: {
    type: String,
    default: '',
  },
});

const { value } = useField(props.name, undefined, {
  initialValue: props.defaultValue,
});
</script>
