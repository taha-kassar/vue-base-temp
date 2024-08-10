<script setup lang="ts">
import { computed, onMounted, reactive, type VNode } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AppButton from '../buttons/AppButton.vue';

const slots = defineSlots();
const hashValue = reactive<{ value: string | null }>({ value: null });

const { hash } = useRoute();
const { replace } = useRouter();

onMounted(() => {
  if (!slots.default) {
    throw new Error('Tabs requires a Tab slots.');
  }

  if (hash) hashValue.value = hash.slice(1);
});

const setTab = (title: string) => {
  replace({ hash: `#${title}` });
  hashValue.value = title;
};

const slotsArray = computed(() => {
  const children = slots.default();

  const res = children?.map((slot: any, i: number) => {
    const title: string = slot.props.title;
    const isActive = hashValue.value ? slot.props.title === hashValue.value : i === 0;

    return {
      component: slot as VNode,
      props: { title, isActive },
    };
  });

  return res;
});
</script>

<template>
  <ul class="flex gap-3 mx-5">
    <li v-for="(slot, i) in slotsArray" :key="i">
      <AppButton
        @click="setTab(slot.props.title)"
        :class="[slot.props.isActive ? 'bg-gray/20' : '']"
      >
        {{ slot.props.title }}
      </AppButton>
    </li>
  </ul>

  <ul class="m-5">
    <template v-for="(slot, i) in slotsArray" :key="i">
      <li v-if="slot.props.isActive">
        <component :is="slot.component" />
      </li>
    </template>
  </ul>
</template>
