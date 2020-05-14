<template>
    <TestComponent :test="'test props'"/>
</template>
<script>
import TestComponent from '~/components/TestComponent.vue'

export default {
  components: {
    TestComponent
  }
}
</script>