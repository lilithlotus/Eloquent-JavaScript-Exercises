/*
Write a loop that makes seven calls to console.log
to output the following triangle:
#
##
###
####
#####
######
#######
*/

function loopingATriangle() {
  var str = '';
  while (str.length < 7) {
    str += '#';
    console.log(str);
  }
}
