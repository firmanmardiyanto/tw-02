<script>
	import SignUpForm from '$lib/components/SignUpForm.svelte';

	let error;

	async function handleSubmit({ detail: { username, email, password } }) {
		try {
			const response = await fetch('http://localhost:1337/api/auth/local/register', {
				method: 'POST',
				body: JSON.stringify({ username, email, password }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const responseJson = await response.json();
			if (responseJson?.error) {
				error = responseJson.error?.message;
				return;
			}
			if (window && window.sessionStorage) {
				window.sessionStorage.setItem('user', JSON.stringify(responseJson));
				window.location = '/home';
			}
		} catch (e) {
			error = e.message;
		}
	}
</script>

<div class="flex items-center justify-center h-screen">
	<div class="w-2/5">
		<h1 class="text-2xl font-semibold text-center">Sign Up</h1>
		{#if error}
			<p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
		{/if}
		<SignUpForm class="max-w-xl mx-auto mt-8" on:submit={handleSubmit} />
	</div>
</div>
