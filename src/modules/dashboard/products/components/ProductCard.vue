<template>
  <li class="flex flex-col space-y-3 shadow-lg bg-white rounded-lg w-[24.2%] pb-3">
    <img
      :src="imgUrl"
      alt="photo"
      class="w-full object-cover rounded-t-lg h-44 border-b border-gray/50"
    />
    <Transition mode="out-in">
      <h3 class="text-lg font-bold px-3 truncate overflow-ellipsis w-full" v-show="showButton">
        {{ name }}
      </h3>
    </Transition>

    <AppButton @click="() => (showButton = !showButton)" class="p-2 border rounded-md mx-3">
      View
    </AppButton>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import AppButton from '@/modules/shared/components/tags/buttons/AppButton.vue';

const { name, imgUrl } = defineProps({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
  actions: {
    type: Array<Function>,
  },
});

const showButton = ref(false);
</script>
