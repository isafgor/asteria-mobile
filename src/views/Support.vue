<template>
    <div class="asteria-support">
        <v-list-item class="mb-11 back-route" @click="$router.go(-1)">
            <img class="mr-2" :src="require('@/assets/img/settings/arrow.svg')" alt="">

            <v-list-item-title>
                Настройки
            </v-list-item-title>
        </v-list-item>
        <a class="saftech-mark" href="https://thesaftech.com">
            <img :src="require('@/assets/img/settings/saftech-mark.svg')" alt="">
        </a>
    </div>
</template>

<script>
export default {
    name: "Support"
}
</script>

<style lang="scss">
    .asteria-support {
        .back-route {
            .v-list-item__title {
                color: #FFFFFF !important;
                font-weight: 600 !important;
                font-size: 16px !important;
                line-height: 143% !important;
            }
        }

        .saftech-mark {
            position: absolute;
            bottom: 15px;
            left: 0;
            width: 100%;
            display: flex !important;
            justify-content: center;
        }
    }
</style>
