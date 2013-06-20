(function(){
	OOPJS.Action=function(rel){
		this.name="Action";
		/**
		 * private function: not extendable
		 */
		OOPJS.Action.test=function(){
			console.log('test prv in Action');
		};
		/**
		 * public function: not extendable
		 */
		this.sayHello=function(){
			console.log('hello in Action');
		};
		
	};
	
	/**
	 * extendable container
	 */
	OOPJS.Action.prototype={
			/**
			 * public function: extendable
			 */
			testPublic:function(){
				console.log('test pub in Action');
				
			},
			/**
			 * privileged function: extendable
			 */
			testPrivileged:function(){
				OOPJS.Action.test();
			},
	};
	
})();
