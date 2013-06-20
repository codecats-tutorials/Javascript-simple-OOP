(function(){
	Z.Subscribe=function(){
		this.name="Subscribe";
		/*private: not extendable*/
//		Z.Subscribe.test=function(){
	//		console.log('test priv in sub');
//		}
		/*public: not extendable*/
	/*	this.testPublic=function(){
			Z.Action.test();
			console.log('action public in sub');
		};*/
	};
	Z.Subscribe.prototype={
		/*public: extendable*/
	/*	testPublic:function(){
			//Z.Subscribe.test();
			this.test();
			console.log('action public in sub');
		},*/
		/*!protected: extendable*/
	//	test:function(){
			
	//		console.log(this);
	//	},
	};
	Z.Extend(Z.Subscribe, Z.Action);
})();