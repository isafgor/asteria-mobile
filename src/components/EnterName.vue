<template>
<v-container class="d-flex flex-column justify-center align-center mt-11">
    <h3 class="asteria__welcome mb-3">Здравствуйте</h3>
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
        name: ''
    })
}
</script>

<style lang="scss" scoped>
.button-center {
    width: 100%;
    position: absolute;
    bottom: 22px;
}
</style>
