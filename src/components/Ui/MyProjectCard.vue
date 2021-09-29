<template>
    <div class="container w-full col-span-1 p-4 bg-white transform hover:scale-105">
        <router-link v-if="(typeof item.route !== 'string')" :to="item.route">
            <img :src="item.image" :alt="item.name + 'image'" class="h-auto w-full object-cover mb-4">
            <p class="font-montserrat font-semibold text-base">{{ item.name }}</p>
        </router-link>
        <a v-else :href="item.route" class="text-decoration-none">
            <div class="aspect-w-6 aspect-h-6 w-full">
                <img :src="item.image" :alt="item.name + 'image'" class="mb-4 object-cover">
            </div>
            <p class="font-montserrat font-semibold text-base">{{ item.name }}</p>
        </a>
        <hr class="border border-gray-400 my-4">
        <p class="font-roboto italic text-sm">{{ item.description }}</p>
    </div>
</template>


<script>
export default {
    props: ['item'],
    setup() {
        
    },
}
</script>