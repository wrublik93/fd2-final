import mutations from './mutations';
import actions from './actions';

const state = {
  cardDictionary: [
    {
      level: 'Легкий',
      title: 'Тело человека',
      countWords: '10 слов',
      show: 'easy',
      dataWords: [
        {
          word: 'arm',
          translate: 'рука',
        },
        {
          word: 'back',
          translate: 'спина',
        },
        {
          word: 'brain',
          translate: 'мозг',
        },
        {
          word: 'breast',
          translate: 'грудь',
        },
        {
          word: 'cheek',
          translate: 'щека',
        },
        {
          word: 'ear',
          translate: 'ухо',
        },
        {
          word: 'eye',
          translate: 'глаз',
        },
        {
          word: 'finger',
          translate: 'палец',
        },
        {
          word: 'hair',
          translate: 'волосы',
        },
        {
          word: 'hand',
          translate: 'кисть',
        },
      ]
    },
    {
      level: 'Легкий',
      title: 'Погода',
      countWords: '9 слов',
      show: 'easy',
      dataWords: [
        {
          word: 'cloud',
          translate: 'облако',
        },
        {
          word: 'cloudy',
          translate: 'облачный',
        },
        {
          word: 'cold',
          translate: 'прохладный',
        },
        {
          word: 'dry',
          translate: 'сухой',
        },
        {
          word: 'fog',
          translate: 'туман',
        },
        {
          word: 'foggy',
          translate: 'туманный',
        },
        {
          word: 'frost',
          translate: 'мороз',
        },
        {
          word: 'frosty',
          translate: 'морозный',
        },
        {
          word: 'hail',
          translate: 'град',
        },
      ]
    },
    {
      level: 'Легкий',
      title: 'Овощи',
      countWords: '8 слов',
      show: 'easy',
      dataWords: [
        {
          word: 'beetroot',
          translate: 'свекла',
        },
        {
          word: 'cabbage',
          translate: 'капуста',
        },
        {
          word: 'carrot',
          translate: 'морковь',
        },
        {
          word: 'cucumber',
          translate: 'огурец',
        },
        {
          word: 'onion',
          translate: 'лук',
        },
        {
          word: 'potato',
          translate: 'картофель',
        },
        {
          word: 'pumpkin',
          translate: 'тыква',
        },
        {
          word: 'radish',
          translate: 'редис',
        },
      ]
    },
    {
      level: 'Легкий',
      title: 'Домашние животные',
      countWords: '12 слов',
      show: 'easy',
      dataWords: [
        {
          word: 'cat',
          translate: 'кот',
        },
        {
          word: 'cow',
          translate: 'корова',
        },
        {
          word: 'dog',
          translate: 'собака',
        },
        {
          word: 'duck',
          translate: 'утка',
        },
        {
          word: 'goat',
          translate: 'козел',
        },
        {
          word: 'goose',
          translate: 'гусь',
        },
        {
          word: 'hen',
          translate: 'курица',
        },
        {
          word: 'horse',
          translate: 'лошадь',
        },
        {
          word: 'parrot',
          translate: 'попугай',
        },
        {
          word: 'pig',
          translate: 'свинья',
        },
        {
          word: 'rat',
          translate: 'крыса',
        },
        {
          word: 'sheep',
          translate: 'овца',
        },
      ]
    },
    {
      level: 'Средний',
      title: 'Кухонные приборы',
      countWords: '10 слов',
      show: 'medium',
      dataWords: [
        {
          word: 'candlestick',
          translate: 'подсвечник',
        },
        {
          word: 'corkscrew',
          translate: 'штопор',
        },
        {
          word: 'creamer',
          translate: 'молочник',
        },
        {
          word: 'faucet',
          translate: 'кран',
        },
        {
          word: 'grater',
          translate: 'терка',
        },
        {
          word: 'jug',
          translate: 'кувшин',
        },
        {
          word: 'ladle',
          translate: 'половник',
        },
        {
          word: 'light fixture',
          translate: 'светильник',
        },
        {
          word: 'place mat',
          translate: 'подставка',
        },
        {
          word: 'sieve',
          translate: 'сито',
        },
      ]
    },
    {
      level: 'Средний',
      title: 'Спальня',
      countWords: '8 слов',
      show: 'medium',
      dataWords: [
        {
          word: 'bed',
          translate: 'кровать',
        },
        {
          word: 'bedspread',
          translate: 'покрывало',
        },
        {
          word: 'bureau',
          translate: 'комод',
        },
        {
          word: 'sofa',
          translate: 'диван',
        },
        {
          word: 'cord',
          translate: 'шнур',
        },
        {
          word: 'cot',
          translate: 'люлька',
        },
        {
          word: 'lampshade',
          translate: 'абажур',
        },
        {
          word: 'playpen',
          translate: 'манеж',
        },
      ]
    },
    {
      level: 'Средний',
      title: 'Разговор с коллегами',
      countWords: '9 слов',
      show: 'medium',
      dataWords: [
        {
          word: 'attend',
          translate: 'посещать',
          transcription: '',
        },
        {
          word: 'bargain',
          translate: 'сделка',
        },
        {
          word: 'comply',
          translate: 'исполнять',
          transcription: '',
        },
        {
          word: 'contract',
          translate: 'контракт',
        },
        {
          word: 'issue',
          translate: 'проблема',
        },
        {
          word: 'mutual',
          translate: 'взаимный',
        },
        {
          word: 'receptive',
          translate: 'восприимчивый',
        },
        {
          word: 'skip',
          translate: 'пропускать',
        },
        {
          word: 'tension',
          translate: 'напряжение',
        },
      ]
    },
    {
      level: 'Сложный',
      title: 'Здоровый человек',
      countWords: '10 слов',
      show: 'hard',
      dataWords: [
        {
          word: 'ache',
          translate: 'боль',
        },
        {
          word: 'bandage',
          translate: 'бинт',
        },
        {
          word: 'bruise',
          translate: 'синяк',
        },
        {
          word: 'crutch',
          translate: 'костыль',
        },
        {
          word: 'drops',
          translate: 'капли',
        },
        {
          word: 'fever',
          translate: 'жар',
        },
        {
          word: 'fracture',
          translate: 'перелом',
        },
        {
          word: 'influenza',
          translate: 'грипп',
        },
        {
          word: 'injury',
          translate: 'травма',
        },
        {
          word: 'pharmacy',
          translate: 'аптека',
        },
      ],
    },
    {
      level: 'Сложный',
      title: 'Юмор',
      countWords: '8 слов',
      show: 'hard',
      dataWords: [
        {
          word: 'amusing',
          translate: 'забавный',
        },
        {
          word: 'comedian',
          translate: 'комик',
        },
        {
          word: 'comedy',
          translate: 'комедия',
        },
        {
          word: 'droll',
          translate: 'комический',
        },
        {
          word: 'facetious',
          translate: 'шутливый',
        },
        {
          word: 'funny',
          translate: 'смешной',
        },
        {
          word: 'giggle',
          translate: 'хихикать',
        },
        {
          word: 'hilarious',
          translate: 'уморительный',
        },
      ]
    }

  ]
};

const getters = {
  GET_CARDDICTIONARY: state => {
    return state.cardDictionary
  },

  GET_TEST: state => {
    return state.cardDictionary.dataWords
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
