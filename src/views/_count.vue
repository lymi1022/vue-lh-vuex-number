<template>
  <div>
    <div @click="handleBtn(1)">++</div>
    <input type="text" v-model="valInput">
    <div @click="handleBtn(2)">--</div>
  </div>

</template>

<script>
export default {
  props: ['value'],
  computed: {
    valInput: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  },
  methods: {
    handleBtn (v) {
      if (v === 1) {
        this.$emit('add', this.valInput)
        // this.
      } else {
        this.$emit('reduce', this.valInput)
      }
    }
  }
}
</script>
