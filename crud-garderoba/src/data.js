class ArcticleOfClothing {
    constructor(id, name, price, size, color, image) {
        this.name = name;
        this.price = price;
        this.size = size;
        this.color = color;
        this.image = image;
        this.id = id;
    }
}

let arcticleOfClothing = [
    //genreate 5 random arcticle of clothing with images from the internet
    new ArcticleOfClothing(1, "T-shirt", 10, "M", "red", "https://images-na.ssl-images-amazon.com/images/I/71ZQ9ZQ3QlL._AC_UX679_.jpg"),
    new ArcticleOfClothing(2, "T-shirt", 10, "M", "blue", "https://images-na.ssl-images-amazon.com/images/I/71ZQ9ZQ3QlL._AC_UX679_.jpg"),
    new ArcticleOfClothing(3, "T-shirt", 10, "M", "green", "https://images-na.ssl-images-amazon.com/images/I/71ZQ9ZQ3QlL._AC_UX679_.jpg"),
    new ArcticleOfClothing(4, "T-shirt", 10, "M", "yellow", "https://images-na.ssl-images-amazon.com/images/I/71ZQ9ZQ3QlL._AC_UX679_.jpg"),
    new ArcticleOfClothing(5, "T-shirt", 10, "M", "black", "https://images-na.ssl-images-amazon.com/images/I/71ZQ9ZQ3QlL._AC_UX679_.jpg"),
]
console.log(arcticleOfClothing);