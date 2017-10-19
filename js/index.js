$(function(){
	let our=$('.our-div');
	let scale=$('.scale');
	let sImg=$('img',scale);
	let del=$('.delete>i');
	let left=$('.left');
	let right=$('.right');
	let index=0,imgs=0;
	our.on('click',function(){
		$(this).find('img');
		imgs=$('img',this).prop('src');
		sImg.prop('src',imgs);
		scale.addClass('active');
		index=$(this).index();
	})
	left.on('click',function(){
		index--;
		if (index<0) {
			index=our.length-1;
		}
		imgs=$('img',our[index]).prop('src');
		sImg.prop('src',imgs);
	})
	right.on('click',function(){
		index++;
		if (index>=our.length) {
			index=0;
		}
		imgs=$('img',our[index]).prop('src');
		sImg.prop('src',imgs);
	})
	$(sImg).on('click',function(e){
		if(e.clientX>innerWidth/2){
			right.triggerHandler('click');
		}
		if(e.clientX<innerWidth/2){
			left.triggerHandler('click');
		}
	})
	del.on('click',function(){
		scale.removeClass('active');
	})
})