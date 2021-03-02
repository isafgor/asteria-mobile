<template>
    <div class="asteria-support darkula">
        <div class="back-route mt-9 ml-4 d-flex justify-start align-center" @click="$router.go(-1)">
            <img class="mr-2" :src="require('@/assets/img/settings/arrow.svg')" alt="">
            Поддержка
        </div>
        <div class="d-flex flex-column align-center mt-11">
            <v-text-field
                    placeholder="Почта"
                    v-model="email"
                    outlined
                    class="asteria__input mt-3"
                    color="#FF8868"
                    height="48px"
                    :rules="emailRules"
            />
            <v-textarea
                    placeholder="Сообщение"
                    v-model="text"
                    outlined
                    class="asteria__input mt-3"
                    color="#FF8868"
                    no-resize
            />
        </div>
        <div class="button-center d-flex justify-center">
            <v-btn
                    rounded
                    class="asteria__button"
                    :disabled="!btnEnabled"
                    @click="sendFeedback"
            >
                Отправить
            </v-btn>
        </div>
        <v-snackbar
                v-model="snackbar"
                :timeout="timeout"
        >
            <p class="snackbar-text">Ваше сообщение отправлено</p>
        </v-snackbar>
        <a class="saftech-mark" href="https://thesaftech.com">
            <img :src="require('@/assets/img/settings/saftech-mark.svg')" alt="">
        </a>
    </div>
</template>

<script>
export default {
    name: "Support",
    data: () => ({
        email: '',
        text: '',
        snackbar: false,
        emailRules: [(v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Неверный формат E-mail'],
        timeout: 2000,
    }),
    computed: {
        btnEnabled () {
            return !!(
                this.email && this.text && this.emailRules[0](this.email) === true
            )
        }
    },
    methods: {
        sendFeedback () {
            this.$store.dispatch('support/sendFeedback', {
                name: this.email,
                text: this.text
            }).then(() => {
                this.text = ''
                this.snackbar = true
            })
        }
    }
}
</script>

<style lang="scss">
    .asteria-support {
        background: #241F26;
        .back-route {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 143%;
            color: #FFFFFF;
        }

        .saftech-mark {
            position: absolute;
            bottom: 15px;
            left: 0;
            width: 100%;
            display: flex !important;
            justify-content: center;
        }

        .asteria__input {
            max-width: 308px;
        }

        .snackbar-text {
            margin-bottom: 0;
            color: #FF8868;
        }
    }
</style>
