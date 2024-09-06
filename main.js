import Alpine from "alpinejs";

document.addEventListener('alpine:init', () => {
    Alpine.data('utils', ()=> ({
        isDark: true,
        toggle(){
            this.isDark === true ? this.isDark = false : this.isDark = true;
            document.body.classList.toggle('light-mode');
        }
    }))
})


window.Alpine = Alpine;

Alpine.start();