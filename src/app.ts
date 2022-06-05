enum ResourceType { COLA, PEPSI,MILO,LATTE };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const doc3: Resource<string> = {
  uid: 1,
  resourceType: ResourceType.COLA,
  data: 'adam'
};

const doc4: Resource<string[]> = {
  uid: 1,
  resourceType: ResourceType.PEPSI,
  data: ['cola','pepsi']
};

console.log(doc3);
console.log(doc4);