
let parsedData=''

if(typeof(Storage) !== "undefined"){
   parsedData = JSON.parse(localStorage.getItem('submittedData'));

   console.log('happy');
}
else{
  parsedData=[];
}

 console.log(parsedData);
export default parsedData;


