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

    <h2>Latest Projects:</h2>
    <div class="projects">
        {#each projects.slice(0, 3) as p}
            <Project info={p} hLevel=3 />
        {/each}
    </div>
<!-- </body> -->