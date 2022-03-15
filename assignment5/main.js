var add_topic,add_cm1,add_cm2 ;

window.onload = global_chat;

function global_chat(){
    add_topic = document.getElementById("topic1");
    add_cm1 = document.getElementById("comment1");
    add_cm2 = document.getElementById("comment2");
}

function postFunction() { 
    var post = document.getElementById("text1").value;
    if(add_topic.innerText == "")
    {
        add_topic.innerText = post;
    }
    else if(add_cm1.innerText == "")
    {
        add_cm1.innerText = post;
    }
    else if(add_cm2.innerText == "")
    {
        add_cm2.innerText = post;
    }
}

function clearFunction() {
    add_topic.innerText = "";
    add_cm1.innerText = "";
    add_cm2.innerText = "";
}

