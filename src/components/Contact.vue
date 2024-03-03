<template>
    <article id="ContactMe">
        <h1>Contactez-moi !</h1>
        <form class="Contact" >
            <section class="info">
                <label for="nom">Nom :</label>
                <input  type="text" id="name" name="nom" required>
                <label for="prenom">Prénom :</label>
                <input  type="text" name="prenom" id="prenom" required> <br><br>
                <label for="objet">Objet du message :</label>
                <input type="text" name="objet" id="objet" required>
            </section>
            <label for="message"></label>
            <textarea name="message" id="message" cols="60" rows="15" required></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </article>
    <div id="statusMessage"></div>
</template>

<script setup>


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
</style>