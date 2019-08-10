"use strict";
exports.__esModule = true;
var Newclass = /** @class */ (function () {
    function Newclass(privateaccessname2) {
        this.privateaccessname2 = privateaccessname2;
        console.log('Hello');
        console.log("name given is " + this.name1);
        this.name2 = privateaccessname2;
    }
    //Accessing the property
    Newclass.prototype.propertyAccess = function () {
        if (this.name) {
            console.log("name given is " + this.name);
        }
        ;
        return this.name;
    };
    ;
    Newclass.prototype.privatePropertyAccess = function () {
        if (this.name2 && this.age) {
            console.log("The private property name is " + this.name2 + " and age is " + this.age);
        }
    };
    ;
    Object.defineProperty(Newclass.prototype, "privateAge", {
        get: function () {
            return this.age;
        },
        set: function (privateAge) {
            this.age = privateAge;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Newclass.staticPropertyAccess = function () {
        if (this.areaCode) {
            console.log(" given is static value is " + this.areaCode);
        }
        ;
    };
    ;
    return Newclass;
}());
exports.Newclass = Newclass;
var newclassinstance = new Newclass('Amita');
newclassinstance.name = 'Neha';
newclassinstance.name1 = 'Seema'; //no output
newclassinstance.privateAge = 30;
Newclass.areaCode = 400602;
Newclass.staticPropertyAccess();
newclassinstance.privatePropertyAccess();
newclassinstance.propertyAccess();
