(function(){
	Z.Action=function(rel){
		this.name="Action";
		/**
		 * private function: not extendable
		 */
		Z.Action.test=function(){
			console.log('test prv in Action');
		};
		/**
		 * public function: not extendable
		 */
		this.sayHello=function(){
			conslole.log('hello in Action');
		};
		
	};
	
	/**
	 * extendable container
	 */
	Z.Action.prototype={
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
				Z.Action.test();
			},
	};
	
})();
