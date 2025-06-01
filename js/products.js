let products = [
  { id: 1, name: "MacBook Pro", category: "Electronics", price: 1299, stock: 15 },
  { id: 2, name: "Standing Desk", category: "Furniture", price: 450, stock: 8 },
  { id: 3, name: "Bluetooth Speaker", category: "Audio", price: 99, stock: 30 }
];

function renderProducts(data = products) {
  const tbody = document.querySelector("#productTable tbody");
  tbody.innerHTML = "";

  data.forEach(product => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.price.toFixed(2)}</td>
      <td>${product.stock}</td>
      <td>
        <button class="btn btn-secondary" onclick="editProduct(${product.id})">Edit</button>
        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function openProductModal(edit = false) {
  document.getElementById("productModal").style.display = "flex";
  document.getElementById("modalTitle").innerText = edit ? "Edit Product" : "Add Product";
}

function closeProductModal() {
  document.getElementById("productModal").style.display = "none";
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productCategory").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productStock").value = "";
}

function saveProduct() {
  const id = document.getElementById("productId").value;
  const name = document.getElementById("productName").value;
  const category = document.getElementById("productCategory").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  const stock = parseInt(document.getElementById("productStock").value);

  if (!name || !category || isNaN(price) || isNaN(stock)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  if (id) {
    const index = products.findIndex(p => p.id == id);
    products[index] = { id: +id, name, category, price, stock };
  } else {
    const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    products.push({ id: newId, name, category, price, stock });
  }

  closeProductModal();
  renderProducts();
}

function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  document.getElementById("productId").value = product.id;
  document.getElementById("productName").value = product.name;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productStock").value = product.stock;

  openProductModal(true);
}

function deleteProduct(id) {
  if (!confirm("Are you sure you want to delete this product?")) return;
  products = products.filter(p => p.id !== id);
  renderProducts();
}

document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(keyword) ||
    product.category.toLowerCase().includes(keyword)
  );
  renderProducts(filtered);
});

window.onload = () => {
  renderProducts();
};

const productModal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const form = document.getElementById('productForm');

let editIndex = null;

function openModal(isEdit = false, data = null, index = null) {
  productModal.classList.remove('hidden');
  modalTitle.textContent = isEdit ? "Edit product" : "Add new product";
  if (isEdit && data) {
    document.getElementById('productName').value = data.name;
    document.getElementById('productCategory').value = data.category;
    document.getElementById('productPrice').value = data.price;
    document.getElementById('productCompany').value = data.company;
    document.getElementById('productStatus').value = data.status;
    editIndex = index;
  } else {
    form.reset();
    editIndex = null;
  }
}

function closeModal() {
  productModal.classList.add('hidden');
  form.reset();
}

function handleSubmit(event) {
  event.preventDefault();

  const product = {
    name: document.getElementById('productName').value,
    category: document.getElementById('productCategory').value,
    price: document.getElementById('productPrice').value,
    company: document.getElementById('productCompany').value,
    status: document.getElementById('productStatus').value
  };

  if (editIndex !== null) {
    products[editIndex] = product;
  } else {
    products.push(product);
  }

  renderProductTable();
  closeModal();
}

function handleEdit(index) {
  openModal(true, products[index], index);
}

function handleDelete(index) {
  if (confirm("Delete this product?")) {
    products.splice(index, 1);
    renderProductTable();
  }
}
