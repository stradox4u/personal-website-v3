<template>
    <div class="py-2">
        <h3 class="sm:text-sm text-xs font-montserrat font-semibold text-left">{{ getHeading(interpretation[0]) }}:</h3>
        <p class="sm:text-sm text-xs font-roboto text-justify">{{ interpretation[1].name }}:&nbsp;{{ interpretation[1].meaning }}</p>
    </div>
</template>


<script>
export default {
    props: ['interpretation'],
    setup() {
        const getHeading = (str) => {
            if(str === 'obviousIdentity') {
                return 'Obvious Identity'
            } else if(str === 'blindSpot') {
                return 'Blind Spot'
            } else if(str === 'greatUnknown') {
                return 'Great Unknown'
            } else if(str === 'concealedIdentity') {
                return 'Concealed Identity'
            }
        }

        return {
            getHeading,
        }
    },
}
</script>