<script>
    let items = [
      { label: "Tab 1", value: 1, content: "<p>This is  Tab 1</p>" },
      { label: "Tab 2", value: 2, content: "<p>This is the  Tab 2</p>" },
      { label: "Tab 3", value: 3, content: "<p>This is the content  Tab 3</p>" },
      { label: "Tab 4", value: 4, content: "<p>This is the content for Tab 4</p>" }
    ];

    let activeTabValue = 1; // Default active tab
</script>

<!-- Tabs navigation -->
<ul class="flex flex-wrap pl-0 mb-0  border-b border-gray-300 list-none">
  {#each items as item} 
    <li class="mb-[-1px]  font-medium text-xl">
      <span 
        on:click={() => activeTabValue = item.value}
        class={`block py-2 px-4 cursor-pointer rounded-t-md border border-transparent  ${activeTabValue === item.value ? 'text-blue-700 bg-white border-gray-300 border-b-0' : ''}`}>
        {item.label}
      </span>
    </li>
  {/each}
</ul>


<div class="box mb-2.5 p-10 border flex justify-center font-bold text-gray-950 border-gray-300 rounded-b-md border-t-0">
  {#each items as item}
    {#if activeTabValue == item.value}
      {@html item.content} 
    {/if}
  {/each}
</div>
