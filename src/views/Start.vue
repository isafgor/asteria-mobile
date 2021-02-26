<template>
<div class="darkula">
    <EnterName v-if="step === 1" @nextStep="nextStep" />
    <EnterDate v-else-if="step === 2"/>
</div>
</template>

<script>
import EnterName from "../components/EnterName";
import EnterDate from "../components/EnterDate";
export default {
    name: "Start",
    components: {EnterDate, EnterName},
    data: () => ({
       step: 1,
    }),
    methods: {
        nextStep () {
            this.step++
        }
    }
}
</script>

<style scoped>

</style>
