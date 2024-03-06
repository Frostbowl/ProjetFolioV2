<template>

<div v-if="isOpen" class="overlay">
    <div class="container" >
        <div class="modalBtn">
            <button id="prvs-btn" @click="modalPrvsClick">&#x2192;</button>
            <button id="nxt-btn" @click="modalNxtClick">&#x2192;</button>
        </div>
        <div class="content" ref="target" >
            <h2>{{ imgModal.title }}</h2>
            <img id="modalPicture" :src="imgModal.imgPart" alt="Une partie du projet présenté">
            <button @click.stop="emit('modal-close')" id="closeModal">Fermer</button>
        </div>
    </div>
</div>

</template>

<script setup>

import { defineProps, defineEmits, ref } from "vue";




const emit = defineEmits(['modalClose']);

const target = ref(null)
onClickOutside(target, ()=>emit('modalClose'))

const imgModal = defineProps([
    {
        id: ref(1),
        title: 'Mon CV',
        imgPart: ["../src/assets/img/cv-header.png', '../src/assets/img/cv-left.png', '../src/assets/img/cv-right.png"]
    },{
        id: ref(2),
        title: 'Desert du monde',
        imgPart: ['../src/assets/img/desert-header.png', '../src/assets/img/desert-left.png', '../src/assets/img/desert-right.png', '../src/assets/img/desert-footer.png']
    },{
        id: ref(3),
        title: 'my HOME space',
        imgPart: ['../src/assets/img/homespace-header.png', '../src/assets/img/homespace-main.png', '../src/assets/img/homespace-footer.png']
    },{
        id: ref(4),
        title: 'Projet Espace commentaire ',
        imgPart: ['../src/assets/img/projet-js-comments-1.png', '../src/assets/img/projet-js-comments-2.png', '../src/assets/img/projet-js-form.png',]
    }
])

const slider = ref([])
const startIndexModal = ref(0)
const endIndexModal = ref(1)



            //Fonctions de défilement

function modalNxtClick() {
    startIndexModal.value  = (startIndexModal.value + 1) % imgPart.length
    endIndexModal.value =  (startIndexModal.value - 1) % imgPart.length

    if (endIndexModal.value >= imgPart.length){
        endIndexModal.value = 0
    }

    slider.value = [imgModal[startIndexModal.value]]
}

function modalPrvsClick() {
    startI.value  = (startI.value + 1) % projets.length
    endI.value =  (startI.value - 1) % projets.length

    if (endI.value >= projets.length){
        endI.value = 0
    }

    slider.value = [projets[startI.value]]
}


</script>

<style scoped>

.overlay{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.container{
    border: 3px solid white;
    border-radius: 15px;
    box-shadow: 0 0 30px whitesmoke;
    margin: 50px 20%;
    background-color: black;
}
.modalBtn button{
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

.modalBtn button:hover{
    background-color: #737373;
    border: 5px solid #5c5c5c;
}

.modalBtn{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
}

h3{
    text-align: center;
    font-weight: bold;
}

img{
    width: 450px;
    height: 550px;
    margin-bottom: 50px;
    border-radius: 15px;
}

#closeModal{
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 2em;
    color: white;
    background-color: #5c5c5c;
    border: 5px solid #737373;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;  
}

</style>