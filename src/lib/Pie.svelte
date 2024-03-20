<script>
    import * as d3 from 'd3';
    let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
    export let data = [];
    let sliceGenerator = d3.pie().value(d => d.value);
    $: arcData = sliceGenerator(data);
    $: arcs = arcData.map(d => arcGenerator(d));
    let colors = d3.scaleOrdinal(d3.schemeTableau10);
    export let selectedIndex = -1;
</script>

<div class="container">
	<svg viewBox="-50 -50 100 100">
        {#each arcs as arc, index}
	        <path d={arc} fill={ colors(index) }
	            class:selected={selectedIndex === index}
	            on:click={e =>  selectedIndex = selectedIndex === index ? -1 : index }  />
        {/each}
	</svg>
    <div class="legendbox">
        <ul class="legend">
            {#each data as d, index}
                <li style="--color: { colors(index) }">
                    <span class="swatch"></span>
                    {d.label} <em>({d.value})</em>
                </li>
            {/each}
        </ul>
    </div>
</div>


<style>
    div.container {
        display: flex;
        align-items: center;
        padding-left: 2em;
        margin-bottom: 1em;
        margin-top: -1em;
    }
    
    svg {
        max-width: 20em;
        margin-block: 2em;
        overflow: visible;
    }

    svg:has(path:hover) {
        path:not(:hover) {
            opacity: 50%;
	    }
    }

    .selected {
        --color: oklch(60% 45% 0) !important;

        &:is(path) {
            fill: var(--color);
        }
    }


    path {
	    transition: 300ms;
        cursor: pointer;
    }


    div.legendbox {
        flex: 1;
        border: 1.5px;
        border-style: solid;
        border-color: #d3d3d3;
        margin-left: 3em;
        margin-right: 2em;
        padding-top: 0.5em;
        padding-right: 0.5em;
        align-items: center;
    }

    ul.legend {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
        align-content: center;
        align-items: center;
        justify-content: end;
    }

    li {
        display: flex;
        align-items: center;
        padding-bottom: 0.5em;
    }

    span.swatch {
        display: inline-block;
        aspect-ratio: 1 / 1;
        width: 1.5em;
        height: 1.5em;
        background-color: var(--color);
        border-radius: 50%;
        border-spacing: gap;
        margin-right: 0.5em;
    }

    em {
        margin-left: 0.5em;
        font-variant-numeric: oldstyle-nums;
        font-size: 80%;
        color: gray;
        padding-right: -1em;
    }

</style>