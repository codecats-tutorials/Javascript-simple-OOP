var Z={};//namespace
(function(){
	Z.Extend=function(child, parent){
		for(var i in parent.prototype){
			if(!(i in child.prototype)){
				child.prototype[i]=parent.prototype[i];
			}
		}
	};
})();
