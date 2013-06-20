var action=new OOPJS.Action();
console.log(action);
console.log('action.call in main:');
action.testPublic();


var sub=new OOPJS.Subscribe();
console.log(sub);
console.log('sub.call in main:');
sub.testPublic();

var subCh=new OOPJS.SubscribeChild();
console.log(subCh);
console.log('subCh.call in main:');
subCh.testPublic();
console.log('subCh.call in main:');
subCh.testPrivileged();

action.sayHello();

try{
	sub.sayHello();//error
}catch(err){
	console.log(err);
}
