<template>
    <app-header>Weather App</app-header>
    <weather-search-bar @data-returned="passToPanel"></weather-search-bar>
    <weather-panel v-if="dataReturned"
        :displayData="data"
        :fetchingError="fetchingError">
    </weather-panel>
</template>


<script>
import WeatherSearchBar from './WeatherSearchBar.vue'
import WeatherPanel from './Ui/MyWeatherPanel.vue'


import { ref } from 'vue'


export default {
    components: {
        WeatherSearchBar,
        WeatherPanel,
    },
    setup() {
        const data = ref(null)
        const dataReturned = ref(false)
        const fetchingError = ref(false)

        const passToPanel = function({weatherData, fetchError}) {
            if(fetchError.value) {
                console.log(fetchError.value)
                fetchingError.value = fetchError.value
                dataReturned.value = true
                return
            }

            data.value = weatherData.value
            fetchingError.value = false

            dataReturned.value = true  
        }

        return {
            passToPanel,
            dataReturned,
            data,
            fetchingError,
        }
    },
}
</script>