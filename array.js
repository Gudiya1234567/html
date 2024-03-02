// let array=['1',"name","year",17,"day",19,"mango",["roli",90],"gudiya",18]
// console.log(array[0])
// console.log(array)
// console.log(array[-3])
// console.log(array[7][1])
// console.log(typeof(array))
// console.log(typeof(null))

// let arr=[]
// arr[3]="apple"
// arr[5]="lotus"
// arr[0]="dog"

// console.log(arr)


// const fruit=[3,5,7,83,3,4,"35"]
// let fll=fruit[4]
// // console.log(typeof(fll))
// // console.log(typeof(fruit))
// fruit[3]=54;
// console.log(fruit)

// fruit[5]=34;
// console.log(fruit)


// let arr1=[[1,2,3],[4,5,6]]
// console.log(arr1[0][1],arr1[1][1])


// const arr2=[2,3,4]
// arr2.push(6)
// console.log(arr2)

// const str="gudiya"
// str="roli"
// console.log(str)


// let arr={
//     Name:"roli",
//     surname:"singh",
//     age:12,

//     address:function(){
//        let b=["mumbai",401394,true]
//        b.push(23)
//        return b
//     }
// }

// let a=arr.address()
// console.log(a)


let obj={
    name:"gudiya",
    lname:"vishwakarma",
 education:function(){
        let arr2=["ssc","hsc","graduation",23]
        size=arr2.length
        arr2.push("hello")
        
        return arr2

    }

}
let p=obj.education()
console.log(p)
console.log(size)




let fruits=[1,3,5,6,9]
let s=fruits.toString()
console.log(s)