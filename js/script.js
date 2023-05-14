function Reload(){
    window.onload = () => {
        setTimeout(() => {
            document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
            }, 3000);        
    }
}