const regex = /hello/
// const regex = new RegExp("hello")

const result = regex.test("Hello World")
console.log(result);

const result2 = regex.exec("Hello World")
console.log(result2);

const str = "Hello world , hello again"
const regex2 = /hello/gi
const match = str.match(regex2)
console.log(match);

const str2 = "Hello world"
const regex3 = /world/
const result3 = str2.replace(regex3,"JS")
console.log(result3);

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "user@example.com"
const isValid = emailRegex.test(email)
console.log(isValid);

const check = ()=>{
    const jorNum = /^(?:\+962|00962)\d{9}$/
    const phoneNumber = document.getElementById("phone").value
    if(jorNum.test(phoneNumber)){
        console.log("Valid Number");
        const string = document.getElementById("valid?")
        string.innerText="Valid Number"
        localStorage.setItem("number",phoneNumber)
    }else{
        console.log("Invalid Number");
        const string = document.getElementById("valid?")
        string.innerText="Invalid Number"
        sessionStorage.setItem('number',"Invalid")
    }
}
