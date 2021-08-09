export default { 
	type:'document',
	name:'product-type',
	fields:[
		{ type:'string',name:'name' },
		{ type:'array',name:'products', of:[
			{ type:'reference',name:'art',to:{ type:'art' } },
		] },
	]
}
