<template>
  <div>
    <count type="text" v-model="moduleNumberB" @add="handleAdd($event, 'page_b')" @reduce="handleReduce($event, 'page_b')"></count>
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
      moduleNumberB: 'moduleNumberB'
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
