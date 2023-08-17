class Category{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.products = [];
    }
}
class Products{
    constructor(id, name, price, category){
        this.name = name;
        this.id = id;
        this.price = price;
        this.category = category;
    }
}
class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name){
        const id = this.nextCategoryId ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}
class ProductService{
constructor(){
    this.products = [];
    this.nextProductId = 0
}
addProduct(name, price, category){
    const id = this.nextProductId ++;
    const product = new Products(id, name, price, category);
    category.products.push(product);
    this.products.push(product);
}
}

const categoryList = new CategoryService();
const productList = new ProductService();

function createCategory() {
    const categoryName = "Doce";

    categoryList.addCategory(categoryName);
    console.log(categoryList.categories)
    
}
function createProduct() {
    const productName = "bolo";
    const productPrice = 20;
    const productCategory = categoryList.categories[0];

    productList.addProduct(productName, productPrice, productCategory)

    console.log(productList.products)
}