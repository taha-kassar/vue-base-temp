<template>
  <div>
    {{ data?.title }}
  </div>
</template>

<script setup lang="ts">
import { useGet } from '@/modules/shared';
import { useRoute } from 'vue-router';

const { params } = useRoute();
const { data } = useGet<{ title: string }>(`products/${params.id}`);
</script>
