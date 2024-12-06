//CRUD (create - read - update - delete)

var productNameInput = document.getElementById('productNameInput');
var productModelInput = document.getElementById('productModelInput');
var productPriceInput = document.getElementById('productPriceInput');
var productDescInput = document.getElementById('productDescInput');
var productContainer = []
var mood = "create"; 
var tmp;

//events >> bulit in js 

if(localStorage.getItem('myProducts') != null)
    {
        productContainer = JSON.parse(localStorage.getItem('myProducts'));
        displayProduct();
    }
    else
    {
        productContainer = [];
    }
    

function addProduct()
{
    var productInfo = {
        name: productNameInput.value,
        model: productModelInput.value,
        price: productPriceInput.value,
        desc: productDescInput.value
    }
    if(mood === "create"){
        productContainer.push(productInfo);
        localStorage.setItem('myProducts' , JSON.stringify(productContainer));
    
        console.log(productContainer);
        clearForm();
        displayProduct()
    }else{
        productContainer[tmp] = productInfo

        console.log(productInfo)
        clearForm()
        displayProduct()
    }
}

function clearForm()
{
    productNameInput.value= ""; 
    productPriceInput.value= "";
    productModelInput.value= "";
    productDescInput.value= ""
}

function displayProduct()
{
    var box = '' ; 
    for(var i=0 ; i<productContainer.length ; i++)
    {
        box += `<tr>
                    <td>${i+1}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].model}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].desc}</td>
                    <td><button onclick="updateProducts(${i})" class="btn btn-outline-success">update</button></td>
                    <td><button onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
                    
                </tr>`
    }
    document.getElementById('rowPosition').innerHTML = box;

}

function deleteProducts(deletedIndex)
{
    productContainer.splice(deletedIndex , 1);
    localStorage.setItem('myProducts' , JSON.stringify(productContainer) );
    displayProduct()
}

function updateProducts(i)
{
    mood = "update";
    tmp = i ;
    productNameInput.value = productContainer[i].name;
    productPriceInput.value = productContainer[i].price;
    productModelInput.value = productContainer[i].model;
    productDescInput.value = productContainer[i].desc;
}

//local storage 5mb 

//localStorage.setItem('') for setting item
//var x = localStorage.getItem('') for output 
//localStorage.removeItem('') for delete one item
//localStorage.clear("") for delete all items

