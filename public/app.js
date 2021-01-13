//-----------------------------History br--------------------
function togglemenu() {
          document.getElementById("sidebar").classList.toggle("active");
}
           console.log(firebase)

//-----------------------------firebase--------------------

function getfirebase() {
           firebase.database().ref('calculator').on('child_added', function (data) {
        var atext = data.val().text;
        var bznswer = data.val().znswer;
        var ullist = document.getElementById("ullist")
        var li = document.createElement('li')
        var litext = document.createTextNode(`${atext} = (${bznswer})`)
            ullist.appendChild(li)
            li.appendChild(litext)
    })

}
getfirebase()
//-----------------------------Calculator Funcation--------------------
var ok = 0;
function btn(i) {
    var x = i
//-----------------------------Condition--------------------
    if (i === "=") {
    }
//-----------------------------Condition Cheack--------------------
    else if (x === "+" || x === "/" || x === "*" || x === "-") {
//-----------------------------1 sin add--------------------
    if (ok === 0) {
            document.getElementById("inpu").value += i
            ok = 1;
        }
    }
//-----------------------------Clear--------------------

    else if (x === "c") {
        document.getElementById("inpu").value = "";

    }
//-----------------------------1 add value--------------------

    else {
        document.getElementById("inpu").value += i;
        ok = 0;
    }
}

//-----------------------------Calulator--------------------
// var ok = 0;
// function btn(i) {  
//     var x =i    
// if (i === "=") {
//     }
//      else if(x === "+" || x === "/" || x === "*" || x === "-"){
//     if (ok === 0) {
//         document.getElementById("inpu").value += i
//             ok = 1;     
//     }
//     } 
//     else if(x === "c"){
//         document.getElementById("inpu").value = "";
  
//     }   
//     else{
//         document.getElementById("inpu").value += i;
//               ok = 0;
//     }
// }


//-----------------------------firebase--------------------
function equal() {
    var caltext = document.getElementById("inpu")
    var key = firebase.database().ref('calculator').push().key
        calcobj = {
        key: key,
        text: inpu.value,
        znswer: caltext.value = eval(caltext.value),
    }
       firebase.database().ref('calculator/' + key).set(calcobj)
}
//-----------------------------Delet all--------------------
function delall() {
       firebase.database().ref('calculator').remove()
       ullist.innerHTML = ""
}
//-----------------------------End--------------------
        // console.log(a)
        // console.log(b)

        // console.log(`${text} ${value}`)
//  console.log(`${data.val()} ${text} ${znswer}`)
//  console.log(`'calculator/key/data.val()' ${text} ${znswer}`)
// console.log(data.val()`${text} ${znswer}`)

        // console.log(`${text} ${znswer}`)


        // btn.setAttribute('class', 'edit')
// function edit(e) {

//     var valu = prompt("enter the IInd value",e.parentNode.firstChild.nodeValue)
//     var editvalue = {
//                     text:valu,
//                     key:e
//                     }
//         firebase.database().ref('todo').child(e.id).set(editvalue)
//         e.parentNode.firstChild.nodeValue=valu
// }             


// var a  =   btn.setAttribute('id',data.val().key)
// console.log(a)
        // console.log(calculator)
        // console.log(data.val())

        // var litextb = document.createTextNode(data.val().znswer)
        // console.log(`${litexta} ${litextb}`)
// console.log(litexta)



// alert(caltext.value = eval(caltext.value))
// var ulchild = document.getElementById("ulchild")
// var lichild = document.createElement('li')
// var textchild = document.createTextNode(calcobj.znswer)
// ulchild.appendChild(lichild)
// lichild.appendChild(textchild)
// console.log(lichild)
// console.log(calcobj.text)
// console.log(calcobj.znswer)
// function clear(){

//     firebase.database().ref('calculator').remove()
//     ullist.innerHTML=""
// }

//-----------------------------Calulator--------------------
//         caltext.value = eval(caltext.value)
// var ulchild = document.getElementById("ulchild")
// var lichild = document.createElement('li')
// var textchild = document.createTextNode(caltext.value = eval(caltext.value))
// ulchild.appendChild(lichild)
// lichild.appendChild(textchild)
// console.log(lichild)

       // inpu.value = ""

    //    zanswer=function name() {
    //         return this .text

    //         // return this .znswer
    //     },
    //    znswer: caltext.value = eval(caltext.value)


// console.log(key.concat(key))
// firebase.database().ref('calculator').child(key).set(znswer)

// console.log(calcobj)
//  console.log(`${caltext}${caltext.value = eval(caltext.value)}`)
    // var ullist = document.getElementById("ullist")
    // var li = document.createElement('li')
    // var litext = document.createTextNode(data.val().text)

    // ullist.appendChild(li)
    // li.appendChild(litext)


//         caltext.value = eval(caltext.value)


// var ulchild = document.getElementById("ulchild")
// var lichild = document.createElement('li')
// var textchild = document.createTextNode(caltext.value = eval(caltext.value))
// ulchild.appendChild(lichild)
// lichild.appendChild(textchild)
// console.log(lichild)


// var a =    alert(caltext.value = eval(caltext.value))
// console.log(a)


// if (x === "=") {
//     alert('raza')}



// function equal() {

// var text = document.getElementById('inpu')
//  text.value=eval(text.value) 
//  console.log(text)   
// }



// function btn(num) {

// var text = document.getElementById('inpu')  
// text.value += num
// console.log(text.value)
// }


// function clear() {
//     var text = document.getElementById('inpu')
//     text.value=""

// }



    //if (num === "=") {
//         var caltext = document.getElementById("inpu")
// caltext.value=eval(caltext.value)   
//     } else {

//     }
//console.log(caltext)

// function btn (i) {
//     var caltext = document.getElementById("inpu")
//     caltext.value +=i
// if (i === "=") {

//     caltext.value = eval(caltext).value

// } else if(i === "c"){
// caltext.value=""

// }
// else {
//     var key = firebase.database().ref('calculator').push().key
//     calcobj = {
//     text:inpu.value,
//     key:key
//     }
//     firebase.database().ref('calculator/'+key).set(calcobj)
//  //   console.log(caltext)
//     inpu.value=""


// }
// }





// function btne() {
//     var caltext = document.getElementById("inpu")
//     caltext.value=eval(caltext.value)       
// }



    // var x = num
    // if (x === "=") {
    //  var  a =   document.getElementById("").value=eval(document.getElementById("").value)
    // console.log(a)


    // } else {

    // }


//}
//-----------------------------Calulator--------------------

// var ok =0;
// function btn(i){
//     var x=i 
//     if (x ==="="){

// //-----------------------------Calulator--------------------

//         var a = document.getElementById("inpu").value=eval(document.getElementById("inpu").value)
//     //console.log(a)
// //       console.log(b += "The number is " + a );

// //   var ullist =document.getElementById("ullist")
// //    var li = document.createElement("li")
// //    var litext = document.createTextNode(a)
// //   li.appendChild(litext)
// //   ullist.appendChild(li)   
//        }
//        else if (x === "+" ||x === "/" ||x === "*" ||x === "-"){
//         if (ok===0) {
//         var b = document.getElementById("inpu").value+=i
//         ok=1;
//        console.log(b);

//     }
//     }
// //-----------------------------Calulator--------------------

//     else if (x==="c") {
//             document.getElementById("inpu").value="";

//         }
// //-----------------------------Calulator--------------------

//         else{
//             document.getElementById("inpu").value+=i;
//             ok=0;
//         }
//     }










