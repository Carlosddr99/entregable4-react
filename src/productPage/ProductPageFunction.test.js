
import {getPriceColor, changeOrderByPrice} from "./ProductPageFunction"

describe("Test obtener Color", ()=>{

    it("Obtener color rojo", ()=>{
        expect(getPriceColor(26)).toEqual("red")
    })
    it("Obtener color naranja", ()=>{
        expect(getPriceColor(18)).toEqual("orange")
    })

})
    describe("Test ordenar por precio", ()=>{

    const  products = [ {id: 1,name: 'Chachopo',price: 30,},
                        {id: 3,name: 'Navajas',price: 25,},
                        {id: 2,name: 'Chorizo a la sidra', price: 15}];

    it("Ordenar products", ()=>{
        expect(changeOrderByPrice(products)).toStrictEqual([{id: 2,name: 'Chorizo a la sidra', price: 15},
                                                            {id: 3,name: 'Navajas',price: 25,},
                                                            {id: 1,name: 'Chachopo',price: 30,}]);
    })
    
})