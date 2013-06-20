var action=new Z.Action();
console.log(action);
console.log('action.call in main:');
action.testPublic();


var sub=new Z.Subscribe();
console.log(sub);
console.log('sub.call in main:');
sub.testPublic();

var sub2=new Z.Subscribe2();
console.log(sub2);
console.log('sub2.call in main:');
sub2.testPublic();
console.log('sub2.call in main:');
sub2.testPrivileged();
