/*
console.log('Hello World')
//String
let fname = 'John'
console.log('name',fname)
const idcard='123'

//Number
let age = 30
let hight = 150.5
const pi = 3.14
//Boolean
let isThai=false

fname='Tom'
idcard='456'

console.log('idcard',idcard)
console.log('name',fname,'hight',hight)
console.log('age',age)
*/

/*
+ บวก
- ลบ
* คูณ
/ หาร
% mod
*/
/*
let number1=5
let number2=10

let number3 = number1+number2
let number4 = number1-number2
let number5 = number1/number2
console.log('number3 = ',number3)
console.log('number4 = ',number4)
console.log('number5 = ',number5)

let number6='Prarawee'
let number7='chananate'
let number8=number6+' '+number7
console.log("number8=",number8)
*/
/**
 condition statement (if else switch)

 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า 
 >= มากกว่าเท่ากับ
 < น้อยกว่า
 <= น้อยกว่าเท่ากับ
 */
/*
let number1=5
let number2=3

let condition1=number1 <= number2//boolean(true false)
console.log('Condition is =',condition1)
//if else condition
if(number1 != number2){
    console.log('this if')

}else if(number1 == number2){
    console.log('this else if')
}else{
    console.log('this else')
}
*/

/*
Grade
>=80 A
>=70 B
>=60 c
>=50 D


let score = prompt('ใส่ตัวเลข')
if(score >=80){
    console.log('A')
}else if(score>=70){
    console.log('B')
}else if(score>=60){
    console.log('C')
}else if(score>=50){
    console.log('D')
}else{
    console.log('F')
}
    */
/*
&& และ
|| หรือ
! Not


let number1=5
let number2=10

let condition = !(number1>=3 || number2 >=11)
console.log('result of condition',condition)


let number =prompt('ใส่ตัวเลข')
if(number%2==0){
    console.log('You are even')
}else if(!(number%2==0)){
    console.log('You are odd')

}
*/
/*
for 
*/
/*
let counter =0
while (counter <10){
    console.log('Hi')
    //counter=counter+1
    //counter +=1
    counter++
}
for (let counter = 0 ; counter<10;counter++){
    console.log('hi')
}
*/

/**
 array
 
let age1=20
let age2=25
let age3=30

let ages=[20,25.30]
// แทนที่
ages=[200,150,400]

console.log('age1 age2 age3',age1,age2,age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array ',ages)
console.log('index',ages[0])

//ต่ออาเรย์
ages.push(25)
console.log('push array',ages)
//ลบอาเรย์
ages.pop()
console.log('pop array',ages)

if(ages.includes(30)){
    console.log('มีเลข 30 อยู่ในอาร์เรย์')
}
*/
/*
let ages=[50,20,25,30,35,40]
ages.sort()
console.log(ages)

let name_list=['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.lenght)
console.log("name_list",namr_list[0])
console.log("name_list",namr_list[1])
console.log("name_list",namr_list[2])

for(let indext=0;index < name_list.lenght;index++){
    console.log('name list',name_list[index])

}
*/
/**
 object
 */
/*
let student=[{
    age: 30,
    name:'bb',
    grade:'A'
},{
    age:35,
    name:'bb',
    grade:"B"
}]
student.push({
    age : 40,
    name:'bb',
    grade:'F'
})

for (let index=0;index < student .lenght;index++){
    console.log('Student number',(index+1))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
    

}
/*
console.log(student)
console.log(student.age)
console.log(student.name)
console.log(student.garde)


let age1=30
let name1='aa'
let garde1='B'


let age2=40
let name2='bb'
let garde='B'
*/
/*
let score1=55
let score=60
let grade=''
function calculat_grade(score){
    if (score>=80){
        grade='A'
    }else if(score>=70){
        grade='B'
    }else if(score>=60){
        grade='C'
    }else if(score>=50){
        grade='D'
    }else{
        grade='F'
    }
return grade
}
//เรียกใช้ฟังชัน
let grade1 = calculat_grade(score1)
console.log('Grade',grade)
*/

/**
 array
 */
let score=[20,30,40,50]
//let newScore=[]
// for (let index = 0;index<score.length;index++){
//     console.log('score',score[index])
//     if (score[index]>=30){
//         newScore.push(score[index])
//     }

//}
// let newScore=score.filter((s) => {
//     if(s>=30){
//         return true
//     }else{
//         return false
//     }
//     return s>=30
// })
// score = score.map((s) => {
//     return s*2

// })
// newScore.forEach((ns)=>{
//     console.log('forEach Score',ns)
// })

/**
 object
 */
let students=[
{
    name:'aa',
    score:50,
    grade:'D'
},{
    name:'bb',
    score:80,
    grade:'A'
}
]
let student=students.find((s) => {
    if(s.name == 'aa'){
        return true
    }
})

let double_score=students.map((s) => {
    s.score=s.score * 2
    return s
})
let highScore=students.filter((s) => {
    if(s.score>=120){
        return true
    }
})
console.log(student)

console.log('Double Score',double_score)