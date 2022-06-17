<script>
	import SignInForm from '$lib/components/SignInForm.svelte';

	let error;

	async function handleSubmit({ detail: { email, password } }) {
		const response = await fetch('http://localhost:1337/api/auth/local', {
			method: 'POST',
			body: JSON.stringify({ identifier: email, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const responseJson = await response.json();
		if (responseJson?.error) {
			error = responseJson.error.message;
			return;
		}
		if (window && window.sessionStorage) {
			window.sessionStorage.setItem('user', JSON.stringify(responseJson));
			window.location = '/home';
		}
	}
</script>

<h1 class="text-2xl font-semibold text-center">Sign In</h1>
{#if error}
	<p class="mt-3 text-red-500 text-center font-semibold">{error}</p>
{/if}
<SignInForm class="max-w-xl mx-auto mt-8" on:submit={handleSubmit} />
