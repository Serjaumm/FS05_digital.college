console.log("hello world");

const themeIcon = document.getElementById("themeIcon");
let darkMode = false;

function changeTheme(){
   console.log("Tema alterado");
   darkMode = !darkMode;

   console.log(darkMode);
   toggleTheme();
}

function toggleTheme(){
   if (darkMode){
      themeIcon.className = "ph-thin ph-moon cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition-all duration-400"
      document.body.className = "bg-gray-900 text-white transition-all duration-300"
   } else{
      themeIcon.className = "ph-thin ph-sun cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition-all duration-400"
      document.body.className = "bg-white transition-all duration-300"
}
}