const studentArray = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  const removeFailedStudent = document.getElementById("removeFailedStudent");
  const concatenateArray = document.getElementById("concatenateArray");
 
 const addData = document.getElementById("addData");
  const nameInput = document.getElementById("nameInput");
  const marksInput = document.getElementById("marksInput");
  const ageInput = document.getElementById("ageInput");
 
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    const filteredStudents = studentArray.filter(student => student.marks >= 50);
    filteredStudents.map(student => console.log(student));
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    studentArray.forEach(student => {
      if(student.marks >= 50){
        console.log(student);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    
    let name = nameInput.value;
    let marks = marksInput.value;
    let age = ageInput.value;

    if (name != "" && marks != "" && age != "") {

        // create a new obj from the received value and
        const newObj = {
            id:4,name:"susan",age:"20",marks:"45"
        }

        //  then add it to the existing userData array
        userData.push(newObj);
        console.log(userData)
        listOnPage.innerHTML = "";
        userData.forEach((item) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `${item.id} &nbsp;&nbsp; Name: ${item.name} &nbsp; Age: ${item.age}  &nbsp; marks: ${item.marks}`;
            listOnPage.append(newDiv);
        })
    }
  }
  


       
  function removeFailedStudent() {
    //Write your code here, just console.log
    const updatedArray = studentArray.filter(student => student.marks >= 50);
    console.log(updatedArray);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [{id:5, name:q"dave", age:"22", marks:60},{id:6, name:"elia", age:"18", marks:70},{id:7, name:"bob", age:"20", marks:80}];

   const concatenateArray = studentArray.concat(newArray);
   console.log(concatenateArray);
  }
  