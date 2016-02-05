var switch = {
    XHTTP_STATUS_OK: 200;
    XHTTP_STATUS_NOT_FOUND: 404;

    createRequest: function(){
        this.apply(this, arguments);
    }

    get: function(url, req) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState = 4 && xhttp.status = XHTTP_STATS_OK){
                return xhttp.responseText;
            }
            else{
                return -1;
            }
        }

        xhttp.open("GET", )
    }

    getAsync: function(url){

    }

    post: function(url){
        // TODO: Build post
    }

    postAsync: function(url){
        // TODO: Build postAsync
    }
}