<template>
    <app-header>Tarot Card Reader</app-header>
    <base-button @click="reloadCards" class="bg-yellow-400 sm:w-1/3 w-2/3 mx-auto">Reshuffle Cards</base-button>
    <div class="grid sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-12 mx-auto">
        <tarot-card
            v-for="(card, index) in tarotCards" :key="card.name"
            @cardRevealed="revealMeaning"
            :tarotImage="card.image"
            :backOfCard="cardBack.image"
            :cardIndex="index"
            class="">
        </tarot-card>
    </div>
    <transition appear name="inter-show">
        <div v-if="meaningsRevealed" class="w-full mx-auto p-2">
            <h3 class="font-semibold text-base font-roboto text-center">Interpretations</h3>
            <ul>
                <transition-group name="interpretations">
                    <tarot-interpretation
                        v-for="meaning in clickedCardMeanings" :key="meaning[0]"
                        :interpretation="meaning">
                    </tarot-interpretation>
                </transition-group>
            </ul>
        </div>
    </transition>
</template>


<script>
import cards from '../tarotCards.js'


import TarotCard from './Ui/TarotCard.vue'
import TarotInterpretation from './Ui/TarotInterpretation.vue'

import { onMounted, ref, computed, reactive } from 'vue'


export default {
    components: {
        TarotCard,
        TarotInterpretation,
    },
    setup() {
        const randArray = ref([])
        const cardBack = cards[78]

        const generateRandomNumbers = () => {
            randArray.value = []
            randArray.value.push(Math.floor(Math.random() * 77))
            while(randArray.value.length < 4) {
                const rand = Math.floor(Math.random() * 77)
                if(!randArray.value.includes(rand)) {
                    randArray.value.push(rand)
                }
            }
        }

        onMounted(() => {
            generateRandomNumbers()
        })

        const tarotCards = computed(() => {
            return randArray.value.map(el => cards[el])
        })

        const cardMeanings = reactive({
            obviousIdentity: '',
            greatUnknown: '',
            concealedIdentity: '',
            blindSpot: '',
        })

        const meaningsRevealed = ref(false)
        const revealMeaning = (index) => {
            meaningsRevealed.value = true

            switch(index) {
                case 0:
                    cardMeanings.obviousIdentity = tarotCards.value[index]
                    break
                case 1:
                    cardMeanings.greatUnknown = tarotCards.value[index]
                    break
                case 2:
                    cardMeanings.concealedIdentity = tarotCards.value[index]
                    break
                case 3:
                    cardMeanings.blindSpot = tarotCards.value[index]
                    break

            }
        }

        const clickedCardMeanings = computed(() => {
            const asArray = Object.entries(cardMeanings)
            return asArray.filter(el => el[1] !== '')
        })

        const reloadCards = () => {
            meaningsRevealed.value = false
            generateRandomNumbers()
            cardMeanings.obviousIdentity = ''
            cardMeanings.greatUnknown = ''
            cardMeanings.concealedIdentity = ''
            cardMeanings.blindSpot = ''
        }

        return {
            tarotCards,
            cardBack,
            revealMeaning,
            clickedCardMeanings,
            meaningsRevealed,
            reloadCards,
        }
    },
}
</script>


<style scoped>
    .interpretations-item {
        display: inline-block;
        margin-right: 10px
    }
    .interpretations-enter-active,
    .interpretations-leave-active {
        transition: all 0.4s ease;
    }
    .interpretations-enter-from,
    .interpretations-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .interpretations-move {
        transition: transform 0.4s ease;
    }
    
    .inter-show-enter-from,
    .inter-show-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .inter-show-enter-active,
    .inter-show-leave-active {
        transition: all 0.4s ease;
    }
    .inter-show.enter-to,
    .inter-show-leave-from {
        opacity: 1;
        transform: translateY(0px);
    }
</style>