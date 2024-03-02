<template>
    <section id="projets">
        <h1>Mes projets</h1>
        <article>
            <div id="arrow">
                <button id="previous">&#x2190;</button>
                <button id="next">&#x2192;</button>
            </div>
            <ul>
                <li id="one" class="flex">
                    <h2>Mon C.V </h2><br>
                    <img src="../assets/CV.png" alt="CV Masclet">
                </li>
                <li id="two" class="none">
                    <h2>Déserts du monde</h2><br>
                    <img src="../assets/Dsert.png" alt="site désert du monde">
                </li>
                <li id="three" class="none">
                    <h2>My HOME space</h2><br>
                    <img src="../assets/homespace.png" alt="site My HOME space">
                </li>
                <li id="four" class="none">
                    <h2>Espace commentaire</h2><br>
                    <img src="../assets/spacecom.png" alt="Un espace commentaire dynamique">
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

.arrow button{
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

.arrow button:hover{
    background-color: #737373;
    border: 5px solid #5c5c5c;
}

.arrow{
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

.none{
    display: none;
}

</style>

