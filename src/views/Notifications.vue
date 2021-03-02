<template>
    <div class="asteria-notifications darkula">
        <div class="back-route mt-9 ml-4 d-flex justify-start align-center" @click="$router.go(-1)">
            <img class="mr-2" :src="require('@/assets/img/settings/arrow.svg')" alt="">
            Уведомления
        </div>
        <v-switch
            v-model="notifications"
            :label="notifications ? 'Вкл' : 'Выкл'"
            color="#FF8868"
            class="ml-6 mt-6 asteria-notifications__switch"
            inset
        />
        <p class="asteria-notifications__text ml-6">Уведомления помогают нам отправлять ежедневный прогноз для Вас, {{name}}</p>
    </div>
</template>

<script>
export default {
    name: "Notifications",
    data: () => ({
        notifications: true,
    }),
    computed: {
        name () {
            return localStorage.name
        }
    }
}
</script>

<style lang="scss">
    .asteria-notifications {
        background: #241F26;
        .back-route {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 143%;
            color: #FFFFFF;
        }
        &__switch {
            .v-input__control {
                label {
                    color: #FFFFFF;
                }
            }
            &.v-input--is-label-active {
                .v-input__control {
                    label {
                        color: #FF8868;
                    }
                }
                .v-input--switch__track {
                    background: #FF8868;
                }
            }
            .v-input--selection-controls__ripple {
                &:before {
                    display: none !important;
                }
            }
            .v-input--switch__track {
                background: grey;
            }
        }
        &__text {
            color: #56595A
        }
    }
</style>
