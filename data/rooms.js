
let parsedData=''

if(typeof(Storage) !== "undefined"){
  parsedData = JSON.parse(localStorage.getItem('submittedData'));
  // localStorage.clear();
}
else{
  parsedData=[];
}

export default parsedData;


