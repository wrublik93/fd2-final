<template>
  <div class="content">
    <div class="text-xs-center">
      <v-btn v-model="selected" @click="easy" color="success">Легкий</v-btn>
      <v-btn v-model="selected" @click="medium" color="warning">Средний</v-btn>
      <v-btn v-model="selected" @click="hard" color="error">Сложный</v-btn>
      <v-btn v-model="selected" @click="all" color="info">Все</v-btn>
    </div>
    <v-layout class="row wrap">
      <v-flex v-if="showCard(card.show)" class="px-2 py-1 lg3 md4 sm6 xs12" v-for="card in getCardDictionary"
              :key="card.id">
        <CardDictionary :card="card"></CardDictionary>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>

  import CardDictionary from "./dictionary/CardDictionary";
  import {mapGetters} from "vuex";

  export default {
    name: "Content",
    components: {
      CardDictionary
    },
    data() {
      return {
        selected: 4
      }
    },
    methods: {
      all() {
        this.selected = 4;
      },
      easy() {
        this.selected = 1;
      },
      medium() {
        this.selected = 2;
      },
      hard() {
        this.selected = 3;
      },
      showCard(value) {
        if (this.selected === 4) {
          return true
        } else if (this.selected !==4 ) {
          switch (value) {
            case 'easy':
              if (this.selected === 1) {
                return 1
              }
              break;
            case 'medium':
              if (this.selected === 2) {
                return 1
              }
              break;
            case 'hard':
              if (this.selected === 3) {
                return 1
              }
              break;
          }
        }
        }
    },
    computed: {
      ...mapGetters({
        getCardDictionary: 'cardDictionary/GET_CARDDICTIONARY'
      })
    },
    mounted() {

    }
  };
</script>
<style scoped>
  .content {
    width: 100%;
    padding: 1rem;
  }
</style>
