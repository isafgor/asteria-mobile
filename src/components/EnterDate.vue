<template>
    <v-container class="d-flex flex-column darkula justify-center align-center">
        <h3 class="asteria__welcome mb-3 mt-11">Последний шаг</h3>
        <h2 class="asteria__headline mb-6">Укажите дату <br> рождения</h2>
        <img :src="require('@/assets/img/start/moon.svg')"alt="">
        <v-text-field
                placeholder="Введите дату"
                v-model="date"
                outlined
                class="asteria__input mt-8"
                color="#FF8868"
                height="48px"
                v-mask="'##/##/####'"
        >
            <template v-slot:append>
                <v-icon class="calendar-icon" color="#FF8868">mdi-calendar</v-icon>
            </template>
        </v-text-field>
        <div class="button-center d-flex justify-center">
            <v-btn
                    rounded
                    class="asteria__button"
                    :disabled="date === ''"
            >
                Продолжить
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "EnterDate",
        data: () => ({
            date: '',
        })
    }
</script>

<style lang="scss" scoped>
    .button-center {
        width: 100vw;
        height: 100%;
        padding-top: 170px;
        background: #1D1D22;
    }
    .calendar-icon {
        margin-top: -4px !important;
    }
</style>
