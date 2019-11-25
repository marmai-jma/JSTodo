(function () {
    //récupère une référence à l'élement
    var appElement;
    //attend que la page soit complétement chargée pour démarer l'application. 
    window.addEventListener('load', startApp);
    function startApp() {
        appElement = document.getElementById('app');
        //change de texte de la balise
        appElement.textContent = "";
    }
})();
