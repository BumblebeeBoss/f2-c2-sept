const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 22, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
    let object={};
    data.forEach((obj) => {
        if(obj.profession=="developer"){
            object=obj
        }
    })
    console.log(object)
  }




// function printDeveloper() {

// //   data.forEach((obj) => {
// //     if(obj.profession=="developer"){
// //     console.log(obj);
// //     }
// //   });
// //   console.log(data[0].profession);

// //   for(let i =0;i<data.length;i++){
// //       if(data[i].profession==developer){
// //           console.log(data[i]);
// //       }
// //   }
//  console.log(data);
// }
//   printDeveloper();

// 2. Add Data
function addData() {
  //Collect data from user through prompt
  const name = prompt("Enter the name");
  const age = parseInt(prompt("Enter the age"));
  const profession = prompt("Enter the profession");
  // Now we will check whether user provided valid input or not
  if (name && !isNaN(age) && profession) {
    //Create a new data object object with the collected data
    const obj1 = { name, age, profession };
    //Add the new data object to the data Array
    data.push(obj1);
    //Log a message to confirm addition
    console.log("Data added", obj1);
  } else {
    console.log("Invalid Input.Data not added.");
  }
}

// // 3. Remove Admins
// function removeAdmin() {
//   //Create a new Array to store non-admin object
//   const newData = [];
//   //Now loop through the existing data array
//   for(let i =0;i<data.length;i++){
//     //Check if the current person's proffesiion is not admin
//     if(data[i].proffession !=="admin"){
//       newData.push(data[i]);
//     }
//   }
//   //now update the data array with new array containing non admins
//   data = newData;
//   console.log("Admin removed",Data);
// }
// 3. Remove Admins
function removeAdmin() {
  // Create a new array with non-admin objects using filter
  const filteredData = data.filter((person) => person.profession !== "admin");

  // Log a message to confirm the removal
  console.log("Admins removed:", filteredData);
}

// 4. Concatenate Array
function concatenateArray() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const concatenatedArray = array1.concat(array2);
  console.log("Concatenated Array", concatenatedArray);
}

// 5. Average Age
// function averageAge() {
//   let totalAge = 0;
//   for (let i = 0; i < data.length; i++) {
//     totalAge += data[i].age;
//   }
//   const averageAge = totalAge / data.length;
//   console.log("Average age", averageAge);
// }
// averageAge();

  function averageAge() {
    let sum=0;
    data.forEach((obj)=>{
       sum+=obj.age;
    }
    )
    const avgAge=sum/data.length;
     console.log("avgAge="+avgAge);
  }

// 6. Age Check
  function checkAgeAbove25() {
    let count=0;
    data.forEach((obj)=>{
        if(obj.age>25){
            count++;
        };
    }
    )
    if (count>=1) {
            console.log("At least one person is above age of 25.");
          } else {
            console.log("No person is above the age of 25");
     }
  }


// 7. Unique Professions
function uniqueProfessions() {
  //create an empty object to store unique profession
  const uniqueProfessions = {};
  for (let i = 0; i < data.length; i++) {
    const profession = data[i].profession;
    uniqueProfessions[profession] = true;
  }
  const uniqueProfessionsArray = Object.keys(uniqueProfessions);
  console.log("Unique Profession", uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age Ascending", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  //Loop through the data array to find John professin and update his profession
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === "John") {
      data[i].profession = "manager";
      break;
    }
  }
  console.log("John's Updated Profession", data);
}

// 10. Profession Count
function getTotalProfessions() {
  //getTotalProfessions
  let developerCount = 0;
  let adminCount = 0;
  for (let i = 0; i < data.length; i++) {
    const profession = data[i].profession;
    if (profession === "developer") {
      developerCount++;
    } else if (profession === "admin") {
      adminCount++;
    }
  }
  console.log("Total Developers", developerCount);
  console.log("Total Admins", adminCount);
}

// const data = [
//     { name: "john", age: 24, profession: "developer" },
//     { name: "jane", age: 27, profession: "admin" },
//   ];

//   // 1. Print Developers
//   function printDeveloper() {
//     data.forEach((obj)=>{
//         console.log(obj.profession);
//     }
//     )
//     // console.log(data[0].profession)
//   }

//   // 2. Add Data
//   function addData() {
//     //     obj1={
//     //     name:prompt("Enter a name:"),
//     //     age:parseInt(prompt("Enter an age:")),
//     //     profession:prompt("Enter a profession:")
//     //   };
//     //   data.push(obj1)
//     //   console.log(data)

//     let obj1={};
//     obj1.name=prompt("Enter a name");
//     obj1.age=parseInt(prompt("Enter an age"));
//     obj1.profession=prompt("Enter a profession");
//     data.push(obj1)
//     console.log(data)
//   }

//   // 3. Remove Admins
//   function removeAdmin() {
//     data.forEach((obj)=>{
//         if(obj.profession=="admin"){
//             obj.profession="";
//             //delete obj.profession;
//         };
//     }
//     )
//     console.log(data);
//   }

//   // 4. Concatenate Array
//   function concatenateArray() {

//   }

//   // 5. Average Age
//   function averageAge() {
//     let sum=0;
//     data.forEach((obj)=>{
//        sum+=obj.age;
//     }
//     )
//     let avgAge=sum/data.length;
//     return avgAge;
//     // console.log(avgAge);
//   }

//   // 6. Age Check
//   function checkAgeAbove25() {
//     let count=0;
//     data.forEach((obj)=>{
//         if(obj.age>25){
//             count++;
//         };
//     }
//     )
//     return  "there are"+count+"person older than 25";
//     // console.log("there are"+count+"person older than 25");
//   }

//   // 7. Unique Professions
//   function uniqueProfessions() {}

//   // 8. Sort by Age
//   function sortByAge() {}

//   // 9. Update Profession
//   function updateJohnsProfession() {
//     // manager
//     data.forEach((obj)=>{
//         if(obj.name=="john"){
//             obj.profession="manager";
//             //delete obj.profession;
//         };
//     }
//     )
//     // return data;
//     console.log(data);
//   }

//   // 10. Profession Count
//   function getTotalProfessions() {}
