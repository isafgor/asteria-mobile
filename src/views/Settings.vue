<template>
  <div class="asteria-settings">
    <v-list
            nav
            dense
            class="mt-5"
            color="#241F26"
    >
      <v-list-item class="mb-11 back-route" @click="$router.go(-1)">
        <img class="mr-2" :src="require('@/assets/img/settings/arrow.svg')" alt="">

        <v-list-item-title>
          Настройки
        </v-list-item-title>
      </v-list-item>
      <v-list-item-group
      >
        <v-list-item v-for="item of items" :key="item.id" @click="routeTo(item.route)">

          <v-list-item-icon>
            <img :src="require(`@/assets/img/settings/${item.icon}.svg`)" alt="">
          </v-list-item-icon>

          <v-list-item-title class="d-flex justify-space-between align-center">
            {{item.name}}
          </v-list-item-title>
        </v-list-item>

      </v-list-item-group>
      <div class="asteria-app">
        Астерия
        <br>
        <small>Версия 1.0.3</small>
      </div>
    </v-list>
    <a class="saftech-mark" href="https://thesaftech.com">
      <img :src="require('@/assets/img/settings/saftech-mark.svg')" alt="">
    </a>
  </div>
</template>

<script>

  export default {
    name: 'Settings',
    data: () => ({
      items: [
        {
          id: 1,
          name: 'Сменить данные пользователя',
          route: '/start',
          icon: 'mdi-user'
        },
        {
          id: 3,
          name: 'Поддержка',
          route: '/support',
          icon: 'mdi-support'
        },
        {
          id: 4,
          name: 'Политика конфиденциальности',
          route: 'https://policy.asteria.space/',
          icon: 'mdi-list'
        },
      ]
    }),
    methods: {
      routeTo (route) {
        if(!route.includes('https')) {
          this.$router.push({path: route})
        } else {
          window.location.href = route
        }
      }
    }
  }
</script>

<style lang="scss">
  .asteria-settings {
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

    .asteria-app {
      font-family: Montserrat;
      margin-left: 44px;
      margin-top: 23px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #EEEEEE;
      small {
        font-size: 12px;
        line-height: 99%;
        /* identical to box height, or 12px */
        color: #56595A;
      }
    }
  }
</style>
