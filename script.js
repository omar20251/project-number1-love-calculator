
let loveCache = JSON.parse(localStorage.getItem('loveCache')) || {};
function calculateLove(){
  const name1 = document.getElementById("name1").value.trim();//trim is used to remove spaces before and after the name
  const name2 = document.getElementById("name2").value.trim();
  
  if(!name1 || !name2){
    alert('please enter both names');
  }
  
  else{
    const cacheKey = name1 + name2;
    let lovePercentage;
    if(loveCache[cacheKey] !== undefined){
      lovePercentage = loveCache[cacheKey];
    }
    else{
      lovePercentage = Math.floor(Math.random() * 101);
      loveCache[cacheKey] = lovePercentage; // Store in cache
      localStorage.setItem('loveCache', JSON.stringify(loveCache));
    }
    

    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2}'s love percentage is ${lovePercentage}%`;

    if(lovePercentage <30 ){
    result.innerHTML += "<br> not a great match you deserve better honey";
    }else if(lovePercentage<70){
      result.innerHTML += "<br> there is potential :)";
    }else{
      result.innerHTML += "<br> great match congrats";
    }
  }
  /*
    Math.random() // returns 0 to 0.999...
    Math.random() * 101 // returns 0 to 100.999...
    Math.floor(Math.random() * 101) // returns 0 to 100
  */ 

  
}