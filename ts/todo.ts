(function () {
  //récupère une référence à l'élement
  var appElement,ul;

//liste des todos
var todos = [
  new Todo("texte1", false),
  new Todo("faire un tableau",false),
  new Todo("un dernier pour la route",true),
  new Todo("essai",false),
  new Todo("fini",true),
];


 //attend que la page soit complétement chargée pour démarer l'application. 
  window.addEventListener('load',startApp);  

 function startApp(){
  // Récupère une référence aux balises HTML "stratégiques"
  appElement = document.getElementById('app');
  ul = document.getElementById('list-todos');
  displayTodos();
  ListenToSubmitOnForm()

 }

 function displayTodos(){
   ul.innerHTML='';
   todos.forEach(function(todo){
    var li = document.createElement('li');
    
    li.setAttribute('class','list-group-item' + (todo.etat? ' done' : ''));
 
    li.innerHTML='<img src="images/icone-delete.png" >'+todo.texte;
  //Récupère une référence à la liste
    ul.appendChild(li);
   })
   ListenToClickOnTodos();
 }

 //
 function ListenToClickOnTodos() {
  // récupère la liste de tous les <li>
  var listItems = document.querySelectorAll('.list-group-item');
  //Itère sur la liste...
  listItems.forEach(function (listItem, index) {
      //Et ajoute un "click" listerenr sur chaque <li>
      listItem.addEventListener('click', function () {
          // ajoute la classe CSS "done" aux classes existantes
          //listItem.classList.toggle('done');
          //Mettre à jour le modele
          todos[index].etat = !todos[index].etat;
          //console.log('toto');
          displayTodos();
      });
  });
}

function ListenToSubmitOnForm() {
  var form = document.getElementById('newTodoForm');
  form.addEventListener('submit',function(event){
    event.preventDefault(); //empeche le rafraichissement de page de submit
    //Crée un Todo avec le texte saisi dans le champ 
    var input = document.querySelector('input[type=text]') as HTMLInputElement;
    var text = input.value;
    input.value ='';
    console.log('text',text)
    if (text.trim() ==='')  {//rabote la chaine à droite et à gauche pour enlever les espaces
        return alert('Vous devez saisir un todo');
    }
    todos.push(new Todo(text,false)); //Ajoute un nouveau todo à la liste
    displayTodos(); //Rafraichit les todos dans la vue 

  })
}

 //constructeur d'un item todo - un état à true signifie que la tache est terminee
 function Todo (texte, etat) { 
  this.texte = texte;
  this.etat = etat;
}

})();
