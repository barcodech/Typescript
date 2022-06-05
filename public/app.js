"use strict";
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["COLA"] = 0] = "COLA";
    ResourceType[ResourceType["PEPSI"] = 1] = "PEPSI";
    ResourceType[ResourceType["MILO"] = 2] = "MILO";
    ResourceType[ResourceType["LATTE"] = 3] = "LATTE";
})(ResourceType || (ResourceType = {}));
;
const doc3 = {
    uid: 1,
    resourceType: ResourceType.COLA,
    data: 'adam'
};
const doc4 = {
    uid: 1,
    resourceType: ResourceType.PEPSI,
    data: ['cola', 'pepsi']
};
console.log(doc3);
console.log(doc4);
