<template>
    <div class="flex flex-col gap-8 w-full">
        <div class="w-full p-4">
            <img :src="require('../assets/circle-photo.jpg')" alt="" class="w-32 h-32 object-cover rounded-full mx-auto">
            <h1 class="font-roboto font-bold text-center text-2xl">Arc. Umar Odeh Adejoh <p class="text-xs inline font-normal">(mnia)</p></h1>
            <h2 class="font-roboto italic text-sm text-center">Architect | PHP Laravel, Javascript and Vue JS Full Stack Developer</h2>
        </div>
        <div class="w-full relative bg-gray-200 shadow-md rounded-md p-4 flex sm:flex-row flex-col gap-6 mt-4">
            <img :src="require('../assets/profilePhoto.jpg')" alt="" class="sm:w-60 w-40 h-auto object-cover shadow-md absolute -top-12">
            <div class="sm:ml-72 ml-0 sm:mt-0 mt-48">
                <h2 class="text-xl font-semibold font-montserrat">About Me</h2>
                <hr class="ml-6 border border-gray-500 w-2/12">
                <p class="font-roboto text-base mt-4">My name is Odeh Adejoh. I'm a registered architect and full stack developer based in Abuja, Nigeria. I'm a passionate and dedicated professional with 11 years architecture experience and 3 years web development experience.</p>
                <p class="font-roboto text-base mt-4">I am proficient with Html 5, CSS, Javascript, PHP, Laravel, Bootstrap, Tailwind CSS, Vue Js and Inertia Js. I am able to build full stack web apps as required using any mix of these technologies.</p>
                <h3 class="font-roboto text-base mt-4">Click through to find out more about my:</h3>
                <div class="flex sm:flex-row flex-col flex-wrap justify-between items-center mt-4 gap-4">
                    <router-link :to="{ name: 'devPortfolio' }" class="px-4 py-2 font-montserrat text-base font-semibold rounded-md uppercase bg-green-400 shadow-md flex-grow text-center">Web Development</router-link>
                    <router-link :to="{ name: 'architecture' }" class="px-4 py-2 font-montserrat text-base font-semibold rounded-md uppercase bg-green-400 shadow-md flex-grow text-center">Architecture & 3d Visualization</router-link>
                    <router-link :to="{ name: 'construction' }" class="px-4 py-2 font-montserrat text-base font-semibold rounded-md uppercase bg-green-400 shadow-md flex-grow text-center">Building Construction</router-link>
                    <router-link :to="{ name: 'photography' }" class="px-4 py-2 font-montserrat text-base font-semibold rounded-md uppercase bg-green-400 shadow-md flex-grow text-center">Photography</router-link>
                </div>
            </div>
        </div>
    </div>
</template>