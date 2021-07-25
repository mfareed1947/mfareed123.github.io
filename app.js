// Question no# 1
// var itemsArray = [
//     {name:'juice' ,price:50, quantity:3},
//     {name:'cookie' ,price:30, quantity:9},
//     {name:'shirt' ,price:880, quantity:1},
//     {name:'pen' ,price:100, quantity:2}];

//     console.log(itemsArray[0].price * itemsArray[0].quantity)
//     console.log(itemsArray[1].price * itemsArray[1].quantity)
//     console.log(itemsArray[2].price * itemsArray[2].quantity)
//     console.log(itemsArray[3].price * itemsArray[3].quantity)
    
// var stdInfo=[
          
//           {firstName:"Muhammad",lastName:"Fareed",email:"mfareed1504@gmail.com",password:"1947",age:"20",gender:"male",city:"karachi",country:"Pakistan"}
          
// ]
// console.log("age exist :"+stdInfo[0].hasOwnProperty("age"));
// console.log("country exist :"+stdInfo[0].hasOwnProperty("country"));
// console.log("First Name :"+stdInfo[0].firstName);
// console.log("last Name :"+stdInfo[0].lastName);



function studbio(FirstName,lastName,email,password,age,gender,city,country)
{
          this.FirstName=FirstName;
          this.lastName=lastName;
          this.email=email;
          this.password=password;
          this.age=age;
          this.gender=gender;
          this.city=city;
          this.country=country;
}
var stud1=new studbio("Muhammad","Fareed","mfareed1504@gmail.com",1947,"male","karachi","pakistan");
var stud2=new studbio("nouman","ahmed","nomi123@gmail.com",1965,"male","karachi","pakistan");
console.log(stud1);
console.log(stud2);


// Question 4

function CheckPopulation(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  
  const Peoples = new CheckPopulation(
    "Muhammad",
    "Male",
    "saddar",
    "electrical Engineering",
    "Developer"
  );
  console.log(Peoples);
  
  //save vales of education
  function educationData() {
    var select = document.getElementById("education");
    localStorage.setItem("save", select.value);
   
              console.log(select.value)
     
  }
  
  //save values for profession
  function professionPeoples() {
    var profession = document.getElementById("profession");
      profession[localStorage.getItem("save")];
              console.log(profession.value);
      localStorage.setItem("profession", profession.value);
    
  }
  
  //ave values of radio buttons
  function gender(){
  var radio = document.getElementsByName("gender");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      localStorage.getItem("Male");
      console.log("male")}
      else {
      localStorage.getItem("female");
  
      }
  }
  }

