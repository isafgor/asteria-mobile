<template>
<div class="darkula">
    <EnterName v-if="step === 1" />
</div>
</template>

<script>
import EnterName from "../components/EnterName";
export default {
    name: "Start",

    components: {EnterName},
    data: () => ({
       step: 1,
    }),
}
</script>

<style scoped>

</style>
