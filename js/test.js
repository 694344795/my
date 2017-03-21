$(function(){
//	console.log(1);
//    console.log($('.banner-img').find('img').prop('src'));
    	var $str;
    	var $strall;
      $.each($('.banner-img').find('img'), function(index,obj) {
//    	console.log( $(this).prop('src'));
      	 $str = $(this).prop('src');
        	  $str = $str.replace('http://localhost/item/php/index.php?name=',"");
      		console.log($str);
      		$.ajax({
      			type:"GET",
      			url:'http://localhost/item/php/index.php?',
      			data:{"name":$str},
      			async:true,
      			success:function(res){
   			    	console.log(res);
      			}
      		});
      });

})
