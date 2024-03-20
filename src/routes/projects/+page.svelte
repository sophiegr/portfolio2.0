<script>
    import projects from '$lib/projects.json'; 
    import Project from "$lib/Project.svelte";
    import Pie from '$lib/Pie.svelte';
    import * as d3 from 'd3';
    let query = "";

    let filteredProjects;
    $: filteredProjects = projects.filter(project => {
        if (query) {
            let values = Object.values(project).join("\n").toLowerCase();
            return values.includes(query.toLowerCase());
        }
        return true;
    });

    let filteredByYear;
    $: filteredByYear = filteredProjects.filter(project => {
        if (selectedYear) {
                return project.year === selectedYear;
        }
        return true;
    });

    let pieData;
    $: {
        pieData = {};
        let rolledData = d3.rollups(filteredProjects, v => v.length, d => d.year);
        pieData = rolledData.map(([year, count]) => {
	        return { value: count, label: year };
        });
    }
    let selectedYearIndex = -1;
    let selectedYear;
    $: selectedYear = selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<!-- <body> -->
    <h1>Projects</h1>
    <Pie data={pieData} bind:selectedIndex={selectedYearIndex} />
    <input class="search" type="search" bind:value={query}
       aria-label="Search projects" placeholder="🔍 Search projects…" />
    <div class="projects">
        {#each filteredByYear as p}
			<Project info={p} />
        {/each}
    </div>
<!-- </body> -->

<style>
    input.search {
        font: inherit;
        width: 100%;
        padding: 0.3em;
        margin-top: -0.5em;
        margin-bottom: 2em;
        text-align: left;
    }
</style>