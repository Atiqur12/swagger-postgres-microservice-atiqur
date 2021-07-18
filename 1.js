let url1 = "admin/1"
let url2 = "admin/222/2"


function abc(url) {
    if (/[0-9]/g.test(url)) {
        url = url.split("/").reverse().slice(1,).reverse().join("/")
    }
    console.log(url)
}

abc(url1)
abc(url2)