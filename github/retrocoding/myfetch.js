// per internet archive
function ia(){
    function ia_fetch(){
        fetch("https://archive.org/details/compute-magazine")
            then(response => {
                console.log(response);
            })
        };


}