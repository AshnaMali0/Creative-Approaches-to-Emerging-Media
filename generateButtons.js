const myProjects=[];
for (i=1;i<=4;i++){
    myProjects.push(`Assignment ${i}`);
}

const myBlogs = ["My relationship to creating art is like that of a","Assignment 2"];

document.write("<div class='button-container'>");

for (let [i, value] of myProjects.entries()){
    //writing html code
    console.log("the item is", value, "the index is", i);
    document.write("<h2 class='button-flex' onclick='clickButton(" + i + ")'>" + value + "</h2>");
}

document.write("</div>");

function clickButton(index) {
    console.log(index);
    var newUrl = "blog_pages/Blog" + (index + 1) + ".html";
    document.location.href = newUrl;
    // document.getElementbyID("blog-post").innerHTML = "<div>" + myBlogs[index] + "</div>";
}

