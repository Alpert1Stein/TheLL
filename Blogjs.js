var Post = document.querySelector('#Posts')
var Targetbody = document.getElementById('Blog')
var clone = document.importNode(Post.content, true)
var clone1 = document.importNode(Post.content, true)
var clone2 = document.importNode(Post.content, true)
var clone3 = document.importNode(Post.content, true)
var clone4 = document.importNode(Post.content, true)
var clone5 = document.importNode(Post.content, true)
var clone6 = document.importNode(Post.content, true)
var clone7 = document.importNode(Post.content, true)
var clone8 = document.importNode(Post.content, true)
var clone9 = document.importNode(Post.content, true)
var clone10 = document.importNode(Post.content, true)
Targetbody.appendChild(clone)
Targetbody.appendChild(clone1)
Targetbody.appendChild(clone2)
Targetbody.appendChild(clone3)
Targetbody.appendChild(clone4)
Targetbody.appendChild(clone5)
Targetbody.appendChild(clone6)
Targetbody.appendChild(clone7)
Targetbody.appendChild(clone8)
Targetbody.appendChild(clone9)
Targetbody.appendChild(clone10)



var filebutton = document.getElementById('img')

function checkfile() {
    var file = document.getElementById('img').value
    if (file != null) {
        alert(file)
        document.getElementById('filename').innerHTML = file
    } else {
        alert("too early")
    }
}

filebutton.addEventListener('change', checkfile)