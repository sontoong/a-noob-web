
                                /*numba 1*/
// var b= 11;
// console.log(b);
// x= false;
// if (x==false || null || undefined || "" || 0 || NaN) {
//     console.log("ok sure");
// }
// else console.log("ok no");
                                /*numba 2*/
// var citizen = {
//     name: "nann",
//     family: {
//         grandpa: "ded",
//         grandma: "alive"
//     },
//     "wealth": "none"
// };
// console.log("this human's name is: " + citizen.name);
// console.log(citizen);
                                /*numba 3*/
// function money(multiplier) {
//     var myFunc = function(x) {
//         return multiplier * x;
//     };
//     return myFunc;
// }

// var moneyrn = money(1);
// // console.log(moneyrn(150));
// var doubleSalary = money(2);
// // console.log(doubleSalary(150));

// function countMyMoney(x, operation) {
//     return operation(x);
// }

// var result = countMyMoney(420, doubleSalary);
// console.log(result);
// result = countMyMoney(230, moneyrn);
// console.log(result);
                                /*numba 4*/

// function changeObject(objValue) {
//     console.log("before: ");
//     console.log(objValue);

//     objValue.x = 5;
//     console.log("after: ");
//     console.log(objValue);
// }

// value = {x: 7};
// changeObject(value);
// console.log("after changeObject, original value: ");
// console.log(value);
                                /*numba 5*/
// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea =
//     function() {
//         return Math.PI * Math.pow(this.radius, 2);
// };

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var anotherCircle = new Circle(20);
// console.log(anotherCircle);
                                /*numba 6*/
// var literalCircle = {
//     radius: 10,

//     getArea: function() {
//         var self = this;
//         console.log(this);

//         var increasedRadius = function() {
//             self.radius = 20;
//         };
//         increasedRadius();
//         console.log(this.radius);

//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircle.getArea());
                                /*numba 7*/
// var names = ["1","2","3"];
// for (var i= 0; i< names.length; i++) {
//     console.log("this is " + names[i]);
// }
// console.log("round 1 done, round 2:");

// names[100] = "101";
// for (var i= 0; i< names.length; i++) {
//     console.log("this is " + names[i]);
// }

// var citizen = {
//     name: "nann",
//     family: {
//         grandpa: "ded",
//         grandma: "alive"
//     },
//     "wealth": "none"
// };
// for (var prop in citizen) {
//     console.log(prop + ": " + citizen[prop]);
// }
// names.numba = "101";
// for (var numbers in names) {
//     console.log("numba " + names[numbers]);
// }
                                /*numba 8*/
function makeMultiplier(multiplier) {
    function b() {
        console.log("multiplier rn: " + multiplier);
    }
    b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));