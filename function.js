function add(a, b)
{
  return a + b;
}

function loop(a)
{
  while(a<100)
    {
      a++;
    }
  return a;
}

function regEx(a)
{
  var myRE = new RegExp("hello");
  if(myRE.test(a))
  {
    alert("there a match");      
  }
}

function makeArray()
{
  //you can add any type in the array
  //mixe data in javascript
  var myArray = [];
  myArray[0] = 15;
  myArray[1] = "hello";
  myArray[2] = 50.5;
  alert("array created");
  return myArray;
  
}

function loopArray(myArray)
{
  for(var i = 0; i < myArray.length; i++)
    {
      alert(myArray[i]);
    }
}