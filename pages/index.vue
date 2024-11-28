<template>
  <div></div>
</template>
<script setup>
  import { useMainStore } from '~/store/main';

  // const mainStore = useMainStore();
  const router = useRouter();
  // const testStore = computed(() => mainStore.myState)

  useHead({
    title: 'Oro constructions',
  });

  onBeforeMount(() => {
    router.push(`/home`);
  });
</script>
