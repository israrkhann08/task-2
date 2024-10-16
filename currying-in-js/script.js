// currying
//in simple word define currying breaking down a function that takes many parameter into 
// a chain of function and each function take only one parameter
// basic purpose is code-reuseability, and maintainability.

// real world example 
//CREATE URL BUILDER
function urlBuilder(httpurl){
    return function(rootaddress){
        return function(googleurl){
           return function(searchurl){
                return httpurl + rootaddress + googleurl + searchurl;
           }
        }
    }
}
console.log(urlBuilder("https/")("localhost/")("google")(".com"));
