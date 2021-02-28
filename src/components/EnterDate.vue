<template>
    <v-container class="d-flex flex-column darkula justify-center align-center">
        <h3 class="asteria__welcome mb-3 mt-11">Последний шаг</h3>
        <h2 class="asteria__headline mb-6">Укажите дату <br> рождения</h2>
        <img :src="require('@/assets/img/start/moon.svg')"alt="">
        <v-text-field
                placeholder="01/01/2021"
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
                    @click="next"
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
        }),
        methods: {
            zodiac(day, month){
                let zodiac =['', 'zodiac-capricorn', 'zodiac-aquarius', 'zodiac-pisces', 'zodiac-aries', 'zodiac-taurus',
                    'zodiac-gemini', 'zodiac-cancer', 'zodiac-leo', 'zodiac-virgo', 'zodiac-libra', 'zodiac-scorpio', 'zodiac-sagittarius', 'zodiac-capricorn'];
                let last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
                return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
            },
            selectSign () {
                let dates = this.date.split('/')
                let day = Number(dates[0])
                let month = Number(dates[1])
                localStorage.selectedZodiac = this.zodiac(day, month)
            },
            next () {
                this.selectSign()
                localStorage.date = this.date
                this.$router.push({path: '/'})
            }
        },
        mounted () {
            if (localStorage.date) {
                this.date = localStorage.date
            }
        }
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
