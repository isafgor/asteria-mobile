<template>
<v-container class="d-flex flex-column darkula justify-center align-center">
    <h3 class="asteria__welcome mb-3 mt-11">Здравствуйте</h3>
    <h2 class="asteria__headline mb-6">Как Вас зовут?</h2>
    <img :src="require('@/assets/img/start/saturn.svg')"alt="">
    <v-text-field
            placeholder="Имя"
            v-model="name"
            outlined
            class="asteria__input mt-8"
            color="#FF8868"
            height="48px"
    />
    <div class="button-center d-flex justify-center">
        <v-btn
                rounded
                class="asteria__button"
                :disabled="name === ''"
                @click="next"
        >
            Продолжить
        </v-btn>
    </div>
</v-container>
</template>

<script>
export default {
    name: "EnterName",
    data: () => ({
        name: '',
    }),
    methods: {
        next () {
            localStorage.name = this.name
            this.$emit('nextStep')
        }
    },
    mounted () {
        if (localStorage.name) {
            this.name = localStorage.name
        }
    }
}
</script>

<style lang="scss" scoped>
.button-center {
    width: 100vw;
    height: 100%;
    padding-top: 100px;
    background: #1D1D22;
}
</style>
