function add(n1: number, n2: number, showValue: boolean, msg: string){
    
    // return n1 + n2
    if (showValue){
        console.log(msg + n1 + n2);
        
    } else {
        return n1 + n2
    }
}



const num1 = 5
const num2 = 2.5
const valueType = false
const message = "Result is : "

const result = add(num1, num2, valueType, message)
console.log(result); 