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

};

export const apiService = new ApiService();