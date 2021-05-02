<template>
    <div v-if="!fetchingError" class="w-full p-4">
        <h1 class="bg-gray-400 p-4 shadow-md text-white my-2 rounded-md text-xl uppercase">City: {{ displayData.name }},&nbsp; {{ country }}</h1>
        <div class="flex flex-row justify-between w-full py-4 items-center">
            <img :src="iconUrl" alt="weather icon" class="w-24">
            <div>
                <span class="inline-flex justify-around items-baseline">
                    <i class="fas fa-thermometer-half fa-3x text-gray-700"></i>
                    <h2 class="p-2 font-roboto text-base">{{ displayData.main.temp }} &deg;C</h2>
                </span>
            </div>
            <div>
                <h2 class="py-2 font-roboto text-sm">Feels Like:</h2>
                <span class="inline-flex justify-around items-baseline">
                    <i class="fas fa-feather fa-3x text-gray-700"></i>
                    <h2 class="p-2 font-roboto text-base">{{ displayData.main.feels_like }} &deg;C</h2>
                </span>
            </div>
        </div>
        <p class="py-2 w-full text-center font-roboto text-base italic">{{ description }}</p>
    </div>
    <div v-else>
        <h3 class="italic font=roboto text-base text-center">There was an error with fetching the weather for your input, please check your input and try again.</h3>
    </div>
</template>


<script>
import { computed } from 'vue'
export default {
    props: {
        displayData: {
            type: Object,
            required: false,
        },
        fetchingError: {
            type: Boolean,
            required: false,
        }
    },
    setup(props) {
        const iconUrl = computed(function() {
            return 'https://openweathermap.org/img/w/' + props.displayData.weather[0].icon + '.png'
        })

        const description = computed(function() {
            return props.displayData.weather[0].description.charAt(0).toUpperCase() + props.displayData.weather[0].description.slice(1)
        })

        const country = computed(function() {
            return props.displayData.sys.country
        })

        return {
            iconUrl,
            description,
            country,
        }
    }
}
</script>