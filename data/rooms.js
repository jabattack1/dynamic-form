
let parsedData=''

if(typeof(Storage) !== "undefined"){
   parsedData = JSON.parse(localStorage.getItem('submittedData'));
}
else{
  parsedData=[];
}

export default parsedData;


