const students = [
    {name:"jaya",language:90,maths:80,science:33,english:70,social:60},
    {name:"priya",language:95,maths:88,science:61,english:97,social:74},
    {name:"kali",language:92,maths:31,science:68,english:52,social:81},
    {name:"preethi",language:87,maths:84,science:77,english:69,social:99}
];

// To find the total marks of each student
// to find the grade for each subject
const contentTable = students.map(student => {
   const total = student.language+student.maths+student.science+student.english+student.social;
   const percentage = ((student.language+student.maths+student.science
        +student.science+student.english+student.social)/500)*100;   
    const result = student.language>33 && student.maths>33 && 
               student.science>33 && student.english>33 && student.social > 33 ? "Pass" : "Fail";



    return {
        ...student,
        TotalMarks : total,
        Percentage : percentage,
        Result : result
   }

});

const passedStudents = contentTable.filter(a =>  a.Result === "Pass").sort((a,b) => b.TotalMarks-a.TotalMarks);

const rankOfPassedStudents = passedStudents.map((student,index) => ({
    ...student,
    rank : index+1
}))

const finalResult = contentTable.map(student => {
const rankStudent = rankOfPassedStudents.find(n => n.name === student.name)
return{
    ...student,
    rank : rankStudent ? rankStudent.rank : "-"
}
});

console.table(finalResult);




    