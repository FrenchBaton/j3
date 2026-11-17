function func1(n1,n2){
    return n1<n2 ? -1 : n1>n2 ? 1 : 0
}
function func2(n){
    return n<=1 ? 1 : n * func2(n-1)
}
function func3(n1,n2,n3){
    return ""+n1+n2+n3
}
function func3(n1,n2,n3){
    return ""+n1+n2+n3
}
function func4(){
    return arguments.length==1 ? arguments[0]**2 : arguments[0]*arguments[1]
}
function func5(n){
    let ar = new Array()
    let sum = 0
    for(let i = 1; i<=(Math.ceil(n/2)); i++){
        if((n%i) == 0) {
            ar.push(i)
        }
    }
    for(let i = 0; i < ar.length; i++){
        // console.log(ar[i])
        sum+=ar[i]
    }
        // console.log(sum)
    // console.log(ar.join(", "))
    return sum==n
}
function func6(n1,n2){
    let ar = new Array()
    for(let i = n1; i<=n2; i++){
        if(func5(i)) {
            ar.push(i)
        }
    }
    return ar.join(", ")
}



console.log("func1(3,2)  "+func1(3,2))
console.log("func2(3)  "+func2(3))
console.log("func3(3,2,1)  "+func3(3,2,1))
console.log("func4(3,2)  "+func4(3,2))
console.log("func4(3)  "+func4(3))
console.log("func5(6)  " + func5(6))
console.log("func6(2,9)  " + func6(2,30))
