var prime = function(num) {
	
	for(i=2;i<=num/2; i++)	{
		if(num%i === 0) {
			return ("not prime");
			}
		}
		return ("prime");

	}

prime (1343);