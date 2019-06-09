
let parsedData=''

if(typeof(Storage) !== "undefined"){
  parsedData = JSON.parse(localStorage.getItem('submittedData'));
  // console.log('clear');
  // localStorage.clear();
}
else{
  parsedData=[];
}

export default parsedData;


