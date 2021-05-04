<template>
    <div v-if="!fetchingError" class="w-full p-4">
        <h1 class="bg-gray-400 p-4 shadow-md text-white my-2 rounded-md text-xl uppercase">City: {{ displayData.name }},&nbsp; {{ country }}</h1>
        <div class="flex flex-row flex-wrap justify-between w-full py-4 items-baseline">
            <div class="flex flex-col items-center">
                <h2 class="font-roboto text-sm">Condition:</h2>
                <img :src="iconUrl" alt="weather icon" class="sm:w-24 w-12">
            </div>
            <div>
                <h2 class="py-4 font-roboto text-sm">Temperature:</h2>
                <span class="inline-flex justify-around items-baseline">
                    <i class="fas fa-thermometer-half sm:fa-3x fa-2x text-gray-700"></i>
                    <h2 class="p-2 font-roboto sm:text-base text-sm">{{ displayData.main.temp }} &deg;C</h2>
                </span>
            </div>
            <div>
                <h2 class="py-4 font-roboto text-sm">Feels Like:</h2>
                <span class="inline-flex justify-around items-baseline">
                    <i class="fas fa-feather sm:fa-3x fa-2x text-gray-700"></i>
                    <h2 class="p-2 font-roboto sm:text-base text-sm">{{ displayData.main.feels_like }} &deg;C</h2>
                </span>
            </div>
        </div>
        <p class="py-2 w-full text-center font-roboto sm:text-base text-sm italic">{{ description }}</p>
    </div>
    <div v-else>
        <h3 class="italic font=roboto sm:text-base text-sm text-center">There was an error with fetching the weather for your input, please check your input and try again.</h3>
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