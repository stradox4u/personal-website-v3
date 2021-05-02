<template>
    <div class="w-full p-4 mx-auto">
        <form @submit.prevent="submitQuery">
            <label for="city-input" class="font-roboto text-base">Enter City Here:</label>
            <input v-model="queryCity" type="text" placeholder="City Name" class="w-full focus:outline-none focus:ring focus:ring-gray-400 p-2">
            <base-button class="my-4 bg-green-400" :disabled="queryCity.trim() === ''">Submit</base-button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'


export default {
    setup(props, { emit }) {
        const queryCity = ref('')
        const openWeatherKey = process.env.VUE_APP_OPEN_WEATHER_KEY
        const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
        const fetchError = ref(false)
        const weatherData = ref(null)

        const submitQuery = async function() {
            try {
                const response = await axios.get(openWeatherUrl + queryCity.value + '&units=metric' + '&appid=' + openWeatherKey)
                
                weatherData.value = response.data
                fetchError.value = false
            } catch (error) {
                fetchError.value = true
            }
            
            queryCity.value = ''

            emit('data-returned', {weatherData, fetchError})
        }

        return {
            queryCity,
            submitQuery,
        }
    },
}
</script>