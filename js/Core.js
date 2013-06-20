/**
 * namespace and extending function
 */
var OOPJS={};
(function(){
	OOPJS.Extend=function(child, parent){
		for(var i in parent.prototype){
			if(!(i in child.prototype)){
				child.prototype[i]=parent.prototype[i];
			}
		}
	};
})();
