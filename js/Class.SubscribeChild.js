(function(){
	OOPJS.SubscribeChild=function(){
		this.name="SubscribeChild";
	}
	OOPJS.SubscribeChild.prototype={
		/**
		 * override testPublic
		 */
		testPublic:function(){
			console.log('action public in subChild');
		},
	};
	OOPJS.Extend(OOPJS.SubscribeChild, OOPJS.Subscribe);
})();