<svelte:head>
	<title>Home</title>
</svelte:head>

<script> 
	import projects from '$lib/projects.json'; 
	import Project from "$lib/Project.svelte";
</script>

<!-- <body> -->
    <h1>Sophie Green's Portfolio</h1>
    <img class='fit-picture' src="images/tree.jpg" alt="A green field with a large tree against a blue sky" />
    <p>Hello everyone. My name is Sophie Green and I am a junior at MIT. This is my portfolio website.</p>

    <section>
        <h2>My Github Stats</h2>

        {#await fetch("https://api.github.com/users/sophiegr") }
        {:then response}
        {#await response.json()}
        {:then data}
            <dl>
                <dt>Followers: { JSON.stringify(data.followers) }</dt>
                <dt>Following: { JSON.stringify(data.following) }</dt>
                <dt>Public Repos: { JSON.stringify(data.public_repos) }</dt>
            </dl>
            {:catch error}
                <p class="error">
                    Something went wrong: {error.message}
                </p>
            {/await}
        {:catch error}
            <p class="error">
                Something went wrong: {error.message}
            </p>
        {/await}
    </section>

    <h2>Latest Projects:</h2>
    <div class="projects">
        {#each projects.slice(0, 3) as p}
            <Project info={p} hLevel=3 />
        {/each}
    </div>
<!-- </body> -->
