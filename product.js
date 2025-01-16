function edit(id){
    window.location.replace("/product?edit="+id);
}

function editProduct(id,name,brand,serialNumber,buyPrice){
    fetch("/product?id=" + id + "&name=" + name + "&brand=" + brand + "&serialNumber=" + serialNumber + "&buyPrice=" + buyPrice, {
        method: "PUT",
    });

    window.location.replace("/product");
}

function remove(id){
    alert("Remove : " + id);

     fetch("/product?id=" + id,{
        method:"DElETE"
    });

    window.location.replace("/product");
}