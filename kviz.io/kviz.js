function check(choice) {
	if(choice==1){
		var q1=document.myform.q1.value;
		var count=0;
	
		if(q1=="a") {
			    count++;
		}

		alert("You ROCK and you just got "+count+" point");
		return(1);
	}
	if(choice==2){
		var q2=document.myform.q2.value;
		var count=0;

	    if(q2=="b") {
			    count++;
		}
		alert("You are STELLAR and you got another golden "+count+" point");
	}
	if(choice==3){
		var q3=document.myform.q3.value;
		var count=0;

		if(q3=="a") {
			    count++;
		}
		alert("You are AMAZING another "+count+" golden point");
	}	
}