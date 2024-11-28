<template>
  <div id="head" class="header bg-white shadow-md">
    <div class="mx-auto px-4 flex justify-center items-center gap-5">
      <!-- Logo -->
      <div id="logo" class="flex items-center mr-5">
        <img class="object-contain headerImg" src="../assets/img/logo.png" alt="logo" />
      </div>

      <!-- Menu -->
      <div class="flex items-center space-x-8">
        <nav class="menuHeader flex space-x-6 items-center">
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-gray-900">Home</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Our Team</a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Projects</a>
          
          <!-- Dropdown Wrapper -->
          <div class="relative group">
            <!-- Services Menu Item -->
            <a
              href="#"
              class="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:shadow-inner transform hover:translate-y-1 transition duration-150"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-gray-800"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>

            <!-- Dropdown Menu -->
            <div
              class="absolute left-0 top-full mt-0 hidden w-48 bg-white group-hover:block"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Office Design and Layout
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Interior Design
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                General Contractor
              </a>
            </div>
          </div>
          
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Contact us</a>
          <a
            href="#"
            class="bg-yellow-300 text-black font-medium rounded-md px-4 py-2 hover:bg-black hover:bg-yellow-500 transition duration-300"
          >
            FREE ESTIMATE
          </a>
          <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">EN</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  console.log("header mounted");
});
</script>

<style scoped>
.header {
  min-height: 50px;
  max-height: 80px;
  padding: 7px;
  margin-bottom: 10px;
}

.headerImg {
  min-width: 40px;
  min-height: 40px;
  max-height: 65px;
}

/* Dropdown visibility */
.group:hover .group-hover\:block {
  display: block;
}

/* Dropdown styling - seamless extension */
.group .group-hover\:block {
  transition: opacity 0.2s ease-in-out;
  margin-top: 0; /* Align dropdown directly under Services */
  border: none; /* Remove border */
}

/* Extend Services seamlessly */
.group-hover\:block {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: white;
  box-shadow: none; /* Remove shadow for seamless appearance */
}

/* Add "pressed" effect on hover */
a:hover {
  transform: translateY(1px); /* Slight downward movement */
  transition: all 0.15s ease-in-out; /* Smooth transition */
}
</style>
