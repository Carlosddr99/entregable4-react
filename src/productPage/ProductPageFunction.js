    
    export const changeOrderByPrice = (products) => {
        return products.sort((a,b)=> a.price > b.price ? 1 :  a.price < b.price ? -1 : 0);
    }

    export const getPriceColor = price => {
    
        if(price>25) return "red";

        if(15<price<25) return "orange";
        
        return "green";
    }

