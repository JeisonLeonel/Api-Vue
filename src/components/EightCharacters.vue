<template>
    <section class="main">
        

    <article id="main">
        <div class="card" v-for="character in characters" :key="character.id">
            <div class="img">
            <img :src="character.image" :alt="character.name">
        </div>
        <div class="text">
            <h3 id="name">
                {{ character.name }}
            </h3>
            <div id="information">
                <span id="status">{{ character.status }}</span> - <span id="species">{{ character.species }}</span>
            </div>
            <span id="gender">Gender:</span>
            <p id="gender-text">{{ character.gender }}</p>
            <span id="location">Last known location:</span>
            <p id="location-text">{{ character.location.name }}</p>
            </div>
        </div>
        </article>
    </section>
</template>

<script> 
    export default{
        data() {
        return {
            characters: [],
        };
    },
    mounted() {
        this.getRandomCharacters(8);
    },
    methods: {
        async getRandomCharacters(limit) {
    try {
        const totalPages = await this.getTotalPages();
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${randomPage}`);
        const data = await response.json();
        const randomCharacters = this.shuffleArray(data.results).slice(0, limit);
        this.characters = randomCharacters;
    } catch (error) {
        console.error(error);
    }
    },
    async getTotalPages() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.info.pages;
    } catch (error) {
        console.error(error);
        return 1;
    }
    },
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
            }
        return array;
        }
    }
};
</script>

<style>
@import '../assets/style.css';
</style>