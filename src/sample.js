/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here


// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    var count = 0;
    var subStrArry = [];
    subStrArry = getAllSubstrings(input);
    
    
  //  console.log('subStrArry..',subStrArry);
  
  
   var i, j, allPossibilities = [];

  for (i = 0; i < subStrArry.length; i++) {
      for (j = 0; j < subStrArry.length ; j++) {
          if(subStrArry[i][1]<subStrArry[j][0] ){
                  allPossibilities.push([subStrArry[i],subStrArry[j]])
          }
        
        //  console.log('---Start----')
        //  console.log('i',i)
        //  console.log('j',j)
        //  console.log('after first splice ',sampleInput1)
         
          
         // console.log('---End----')
      }
  }
  
  allPossibilities.map((possiblity,key)=>{
      
         var test1 = input;
         var test2 = input;
         
         console.log('possiblity is ',possiblity);
         var val1  = test1.slice(possiblity[0][0],possiblity[0][1]);
         var val2 =  test1.slice(possiblity[1][0],possiblity[1][1]);
         console.log('final is ',val1+val2);
         
  })
  
  
    //console.log('allPossibilities is ',allPossibilities)
  //return result;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    process.stdout.write("Hi, " ,subStrArry);  
}

function getAllSubstrings(str) {
  var i, j, result = [];

  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push([i, j]);
      }
  }
  return result;
}



// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail



