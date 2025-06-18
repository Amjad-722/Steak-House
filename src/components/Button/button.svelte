<script>
    export let disabled = false;
    export let className = '';
    export let size = 'md'; // Default size ('sm', 'md', 'lg', 'xl')
  
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-[8px]',
      md: 'px-8 py-3 text-base rounded-[10px]',
      lg: 'px-10 py-2 text-lg',
      xl: 'px-16 py-6 text-xl',
    };
  
    
    let buttonSizeClass = sizeClasses[size] || sizeClasses.md;
  </script>
  
  <button
    class={`border-2 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-fontColor hover:border-gray-500 ${buttonSizeClass} ${className}`}
    disabled={disabled}
  >
    <slot></slot>
  </button>
  

  
