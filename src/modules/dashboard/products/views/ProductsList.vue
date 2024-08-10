<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useGet } from '@/modules/shared';

import { ProductCard } from '../components';

const { data } = useGet<{ id: string; title: string; image: string }[]>('products');
const { push } = useRouter();

const onClickProduct = (id: string) => {
  push({
    name: 'product-details',
    params: { id },
  });
};
</script>

<template>
  <ul class="flex flex-wrap bg-gray/20 gap-4 mt-20">
    <template v-for="(item, i) in data" v-bind:key="i">
      <ProductCard
        :name="item.title"
        :imgUrl="item.image"
        :actions="[() => onClickProduct(item.id)]"
      />
    </template>
  </ul>
</template>
