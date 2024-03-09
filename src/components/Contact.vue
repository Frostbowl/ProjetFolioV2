<template>
    <article id="ContactMe">
        <h1>Contactez-moi !</h1>
        <form class="Contact" @submit.prevent="transmit()" ref="contactForm" >
            <section class="info">
                <label for="nom">Nom :</label>
                <input  type="text" id="name" name="nom"  required>
                <label for="prenom">Prénom :</label>
                <input  type="text" name="prenom" id="prenom"  required> <br><br>
                <label for="objet">Objet du message :</label>
                <input type="text" name="objet" id="objet"  required>
            </section>
            <label for="message"></label>
            <textarea name="message" id="message" cols="60" rows="15"  required></textarea>
            <button type="submit" >Envoyer</button>
        </form>
    </article>
</template>

<script setup>
import { ref } from 'vue';
const contactForm = ref(null)

function transmit(){
    (function() {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    })();

    const content = {
        to_name: "Clément",
        from_name: document.querySelector('#name').value,
        from_prenom: document.querySelector('#prenom').value,
        objet: document.querySelector('#objet').value,
        message: document.querySelector('#message').value,
    }

    
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    emailjs.send(serviceID, templateID, content)
    .then( res => {
        alert("Votre E-mail à été envoyé avec succès");
        contactForm.value.reset();
    })
    .catch();
}

</script>

<style scoped>

article{
    border: 3px solid white;
    border-radius: 15px;
    box-shadow: 0 0 30px whitesmoke;
    margin: 50px 20%;
    background-color: black;
}
h1, form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    font-weight: bold;
}

section input, #objet{
    width: 150px;
    height: 30px;
    border-radius: 15px;
    margin-right: 25px;
    padding-left:5px;

}
#objet{
    width: 300px;
}
#message{
    margin-top: 15px;
    border-radius: 15px;
    padding-left: 10px;
    padding-top: 10px;
}

button{
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

#send:hover{
    background-color: #737373;
    border: 5px solid #5c5c5c;
}

p{
    padding-top: 10px;
    font-weight: bold;
}
</style>