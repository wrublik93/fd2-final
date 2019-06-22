<template>
  <v-card :class="levelCard()">
    <v-img class="text-xs-center">
      <img src="../../../assets/img/uk.png"/>
    </v-img>
    <v-card-title class="pt-2 px-2">
      <div>
        <div>Уровень: {{ card.level }}</div>
        <div>Тема: {{ card.title }}</div>
        <div>Количество: {{ card.countWords }}</div>
      </div>
    </v-card-title>

    <v-card-actions>
      <CardDialog :card="card"></CardDialog>
    </v-card-actions>
  </v-card>
</template>

<script>
  import {mapGetters} from "vuex";
  import CardDialog from "./CardDialog"

  export default {
    name: "CardDictionary",
    props: {
      card: Object
    },
    methods: {
      levelCard() {
        if (this.card.level === 'Сложный') {
          return 'hard'
        } else if (this.card.level === 'Средний') {
          return 'medium'
        } else {
          return 'easy'
        }
      },
    },
    computed: {
      ...mapGetters({

      })
    },
    components: {
      CardDialog
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .hard {
    border-left: 0.35rem solid #FF7043;
  }

  .medium {
    border-left: 0.35rem solid #FFEE58;
  }

  .easy {
    border-left: 0.35rem solid #66BB6A;
  }
</style>
