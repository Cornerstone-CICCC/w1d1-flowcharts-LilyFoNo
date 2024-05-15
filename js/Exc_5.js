let student = 'Sammy'
let mark = 30
if (mark >= 80){
    console.log(`The mark obtained by ${student} is ${'A'}`)
}
else {
    if (mark >= 60 && mark < 80){
        console.log(`The mark obtained by ${student} is ${'B'}`)
    }
    else {
        if (mark >= 40 && mark < 60){
            console.log(`The mark obtained by ${student} is ${'C'}`)
        }
        else {
            console.log(`The mark obtained by ${student} is ${'No grade'}`)
        }
        
    }
    
}