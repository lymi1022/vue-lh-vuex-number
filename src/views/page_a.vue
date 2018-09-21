<template>
  <div>
    <count type="text" v-model="moduleNumberA" @add="handleAdd($event, 'page_a')" @reduce="handleReduce($event, 'page_a')"></count>
  </div>
</template>
<script>
import Count from './_count'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Count
  },
  data () {
    return {
      // numberA: 4
    }
  },
  computed: {
    ...mapState('moduleA', {
      moduleNumberA: 'moduleNumberA'
    })
  },
  methods: {
    ...mapActions('moduleA', {
      add: 'add',
      reduce: 'reduce'
    }),
    handleAdd (v, page) {
      this.add({val: v, page: page})
    },
    handleReduce (v, page) {
      this.reduce({val: v, page: page})
    }
  }
}
</script>
