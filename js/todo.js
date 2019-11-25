(function () {
    //récupère une référence à l'élement
    var appElement, ul;
    //liste des todos
    var todos = [
        new Todo("texte1", false),
        new Todo("faire un tableau", false),
        new Todo("un dernier pour la route", true),
        new Todo("essai", false),
        new Todo("fini", true),
    ];
    //attend que la page soit complétement chargée pour démarer l'application. 
    window.addEventListener('load', startApp);
    function startApp() {
        // Récupère une référence aux balises HTML "stratégiques"
        appElement = document.getElementById('app');
        ul = document.getElementById('list-todos');
        displayTodos();
    }
    function displayTodos() {
        todos.forEach(function (todo) {
            var li = document.createElement('li');
            li.setAttribute('class', 'list-group-item' + (todo.etat ? ' done' : ''));
            li.innerHTML = '<img src="images/icone-delete.png" >' + todo.texte;
            //Récupère une référence à la liste
            ul.appendChild(li);
        });
    }
    //constructeur d'un item todo - un état à true signifie que la tache est terminee
    function Todo(texte, etat) {
        this.texte = texte;
        this.etat = etat;
    }
})();