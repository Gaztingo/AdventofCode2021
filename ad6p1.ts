
let input: number[] = [1,1,3,5,1,3,2,1,5,3,1,4,4,4,1,1,1,3,1,4,3,1,2,2,2,4,1,1,5,5,4,3,1,1,1,1,1,1,3,4,1,2,2,5,1,3,5,1,3,2,5,2,2,4,1,1,1,4,3,3,3,1,1,1,1,3,1,3,3,4,4,1,1,5,4,2,2,5,4,5,2,5,1,4,2,1,5,5,5,4,3,1,1,4,1,1,3,1,3,4,1,1,2,4,2,1,1,2,3,1,1,1,4,1,3,5,5,5,5,1,2,2,1,3,1,2,5,1,4,4,5,5,4,1,1,3,3,1,5,1,1,4,1,3,3,2,4,2,4,1,5,5,1,2,5,1,5,4,3,1,1,1,5,4,1,1,4,1,2,3,1,3,5,1,1,1,2,4,5,5,5,4,1,4,1,4,1,1,1,1,1,5,2,1,1,1,1,2,3,1,4,5,5,2,4,1,5,1,3,1,4,1,1,1,4,2,3,2,3,1,5,2,1,1,4,2,1,1,5,1,4,1,1,5,5,4,3,5,1,4,3,4,4,5,1,1,1,2,1,1,2,1,1,3,2,4,5,3,5,1,2,2,2,5,1,2,5,3,5,1,1,4,5,2,1,4,1,5,2,1,1,2,5,4,1,3,5,3,1,1,3,1,4,4,2,2,4,3,1,1]

let lanternfishIC0: number = 0
let lanternfishIC1: number = 0
let lanternfishIC2: number = 0
let lanternfishIC3: number = 0
let lanternfishIC4: number = 0
let lanternfishIC5: number = 0
let lanternfishIC6: number = 0
let lanternfishIC7: number = 0
let lanternfishIC8: number = 0

let temp0: number = 0
let temp1: number = 0
let temp2: number = 0
let temp3: number = 0
let temp4: number = 0
let temp5: number = 0
let temp6: number = 0
let temp7: number = 0
let temp8: number = 0

let days: number = 256  //worked for part 2 as well no changes neede /dance


for(let i =0; i < input.length; i++)
{
    if(input[i] == 0)   { lanternfishIC0++; }
    if(input[i] == 1)   { lanternfishIC1++; }
    if(input[i] == 2)   { lanternfishIC2++; }
    if(input[i] == 3)   { lanternfishIC3++; }
    if(input[i] == 4)   { lanternfishIC4++; }
    if(input[i] == 5)   { lanternfishIC5++; }
    if(input[i] == 6)   { lanternfishIC6++; }  
    if(input[i] == 7)   { lanternfishIC7++; }
    if(input[i] == 8)   { lanternfishIC8++; }
}

for(let i = 0; i < days; i++)
{
    temp7 = lanternfishIC8;
    temp6 = lanternfishIC7;
    temp5 = lanternfishIC6;
    temp4 = lanternfishIC5;
    temp3 = lanternfishIC4;
    temp2 = lanternfishIC3;
    temp1 = lanternfishIC2;
    temp0 = lanternfishIC1;
    temp6 = temp6 + lanternfishIC0;
    
    lanternfishIC8 = lanternfishIC0;
    lanternfishIC7 = temp7;
    lanternfishIC6 = temp6;
    lanternfishIC5 = temp5;
    lanternfishIC4 = temp4;
    lanternfishIC3 = temp3;
    lanternfishIC2 = temp2;
    lanternfishIC1 = temp1;
    lanternfishIC0 = temp0;

  console.log(lanternfishIC0+lanternfishIC1+lanternfishIC2+lanternfishIC3+lanternfishIC4+lanternfishIC5+lanternfishIC6+lanternfishIC7+lanternfishIC8)  

}

