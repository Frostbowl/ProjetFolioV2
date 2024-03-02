<script setup>
import { ref, onMounted } from "vue" 
import { projects } from "../stores/dataImg.js"

const dataTable = ref(projects)

const visibleProjects = ref([])
const startIndex = ref(0)
const endIndex = ref(0)

onMounted(() => {
    visibleProjects.value = projects.slice(startIndex.value, endIndex.value + 1)
})

function click() {
  startIndex.value = (startIndex.value + 1) % projects.length
  endIndex.value = (startIndex.value + 1) % projects.length

  if (endIndex.value >= projects.length) {
    endIndex.value  =  0
  }

  visibleProjects.value = [projects[startIndex.value]]
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
            <ul ref="projectList">
                <li v-for="project in visibleProjects" :key="project.id">
                <h3> {{ project.title }}</h3>
                <img id="pictureProject" :src="project.imgSrc" alt="apperçus de mes projets">
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

h1{
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

/*img{
    max-width: 500px;
    max-height: 750px;
}*/

.flex{
    display: flex;
    flex-direction: column;
    padding-bottom: 35px;
}



</style>

