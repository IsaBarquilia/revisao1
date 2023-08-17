class Category{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.products = [];
    }
}
class Products{
    constructor(id, name, price){
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
const categoryList = new CategoryService();

function createCategory() {
    const categoryName = "Docê";

    categoryList.addCategory(categoryName);
    console.log(categoryList.categories)
}
