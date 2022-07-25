function navigateUrl(url,content){
    $.get(url,{},function(data){
       
        $("#" + content).html(data);
        window.scroll({
            top:0,
            behavior:"smooth"
        });
    });
 
}

function tab(id){
    if(id.path.length===8){
       id.path[1].classList.toggle('active') 
    }else if(id.path.length===7){
        id.path[0].classList.toggle('active') 

    }
}