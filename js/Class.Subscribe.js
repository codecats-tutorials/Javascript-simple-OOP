(function(){
	OOPJS.Subscribe=function(){
		this.name="Subscribe";
		/**
		 * public: not extendable
		 * overrides function from parent
		*/
	/*	this.testPublic=function(){
			console.log('action public in sub');
		};*/
	};
	OOPJS.Subscribe.prototype={
		/**
		 * public: extendable
		 * overrides function from parent
		 */
			/*
		testPublic:function(){
			//Z.Subscribe.test();
			this.test();
			console.log('action public in sub');
		},
		*/
	};
	OOPJS.Extend(OOPJS.Subscribe, OOPJS.Action);
})();