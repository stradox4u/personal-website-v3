<template>
    <div>
        <transition appear name="image" mode="out-in">
            <img @click="toggleReveal" v-if="!revealed" :src="backOfCard" alt="card back" class="w-20 h-40 object-fill rounded-md shadow-md">
            <img v-else :src="tarotImage" alt="tarot card image" class="w-20 h-40 object-fill rounded-md shadow-md">
        </transition>
    </div>
</template>


<script>
import { ref } from 'vue'


export default {
    props: ['tarotImage', 'backOfCard', 'cardIndex'],
    setup(props, context) {
        const revealed = ref(false)

        const toggleReveal = () => {
            revealed.value = !revealed.value
            context.emit('cardRevealed', props.cardIndex)
        }

        return {
            revealed,
            toggleReveal,
        }
    },
    emits: ['cardRevealed'],
}
</script>


<style scoped>
    .image-enter-from {
        opacity: 0;
        transform: translateY(10px);
    }
    .image-enter-active {
        transition: all 0.4s ease-out;
    }
    .image-enter-to,
    .image-leave-from {
        opacity: 1;
        transform: translateY(0px);
    }
    .image-leave-active {
        transition: all 0.4s ease-in;
    }
    .image-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
</style>