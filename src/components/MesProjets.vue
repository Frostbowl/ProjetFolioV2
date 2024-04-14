<script setup>
import { ref } from "vue";
import MonModal from "../assets/modal/MonModal.vue";
const Projets = ref([
    {
        title:'Mon CV',
        imgSrc: '../src/assets/img/CV.png',
        UsedTech: 'HTML / CSS',
        Repo: 'https://github.com/Frostbowl/CV_masclet.git',
        date: '08/02/2024'
    },{
        title:'Desert du monde',
        imgSrc: '../src/assets/img/desert-du-monde.png',
        UsedTech: 'HTML / CSS',
        Repo: 'https://github.com/Frostbowl/D-serts-du-monde.git',
        date: '13/02/2024'
    },{
        title: 'my HOME space',
        imgSrc: '../src/assets/img/homespace.png',
        UsedTech: 'HTML / CSS',
        Repo: 'https://github.com/Frostbowl/MyHomeSpace.git',
        date: '11/02/2024'
    },{
        title: 'Projet Espace commentaire ',
        imgSrc: '../src/assets/img/projet-js-commentary-space.png',
        UsedTech: 'HTML / CSS / JavaScript',
        Repo: 'https://github.com/Frostbowl/Dynamiser-un-commentaire.git',
        date: '19/02/2024'
    }
])

const itemToDisplay = ref(null);
const isModalOpened = ref(false);
const openModal = (e) => {
    itemToDisplay.value = e.target.id;
    isModalOpened.value = true;
};
const closeModal = () => {
    isModalOpened.value = false;
};

</script>


<template>

<div id="MesProjets" >
    <h2>Mes projets</h2>
    <div class="ProjetRow">
    <section v-for="(Projet, index) in Projets" >
        <h3>{{ Projet.title }}</h3>
        <button @click="openModal"><img :src="Projet.imgSrc" :id="index" alt="Une image de mon projet"></button>
        <MonModal :to-display="Number(itemToDisplay)" :jobs="Projets" :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal">
            <template #header>
            </template>
            <template #content>
            </template>
            <template #footer>
            </template>
        </MonModal>
    </section>
    </div>
</div>
</template>


<style scoped>

.ProjetRow{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

#MesProjets{
    scroll-margin-top: 10rem;
    border: 3px solid white;
    border-radius: 15px;
    box-shadow: 0 0 30px whitesmoke;
    margin: 50px 20%;
    background-color: black;
}

h2, h3{
    text-align: center;
    font-weight: bold;
    padding-top: 20px;
    padding-bottom: 20px;
}

img{
    width: 250px;
    height: 350px;
    margin-bottom: 50px;
    border-radius: 15px;
}

img:hover{
    box-shadow: 15px 15px 30px whitesmoke;
    cursor: pointer;
}

button{
    width: 240px;
    height: 340px;
    margin-bottom: 50px;
    background-color: black;
    border-radius: 15px;
}

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-basis: 50%;
}

</style>
