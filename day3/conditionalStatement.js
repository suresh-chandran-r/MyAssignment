/* Create and call two JavaScript functions: `launchBrowser` with `if-else` 
for browser launch messages, and `runTests` with `switch` for test type messages */


let browserName = "chrome"
launchBrowser(browserName)

browserName = "nonchrome"
launchBrowser(browserName)

let testType = "smoke"
runTests(testType)

testType = "sanity"
runTests(testType)

testType = "regression"
runTests(testType)

function launchBrowser(broName){

    if (broName == "chrome"){
        console.log(broName);
    }else{
        console.log(broName);
    }
    
}

function runTests(testType){
    switch(testType){
        case "smoke":
            console.log("Inside ",testType);
            break;
        case "sanity":
            console.log("Inside ",testType);
            break;
        case "regression":
            console.log("Inside ",testType);
            break;            
        default:
            console.log("Inside default ",testType);
            break;
}
}

