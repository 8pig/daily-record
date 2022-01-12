let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
/* 
[
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]

*/

// let midd = 0

// for (let i = 1; i < arr.length; i++) {
//   if(arr[mind].id == arr[i].pid){

//   }
  
  
// }


const aaa = [1, 3, [5, 2], [2, 3, [4, 5]]];
function flatArr(arr){
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      res =  res.concat(flatArr(arr[i]))
    }else {
      res.push(arr[i])
    }
  }
  return res;


}
console.log(flatArr(aaa));