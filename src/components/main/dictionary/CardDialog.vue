<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="red lighten-2" flat v-on="on">Изучить</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Изучение слов по теме "{{ card.title }}"
      </v-card-title>
      <v-card-text>
        <v-layout class="row wrap">
            <v-flex class="xs6">
              Слово
            </v-flex>
            <v-flex class="xs6">
              Перевод
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout class="row wrap" v-for="(dataWord,idx) in card.dataWords" :key="idx">
          <v-flex class="xs6">
            {{ dataWord.word }}
          </v-flex>
          <v-flex class="xs6">
            {{ dataWord.translate}}
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="dialog = false">Я изучил!</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "CardDialog",
    data() {
      return {
        dialog: false
      }
    },
    props: {
      card: Object
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
