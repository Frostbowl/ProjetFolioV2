<template>
    <header>
        <section>
        <a href="#"><img src="../assets/img/logoCM.jpg" alt="Logo MASCLET C" ></a>
        <h1>Clément Masclet </h1>
        </section>
        <nav>
                <a href="#">Accueil</a>
                <a href="#presentation">Qui suis-je ?</a>
                <a href="#MesProjets">Mes projets</a>
                <a href="#ContactMe">Me contacter</a>
        </nav>
    </header>
</template>


<style scoped>

header{
    background-image: url(../assets/img/background.jpg);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    font-size: 1.4em;
    position: sticky;
    top: 0;

}

section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    margin-top: auto;
    padding-bottom: 10px;
}

section a{
    padding-right: 35px;
}

nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

nav a{
    width: 25%;
    display: flex;
    justify-content: center;
    align-content: center;
    border: 3px solid white;
    padding: 5px;
    color: white;
    text-decoration: none;
}

nav a:hover{
    background-color: rgba(255, 255, 255, 0.3);

}

nav a:active{
    text-decoration: underline;
}

img{
    margin-top: 10px;
    max-width: 75px;
    border-radius: 50%;
}

img:hover{
    box-shadow: 0 0 40px white;
}



</style>