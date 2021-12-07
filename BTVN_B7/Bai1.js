// // CÁCH 1
// const find = (str) => {
//     let result = -1;
//     let str_cpy = str;
//     while(str_cpy.length != 0) {
//         key = str_cpy[0];
//         beforeSize = str_cpy.length;
//         str_cpy = str_cpy.replaceAll(key, '');
//         if(str_cpy.length === beforeSize- 1) {
//             result = str.indexOf(key);
//             break;
//         } 
//     }
//     return result;
// }

// CÁCH 2
const find = (str) => {
    let map = {};
    for (const item of str) 
        map[item] = map.hasOwnProperty(item) ? ++map[item] : 1;
    for(let i in str){
            if(map[str[i]] == 1)
                return i;
    }
    return -1;
};


const str1="tranduong";
const str2="hitclubhiuhiu";
const str3="aabb";

console.log(find(str1));
console.log(find(str2));
console.log(find(str3));
