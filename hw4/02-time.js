const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  if(d2 > d1)
  {
    var temp = d2;
    d2 = d1;
    d1 = temp;
  }
  if(isNaN(d1) || isNaN(d2))
    return('Invalid input provided');
  var year = d1.getFullYear() - d2.getFullYear();
  var month = d1.getMonth() - d2.getMonth();
  if(month < 0)
   {
     year -= 1;
     month += 12;
   }
  if(year == 0)
   {
     if(month <= 1)
      var result = 'Time elapsed: '+ month + ' month';
    else
      var result = 'Time elapsed: '+ month + ' months';
   }
  else
  {
    if(year == 1)
    {
      if(month <= 1)
        var result =  'Time elapsed: '+ year + ' year, '+ month + ' month';
      else
        var result =  'Time elapsed: '+ year + ' year, ' + month + ' months';
    }
    else
      {
        if(month <= 1)
          var result =  'Time elapsed: '+ year + ' years, '+ month + ' month';
        else
          var result =  'Time elapsed: '+ year + ' years, ' + month + ' months';
      }
  }
  
  return(result);
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.

