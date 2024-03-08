<script setup>

import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"
const props = defineProps({
    isOpen: Boolean,
    toDisplay: Number,
    jobs: Array
});
const emit = defineEmits(['modal-close']);
const target = ref(null);
onClickOutside(target, () => emit('modal-close'))

</script>

<template>

<div v-if="isOpen" class="modal-mask" >
    <div class="modal-wrapper" >
        <div class="modal-container" ref="target">
            <div class="modal-header" >
                <slot name="header"> {{ jobs[toDisplay].title }} </slot>
            </div>
            <div class="modal-body">
                <slot name="content">
                    <img :src="jobs[toDisplay].imgSrc">
                    <p v-if="jobs[toDisplay].UsedTech">Technologies utilisées: {{ jobs[toDisplay].UsedTech }}</p>
                    <p>Lien GitHub: {{ jobs[toDisplay].Repo }}</p>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <button @click.stop="emit('modal-close')">Fermer</button>
                </slot>
            </div>
        </div>    
    </div>
</div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    top: -50px;
    left: -50;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-wrapper {
    width: 80%;
    max-width: 800px;
    background-color: black;
    border: #737373 solid 5px;
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    padding: 20px;
}

.modal-header {
    color: white;
    padding: 10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-weight: bold;
    font-size: 1.4em;
}

.modal-body {
    padding: 20px;
}

.modal-footer {
    padding: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    text-align: center;
}

.modal-footer button {
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    background-color: #5c5c5c;
    border: 5px solid #737373;
}

.modal-footer button:hover {
    background-color: #737373;
    border: 5px solid #5c5c5c;
}

img {
    width: 570px;
    height: 700px;
    border-radius: 15px;
}

p {
    margin: 10px 0;
    color: white;
    font-weight: bold;
}

</style>
