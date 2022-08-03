var str = "ravi12312";
var str1 = str.split("");
function findInt() {
  for (var i = 0; i <= str1.length; i++) {
    var num=[];
    if (
      str1[i] == "0" ||
      str1[i] == "1" ||
      str1[i] == "2" ||
      str1[i] == "3" ||
      str1[i] == "4" ||
      str1[i] == "5" ||
      str1[i] == "6" ||
      str1[i] == "7" ||
      str1[i] == "8" ||
      str1[i] == "9"
    ) 
    {
    console.log(num= num+str[i])
    }
    
}

}
findInt(str1);
