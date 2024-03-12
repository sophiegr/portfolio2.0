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
        <dl>
            <dt>Followers</dt>
            <dd></dd>
            <dd><profileData class="followers"></profileData></dd>
          
            <dt>Following</dt>
            <dd><profileData class="following"></profileData></dd>
          
            <dt>Public Repos</dt>
            <dd><profileData class="public"></profileData></dd>
        </dl>
    </section>

    <h2>Latest Projects:</h2>
    <div class="projects">
        {#each projects.slice(0, 3) as p}
            <Project info={p} hLevel=3 />
        {/each}
    </div>
<!-- </body> -->
