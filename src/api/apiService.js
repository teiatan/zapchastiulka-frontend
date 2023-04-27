class ApiService {
    baseUrl = 'https://internet-shop.onrender.com/api/products';

    async getAllProducts() {
        let products = [];
        try {
            await fetch(this.baseUrl)
            .then(response =>  response.json())
            .then(data => products = data)
        } catch(error) {
            console.log(`fetch error: ${error}`)
        };
        return(products);
    };

    async getproductById(productId) {
        let productData = [];
        try {
            await fetch(`${this.baseUrl}/${productId}`)
            .then(response =>  response.json())
            .then(data => productData = data)
        } catch(error) {
            console.log(`fetch error: ${error}`)
        };
        return(productData);
    };

};

export const apiService = new ApiService();