class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }

}
class Products {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    }

    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}
class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 0
    }
    addProduct(name, price, category) {
        const id = this.nextProductId++;
        const product = new Products(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService();
const productList = new ProductService();

function createCategory() {
    const categoryName = document.getElementById("categoryName").value;

    // console.log(categoryName)

    categoryList.addCategory(categoryName);

    console.log(categoryList.categories)

    clearFormFields();
    displayCategoriesAndProducts()
    console.log(categoryList.categories)
}
function createProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    const productCategory = categoryList.categories[0];

    productList.addProduct(productName, productPrice, productCategory)

    // console.log(productList.products)
}
function clearFormFields() {
    document.getElementById("categoryName").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";

}
function displayCategoriesAndProducts() {
    let content = "";

    categoryList.categories.forEach((category) => {
        content +=
            `
            <li>
                <div class="categoriesList">
                    <span><b>Categoria</b>${category.name}</span>
                    <div>
                    <button class="editButton">Editar</button>
                    <button class="deleteButton">Remover</button>
                    </div>
                </div>
            </li>
            `
    })
    document.getElementById("categoriesList").innerHTML = content;
}