<template>
  <v-main>
    <v-container>
      <h1 class="my-10 text-h3 font-weight-thin">Gotcha</h1>

      <v-text-field
        v-model="searchVal"
        outlined
        clearable
        label="Search"
        prepend-inner-icon="mdi-magnify"
        color="grey"
        @input="typeToFilterPosts()"
      ></v-text-field>

      <v-chip-group class="mb-4 mt-n3 chip-group">
        <v-chip
          label
          @click="getAllPosts"
        >
          ALL
        </v-chip>
        <div class="chip-divider"></div>
        <v-chip
          v-for="keyword in uniqueKeywords"
          :key="keyword"
          class="chip"
          outlined
          :color="getChipColor(keyword)"
          @click="clickToFilterPosts(keyword)"
        >
          {{keyword}}
        </v-chip>
      </v-chip-group>
      <v-list>
        <v-list-item
          v-for="post of currentPosts"
          :key="post.title"
          class="px-10 list-item--hover"
        >
          <NuxtLink
            :to="`gotcha/${post.slug}`"
            class="no-deco list-item--split"
          >
            <v-list-item-content>
              <v-list-item-title v-text="post.title" />
              <v-list-item-subtitle v-text="post.keyword" />
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="post.time" />
            </v-list-item-action>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-container>
  </v-main>
</template>

<script>
import { getTechColor } from '~/shared/techService'

export default {
  async asyncData({ $content, params }) {
    const gotchaPosts = await $content('gotcha', params.slug)
      .only(['title', 'time', 'keyword', 'slug'])
      .sortBy('createAt', 'asc')
      .fetch()

    return {
      gotchaPosts,
    }
  },
  data: () => ({
    searchVal: '',
    currentPosts: [],
  }),

  computed: {
    uniqueKeywords() {
      // get a Set collection of all posts keywords
      const uniqueKeywords = [
        ...new Set(this.gotchaPosts.map((post) => post.keyword)),
      ]
      return uniqueKeywords
    },
    getChipColor() {
      return (keyword) => getTechColor(keyword)
    },
  },
  mounted() {
    this.getAllPosts()
  },
  methods: {
    getAllPosts() {
      this.currentPosts = this.gotchaPosts
    },
    // search-box: type to filter posts
    typeToFilterPosts() {
      this.currentPosts = this.gotchaPosts.filter((post) =>
        post.title.toLowerCase().match(this.searchVal.toLowerCase())
      )
    },
    // search-chips: click to filter posts
    clickToFilterPosts(keyword) {
      this.currentPosts = this.gotchaPosts.filter(
        (post) => post.keyword === keyword
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.list-item--split {
  display: flex;
  align-items: center;
  flex: 1 1 100%;
}

.list-item--hover {
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
}

.v-text-field--outlined >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}

.chip {
  cursor: pointer;
}

.chip-divider {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  margin-right: 8px;
}
</style>
