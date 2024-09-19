<script>
    
   
    export let disabled = false; 
    export let className = 'click me';   
  </script>
  
  
  <button
    
    class={`px-12 py-5 hover:bg-white  border-2 hover:border-gray-500 text-white font-semibold  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
    on:click  
  >
    <slot></slot> 
  </button>
  
