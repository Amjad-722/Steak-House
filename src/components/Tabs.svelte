<script>
    import Tab1 from './Tab1.svelte';
    import Tab2 from './Tab2.svelte';
    
  
    // Define the items array to reference the components
    let items = [
      { label: "Tab 1", value: 1, component: Tab1 },
      { label: "Tab 2", value: 2, component: Tab2 },
     
    ];
  
    let activeTabValue = 1; // Default active tab
  </script>
  
  <!-- Tabs navigation -->
  <ul class="flex flex-wrap pl-0 mb-0 border-b border-gray-300 list-none">
    {#each items as item} 
      <li class="mb-[-1px] font-medium text-xl">
        <span 
          on:click={() => activeTabValue = item.value}
          class={`block py-2 px-4 cursor-pointer rounded-t-md border border-transparent  ${activeTabValue === item.value ? 'text-blue-700 bg-white border-gray-300 border-b-0' : ''}`}>
          {item.label}
        </span>
      </li>
    {/each}
  </ul>
  
  <!-- Content area: Render the selected component -->
  <div class="box mb-2.5 p-10 border flex justify-center font-bold text-gray-950 border-gray-300 rounded-b-md border-t-0">
    {#each items as item}
      {#if activeTabValue == item.value}
        <svelte:component this={item.component} />
      {/if}
    {/each}
  </div>
  