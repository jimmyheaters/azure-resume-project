window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl ='https://getresumecounterbd.azurewebsites.net/api/GetResumeCounter?code=p50BzjT7DdzwfxzOSjKvp6jkLVY0Q04WBz7aFq9ynS_QAzFuEkPzCA=='
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}