(function(){
	Z.Subscribe2=function(){
		this.name="Subscribe2";
	//	console.log('subscribe construct');
/*		this.testPublic=function(){
			console.log('action public in sub2');
		};*/
		//this.testPublic=function(){
			//Z.Subscribe2.test();
		//	this.test();
		//	console.log('action public in sub2');
	//	};
	}
	Z.Subscribe2.prototype={
		/**
		 * override testPublic
		 */
		testPublic:function(){
			console.log('action public in sub2');
		},
	};
	Z.Extend(Z.Subscribe2, Z.Subscribe);
})();