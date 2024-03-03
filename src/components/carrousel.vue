<script setup>
import { ref } from "vue";

const projets = [
    {
        id: ref(1),
        title:'Mon CV',
        imgSrc: '../src/assets/img/CV.png',
    },{
        id: ref(2),
        title: 'Desert du monde',
        imgSrc: '../src/assets/img/desert-du-monde.png',
    },{
        id: ref(3),
        title: 'my HOME space',
        imgSrc: '../src/assets/img/homespace.png',
    },{
        id: ref(4),
        title: 'Projet Espace commentaire ',
        imgSrc: '../src/assets/img/projet-js-commentary-space.png',
    }
]

const carrousel = ref([])
const startI = ref(1)
const endI = ref(0)

function click() {
    startI.value  = (startI.value + 1) % projets.length
    endI.value =  (startI.value - 1) % projets.length

    if (endI.vaue >= projets.length){
        endI.value = 0
    }

    carrousel.value = [projets[startI.value]]
}

</script>


<template>
    <section >
        <h1>Mes projets</h1>
        <article>
            <div id="arrow">
                <button id="previous" @click="click" >&#x2190;</button>
                <button id="next" @click="click" >&#x2192;</button>
            </div>
            <ul ref="projetList">
                <li v-for="projet in carrousel" :key="projets.id">
                <h3> {{ projet.title }}</h3> <br>
                <img id="pictureProjet" :src="projet.imgSrc" alt="apperçus de mes projets">
                </li>
            </ul>
        </article>
    </section>
</template>

<style scoped>

section{
    border: 3px solid white;
    border-radius: 15px;
    box-shadow: 0 0 30px whitesmoke;
    margin: 50px 20%;
    background-color: black;
}

h1, h3{
    text-align: center;
    font-weight: bold;
}

#arrow button{
    font-size: 1.5em;
    cursor: pointer;
    font-weight: bold;
    width: 50px;
    height: 50px;
    color: white;
    background-color: #5c5c5c;
    border: 5px solid #737373;
    border-radius: 15px;
}

#arrow button:hover{
    background-color: #737373;
    border: 5px solid #5c5c5c;
}

#arrow{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
}

ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

li{
    list-style: none;
}

img{
    width: 450px;
    height: 550px;
    margin-bottom: 50px;
    border-radius: 15px;
}

img:hover{
    box-shadow: 15px 15px 30px whitesmoke;
    cursor: pointer;
}

.flex{
    display: flex;
    flex-direction: column;
    padding-bottom: 35px;
}



</style>

