<template>
  <div class="github-app">
    <i class="fa fa-github" aria-hidden="true"></i>
    <SearchInput class="search"></SearchInput>
    <ResultList class="datalist" v-if="!init"></ResultList>
  </div>
</template>

<script>
import SearchInput from './search.vue'
import ResultList from './datalist.vue'
import { mapState } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    SearchInput,
    ResultList
  },
  computed: {
    ...mapState([
        'init'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fa {
    font-size: 128px;
  }

  .github-app {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding-top: 96px;
  }

  .search {
    margin-top: 48px;
  }

   .datalist {
    margin-top: 32px;
   }
</style>
