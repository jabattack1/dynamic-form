
let parsedData=''

if(typeof(Storage) !== "undefined"){
   parsedData = JSON.parse(localStorage.getItem('submittedData'));
localStorage.clear();
   // console.log('happy');
}
else{
  parsedData=[];
}

export default parsedData;


