//レコードの複製
function wmap_setRecordCopy(record_data,copy_num,head_ignore_num){
  
  var result = [];
  
  for(var i = 0;i < record_data.length; i++)
  {
    if(i >= head_ignore_num)
    {
      for(var j = 0;j < copy_num; j++)
      {
        result.push(record_data[i]);
      }
    }
    else
    {
      result.push(record_data[i]);
    }
  }
  
  return result;
}