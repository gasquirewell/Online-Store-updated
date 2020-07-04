/*global variables*/
var serverURL= "http://restclass.azurewebsites.net/API/";
var items=[];

function init(){
    console.log("Admin page");
    $("#btn-register").on('click',function(){
        register();
    });
}


window.onload=init;

//object constructor
class Item{
    constructor(code,title,price,description,category, image){
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
    }
}



//register the function
function register(){
    //get code from the values
    var code=$("#code").val();
    var title=$("#title").val();
    var price=$("#price").val();
    var description=$("#description").val();
    var category=$("#category").val();
    var image=$("#image").val();
    //create the object
    var newItem = new Item(code,title,price,description,category)
    //push the item to the item array
    items.push(newItem);
    //display on the console item
    console.log(newItem);
    console.log(items);
}

