<template>
  <v-main>
    <v-container>
      <v-list>
        <v-list-item v-for="post of gotchaPosts" :key="post.title">
          <NuxtLink
            :to="`gotcha/${post.slug}`"
            class="no-deco list-item--split"
          >
            <v-list-item-content>
              <v-list-item-title v-text="post.title" />
              <v-list-item-subtitle v-text="post.keyword" />
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="post.date" />
            </v-list-item-action>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const gotchaPosts = await $content('gotcha', params.slug)
      .only(['title', 'date', 'keyword', 'slug'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      gotchaPosts
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item--split {
  display: flex;
  align-items: center;
  flex: 1 1 100%;
}
</style>