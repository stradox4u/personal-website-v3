<template>
    <div>
        <app-header>To Do List</app-header>
        <form @submit.prevent="addItem" class="w-full my-4 inline-flex space-x-8">
            <input v-model="itemInput" type="text" placeholder="Enter Item Here" class="w-full focus:outline-none focus:ring focus:ring-gray-500 p-2 rounded-md">
            <base-button class="bg-green-400" :disabled="itemInput.trim() === ''">Submit</base-button>
        </form>
        <ul class="list-style-none">
            <li v-for="(item, index) in itemsArray" :key="index" :class="{ 'my-4': true, 'p-2': true, 'bg-gray-300': index % 2 === 0 }">
                <div class="flex flex-row justify-between space-x-4 items-center">
                    <p class="font-roboto text-base">{{ index + 1 }}.</p>
                    <p class="flex-grow justify-self-start font-roboto text-base" :class="{'line-through': item.status === 'done'}">{{ item.todo }}</p>
                    <span class="inline-flex space-x-4 justify-between">
                        <base-button @click="markDone(index)" class="bg-green-400" :class="{'pointer-events-none': item.status === 'done', 'opacity-50': item.status === 'done'}">Done</base-button>
                        <base-button @click="deleteItem(index)" class="bg-red-500">Delete</base-button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
    setup() {
        const itemInput = ref('')
        const itemsArray = ref([])

        const addItem = function() {
            itemsArray.value.push({
                todo: itemInput.value,
                status: 'undone'
            })
            itemInput.value = ''
        }

        const markDone = function(id) {
            itemsArray.value[id].status = 'done'
        }

        const deleteItem = function(id) {
            itemsArray.value.splice(id, 1)
        }

        return {
            itemsArray,
            itemInput,
            addItem,
            markDone,
            deleteItem
        }
    },
}
</script>