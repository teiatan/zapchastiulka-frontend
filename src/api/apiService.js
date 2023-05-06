class ApiService {
    baseUrl = 'https://internet-shop.onrender.com';

    async getAllProducts() {
        let products = [];
        try {
            await fetch(`${this.baseUrl}/api/products`)
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
            await fetch(`${this.baseUrl}/api/products/${productId}`)
            .then(response =>  response.json())
            .then(data => productData = data)
        } catch(error) {
            console.log(`fetch error: ${error}`)
        };
        return(productData);
    };

};

export const apiService = new ApiService();