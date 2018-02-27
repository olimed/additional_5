module.exports = function check(str, bracketsConfig) {
  // your solution
  //let brackets = {'[': ']', '{': '}', '(': ')',};
  let brackets = { };//opening: [], closing: [],};
  let stack = [];
  let openingSameBrackets = false;
  let change = 0;
  let buf;
  for (let i = 0; i < bracketsConfig.length; i++)
    {
      buf = bracketsConfig[i][0]
      brackets.buf = undefined;
      brackets[buf] = bracketsConfig[i][1];      
    }
  

  for(let i = 0; i < str.length; i++)
    {
      if (str[i] == brackets[str[i]]){
        if (openingSameBrackets == false){
          openingSameBrackets = true;
          stack.push(str[i]);
          continue;
        }
        else{          
          if ((buf = stack.pop()) == str[i]){
            if (change % 2 == 0){
              openingSameBrackets = false; 
              continue;             
            }           
            change--;
            continue;
          }
          else{
            if (str[i] == brackets[str[i]]){
              stack.push(buf);
              stack.push(str[i]);
              change++;
              continue;
            }
            stack.push(str[i]);
            break;
          }            
        }
      }
      if (brackets[str[i]]){
        stack.push(str[i]);
        continue;
      }
      else{
        if (brackets[stack.pop()] != str[i]){
          stack.push(str[i]);
          break;
        }
        else
          continue;
      }     
    }
  if (stack.length > 0)
    return false  
  return  true 
}