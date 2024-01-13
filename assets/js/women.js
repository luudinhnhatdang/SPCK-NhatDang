const dataWomen = [
  {
    image: "./assets/images/image7.jpg",
    name: "Women's Blue Training",
    price: "60.00",
    categories: "Training, Women",
    des: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image8.jpg",
    name: "Women's Candy City Run",
    price: "40.00",
    categories: "Sneaker, Women",
    des: "Auctor eros suspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image9.jpg",
    name: "Women's Choco City Run",
    price: "65.00",
    categories: "Running, Women",
    des: "Auctor eros sAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image10.jpg",
    name: "Women's Cream Suede",
    price: "59.90",
    categories: " Sneaker, Women",
    des: "Auctor eros sAuctor eros suspendAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.isse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image11.jpg",
    name: "Women's Green Training",
    price: "49.90",
    categories: "Women, Running",
    des: "Auctor eros sAuctoAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.r eros suspendAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.isse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image12.jpg",
    name: "Women's Mint Sneaker",
    price: "89.90",
    categories: "Sneaker, Women",
    des: "Auctor eros sAuctor eros suspendAuctor eros suspendisse tellus venenatis sodales purus Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.isse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
];

// LẤY THẺ DIV CHỨA CÁC SẢN PHẨM WOMEN BẰNG GETELEMENTBYID
const womenOuter = document.getElementById("womenOuter");
// HÀM RENDERMEN ĐỂ THÊM TỪNG THẺ DIV VÀO THẺ WOMENOUTER BẰNG CÁCH DUYỆT DATA WOMEN TRONG VÒNG FOR
function renderWomen() {
  womenOuter.innerHTML = null;
  for (i of dataWonen) {
    menOuter.insertAdjacentHTML(
      "beforeend",
      `
          <div data-aos="fade-up" class="shopping-card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div class="shoes-img-container">
                      <img id="shoesImg" src="${i.image}" alt="">
                      <a href="#" class="overlay"></a>
                    </div>
                    <div class="card-info">
                      <h5 id="shoesName" class="shoes-name">${i.name}</h5>
                      <p id="shoesPrice">$${i.price}</p>
                      <div class="star">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>
                    </div>
                  </div>
          `
    );
  }
  searchnWomen();
  clickWomenShoes();
}

// HÀM SEARCHMEN ĐỂ SEARCH GIÀY BẰNG TÊN CỦA ĐÔI GIÀY
function searchWomen() {
  document.getElementById("searchInput").addEventListener("change", (e) => {
    let searchInput = e.target.value.toUpperCase();
    const card = document.querySelectorAll(".shopping-card");
    let shoesName = document.querySelectorAll(".shoes-name");
    shoesName.forEach((items, index) => {
      if (items.innerText.toUpperCase().includes(searchInput)) {
        card[index].classList.remove("hide");
      } else {
        card[index].classList.add("hide");
      }
    });
  });
}

// HÀM CLICKMENSHOES ĐỂ HIỂN THỊ THÔNG TIN GIÀY KHI CLICK VÀO GIÀY
function clickMenShoes() {
  const listWomenShoes = document.querySelectorAll(".shopping-card");
  listWomenShoes.forEach((item, index) => {
    item.addEventListener("click", () => {
      document.getElementById("womenImg").src = dataWomen[index].image;
      document.getElementById("womenName").innerHTML = dataWomen[index].name;
      document.getElementById("womenPrice").innerHTML =
        dataMen[index].price + "$";
      document.getElementById("womenDes").innerHTML = dataWomen[index].des;
      document.getElementById("btnAdd").onclick = () => {
        addToCart(index);
      };
    });
  });
}
// HÀM ADDTOCART ĐỂ THÊM GIÀY VÀO LOCALSTORAGE
function addToCart(index) {
  const listCart = JSON.parse(localStorage.getItem("cart")) || [];
  listCart.push(dataWomen[index]);
  localStorage.setItem("cart", JSON.stringify(listCart));
  alert("Add To Cart Successfully!");
}

window.onload = renderWomen();
