<template>
  <v-card
          class="overflow-hidden"
          min-height="100vh"
          color="#1D1223"
  >
    <div class="asteria-home">
      <div class="asteria-home__bar">
        <div id="burger" class="header__burger" @click.stop="drawer = !drawer">
          <span class="burger-menu__span"></span>
          <span class="burger-menu__span"></span>
          <span class="burger-menu__span"></span>
        </div>
        <h2 class="asteria-home__title">{{selectedZodiac.name}}</h2>
      </div>
      <div class="asteria-home__zodiac">
        <img width="200" v-if="selectedZodiac && selectedZodiac.tag" :src="require(`@/assets/img/home/zodiac/${selectedZodiac.tag}.svg`)" alt="">
      </div>
    </div>
    <div class="asteria-info">
      <v-tabs v-model="tab" background-color="transparent" color="#FF8563" center-active>
        <v-tab v-for="item of tabs" :key="item.id" color="#8C8C8C">{{item.name}}</v-tab>
      </v-tabs>
      <p class="mt-3" v-if="selectedZodiac && selectedZodiac[currentTab.code]">
        <span v-if="currentTab.code === 'today' || currentTab.code === 'tomorrow'">{{selectedZodiac[currentTab.code].date | moment("MMM D, YYYY")}} -</span>
        <span v-if="currentTab.code === 'month'">{{selectedZodiac[currentTab.code].date | moment("MMMM")}} -</span>
        <span v-if="currentTab.code === 'year'">{{selectedZodiac[currentTab.code].date | moment("YYYY")}} -</span>
        {{selectedZodiac[currentTab.code].text}}
      </p>
    </div>

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

        <v-list-item class="mt-5" @click="$router.push({path: '/settings'})">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>

          <v-list-item-title>
            Настройки
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <a class="saftech-mark" href="https://thesaftech.com">
        <img :src="require('@/assets/img/home/menu/saftech-mark.svg')" alt="">
      </a>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    drawer: false,
    group: 0,
    tab: 0,
    forecastKey: 1,
    tabs: [
      {
        id: 1,
        name: 'Сегодня',
        code: 'today',
      },
      {
        id: 2,
        name: 'Завтра',
        code: 'tomorrow',
      },
      {
        id: 3,
        name: 'Неделя',
        code: 'week',
      },
      {
        id: 4,
        name: 'Месяц',
        code: 'month',
      },
      {
        id: 5,
        name: 'Год',
        code: 'year',
      },
    ],
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
  }),
  components: {
  },
  computed: {
    ...mapState('forecast', ['forecast']),
    currentTab () {
      return this.tabs[this.tab]
    },
    selectedZodiac () {
      let data = {}
      Object.assign(data, this.forecast[this.group + 1])
      data.tag = this.zodiac[this.group].tag
      data.name = this.zodiac[this.group].name
      return data
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
  mounted () {
    //Ищет какой знак у пользователя и отнимает у него 1, получается this.zodiac[this.group]
    this.group = this.zodiac.find(item => item.tag === localStorage.selectedZodiac).id - 1
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
