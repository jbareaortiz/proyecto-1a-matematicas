module.exports = {
    /**
     * Suma de dos números.
     * @example
     * n1 =1, n2=3 => resultado 4
     * @param {*} n1 Número 1 de la suma
     * @param {*} n2 Número 2 de la suma
     */
    suma : function(n1, n2){
        return n1 + n2;
    },
    /**
     * Resta de dos números.
     * @example
     * n1 =1, n2=3 => resultado -2
     * @param {*} n1 Número 1 de la resta
     * @param {*} n2 Número 2 de la resta
     */
    resta : function(n1, n2){
        return n1 - n2;
    },
    /**
     * Multiplicación de dos números.
     * @example
     * n1 =1, n2=3 => resultado 3
     * @param {*} n1 Número 1 de la multiplicación
     * @param {*} n2 Número 2 de la multiplicación
     */
    multiplicacion : function(n1, n2){
        return n1 * n2;
    },
    /**
     * División de dos números.
     * @example
     * n1 =1, n2=3 => resultado 0.33
     * @param {*} n1 Número 1 de la división
     * @param {*} n2 Número 2 de la división
     */
    division : function(n1, n2){
        return n1 / n2;
    }
}