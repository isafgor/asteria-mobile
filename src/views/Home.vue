<template>
  <v-card
          class="overflow-hidden"
          min-height="100vh"
  >

    <v-app-bar
            color="transparent"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <h2 color="black">{{selectedZodiac.name}}</h2>
    </v-app-bar>

    <v-navigation-drawer
            v-model="drawer"
            absolute
            color="#241F26"
            temporary
            class="asteria-menu"
    >
      <v-list
              nav
              dense
              class="mt-5"
      >
        <v-list-item-group
                v-model="group"
                active-class="item--active"
        >
          <v-list-item v-for="item of zodiac" :key="item.id">

            <v-list-item-icon>
              <v-icon>{{ `mdi-${item.tag}` }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="d-flex justify-space-between align-center">
              {{item.name}}
              <p class="asteria-menu__dates">{{item.dates}}</p>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>

        <v-list-item class="mt-5">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>

          <v-list-item-title>
            Настройки
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <a class="saftech-mark" href="https://thesaftech.com">
        <img :src="require('@/assets/img/home/menu/saftech-mark.png')"alt="" alt="">
      </a>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    drawer: true,
    group: 0,
    zodiac: [
      {
        id: 1,
        tag: 'zodiac-aries',
        name: 'Овен',
        dates: '21 мар - 20 апр',
      },
      {
        id: 2,
        tag: 'zodiac-taurus',
        name: 'Телец',
        dates: '21 апр - 21 мая',
      },
      {
        id: 3,
        tag: 'zodiac-gemini',
        name: 'Близнецы',
        dates: '22 мая - 21 июн',
      },
      {
        id: 4,
        tag: 'zodiac-cancer',
        name: 'Рак',
        dates: '22 июн - 22 июл',
      },
      {
        id: 5,
        tag: 'zodiac-leo',
        name: 'Лев',
        dates: '23 июл - 21 авг',
      },
      {
        id: 6,
        tag: 'zodiac-virgo',
        name: 'Дева',
        dates: '22 авг - 23 сен',
      },
      {
        id: 7,
        tag: 'zodiac-libra',
        name: 'Весы',
        dates: '24 сен - 23 окт',
      },
      {
        id: 8,
        tag: 'zodiac-scorpio',
        name: 'Скорпион',
        dates: '24 окт - 22 ноя',
      },
      {
        id: 9,
        tag: 'zodiac-sagittarius',
        name: 'Стрелец',
        dates: '23 ноя - 22 дек',
      },
      {
        id: 10,
        tag: 'zodiac-capricorn',
        name: 'Козерог',
        dates: '23 дек - 20 янв',
      },
      {
        id: 11,
        tag: 'zodiac-aquarius',
        name: 'Водолей',
        dates: '21 янв - 19 фев',
      },
      {
        id: 12,
        tag: 'zodiac-pisces',
        name: 'Рыбы',
        dates: '20 фев - 20 мар',
      },
    ],
    selectedZodiac: {},
  }),
  components: {
  },
  watch: {
    group (val) {
      this.drawer = false
      this.selectedZodiac = this.zodiac[val]
    },
  },
  mounted () {
    this.selectedZodiac = this.zodiac[0]
  }
}
</script>

<style lang="scss">
  .item--active {
    &.v-list-item--link:before {
      background-color: transparent;
    }
    .v-list-item__icon i,
    .v-list-item__title {
      color: #FF8563 !important;
    }
  }
  .saftech-mark {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }
</style>
