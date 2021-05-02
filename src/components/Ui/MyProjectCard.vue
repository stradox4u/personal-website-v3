<template>
    <div class="container w-full col-span-1 p-4 bg-white">
        <router-link v-if="(typeof item.route !== 'string')" :to="item.route">
            <img :src="item.image" :alt="item.name + 'image'" class="h-auto w-full object-cover mb-4">
            <p class="font-montserrat font-semibold text-base">{{ item.name }}</p>
        </router-link>
        <a v-else :href="item.route" class="text-decoration-none">
            <img :src="item.image" :alt="item.name + 'image'" class="h-32 w-auto mb-4">
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