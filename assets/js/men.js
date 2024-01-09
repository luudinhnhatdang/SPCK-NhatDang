const dataMen = [
  {
    image: "./assets/images/image1.jpg",
    name: "Men's Black Running",
    price: "79.90",
    categories: "Men, Running",
    des: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image2.jpg",
    name: "Men's Classic Blue",
    price: "69.00",
    categories: "Men, Sneaker",
    des: "Auctor eros suspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image3.jpg",
    name: "Men's Classic Mint",
    price: "79.99",
    categories: "Men, Sneaker",
    des: "Auctor eros sAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image4.jpg",
    name: "Men's Earth-Tone Sneaker",
    price: "74.90",
    categories: "Men, Sneaker",
    des: "Auctor eros sAuctor eros suspendAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.isse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image5.jpg",
    name: "Men's Green Running",
    price: "89.90",
    categories: "Men, Running",
    des: "Auctor eros sAuctoAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.r eros suspendAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.isse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
  {
    image: "./assets/images/image6.jpg",
    name: "Men's Moonstone Sneaker",
    price: "74.90",
    categories: "Men, Sneaker",
    des: "Auctor eros sAuctor eros suspendAuctor eros suspendisse tellus venenatis sodales purus Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.isse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.uspendisAuctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.se tellus venenatis odales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
  },
];

// LẤY THẺ DIV CHỨA CÁC SẢN PHẨM MEN BẰNG GETELEMENTBYID
const menOuter = document.getElementById("menOuter");
// HÀM RENDERMEN ĐỂ THÊM TỪNG THẺ DIV VÀO THẺ MENOUTER BẰNG CÁCH DUYỆT DATA MEN TRONG VÒNG FOR
function renderMen() {
  // RESET LẠI THẺ MENOUTER THANFH NULL
  menOuter.innerHTML = null;
  for (i of dataMen) {
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
  searchMen();
  clickMenShoes();
}

// HÀM SEARCHMEN ĐỂ SEARCH GIÀY BẰNG TÊN CỦA ĐÔI GIÀY
function searchMen() {
  // LẤY THẺ INPUT BẰNG GETELEMENTBYID
  document.getElementById("searchInput").addEventListener("change", (e) => {
    // CHUYỂN TẤT CẢ CÁC KÝ TỰ TRONG INPUT SANG CHỮ HOA
    let searchInput = e.target.value.toUpperCase();
    // LẤY TẤT CẢ CÁC THẺ CHỨA TÊN GIÀY
    const card = document.querySelectorAll(".shopping-card");
    // LÁY TẤT CẢ TÊN GIÀY
    let shoesName = document.querySelectorAll(".shoes-name");
    // DUYỆT TẤT CẢ CÁC THẺ CHỨA TÊN GIÀY
    shoesName.forEach((items, index) => {
      // NẾU TÊN GIÀY CHỨA KÝ TỰ TRONG INPUT THÌ HIỂN THỊ THẺ CHỨA GIÀY ĐÓ (THÊM HIDE VÀO CLASS NẾU KHÔNG CHỨA)
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
  // LẤY TẤT CẢ CÁC THẺ CHỨA GIÀY
  const listMenShoes = document.querySelectorAll(".shopping-card");
  // DUYỆT TẤT CẢ CÁC THẺ CHỨA GIÀY
  listMenShoes.forEach((item, index) => {
    // KHI CLICK VÀO THẺ CHỨA GIÀY THÌ HIỂN THỊ THÔNG TIN GIÀY ĐÓ
    item.addEventListener("click", () => {
      //   THAY ĐỔI THÔNG TIN GIÀY DỰA TRÊN MẢNG DATAMEN
      document.getElementById("menImg").src = dataMen[index].image;
      document.getElementById("menName").innerHTML = dataMen[index].name;
      document.getElementById("menPrice").innerHTML =
        dataMen[index].price + "$";
      document.getElementById("menDes").innerHTML = dataMen[index].des;
      document.getElementById("btnAdd").onclick = () => {
        addToCart(index);
      };
    });
  });
}

// HÀM ADDTOCART ĐỂ THÊM GIÀY VÀO LOCALSTORAGE
function addToCart(index) {
  // LẤY TẤT CẢ CÁC GIÀY TRONG LOCALSTORAGE (NẾU KHÔNG CÓ THÌ TRẢ RA MẢNG RỖNG)
  const listCart = JSON.parse(localStorage.getItem("cart")) || [];
  // THÊM GIÀY VÀO MẢNG
  listCart.push(dataMen[index]);
  // LƯU MẢNG VÀO LOCALSTORAGE
  localStorage.setItem("cart", JSON.stringify(listCart));
  // HIỂN THỊ ALERT
  alert("Add To Cart Successfully!");
}

// GỌI HÀM RENDERMEN KHI LOAD TRANG
window.onload = renderMen();
