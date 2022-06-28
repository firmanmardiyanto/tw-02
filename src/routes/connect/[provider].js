 
 export async function get({ params,url}) {
	const access_token = url.searchParams.get('access_token');
   const provider = params.provider
   const account = {
	access_token,
	provider
   }

	const response = await fetch(
			`http://localhost:1337/api/auth/${provider}/callback?access_token=${access_token}`
	);
	const result = await response.json();

   if (account) {
	 return {
		headers: { location: 'sign-in' },
		body: {result }
	 };
   }
  
   return {
     	headers: { location: 'sign-in' },
	 	status: 302
   };
 }
