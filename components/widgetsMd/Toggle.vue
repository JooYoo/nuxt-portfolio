<template>
  <details>
    <summary>{{title}}</summary>
    <slot />
  </details>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title'],
}
</script>

