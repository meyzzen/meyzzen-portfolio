body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
header {
  background: #333;
  color: #fff;
  padding: 1rem;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
nav a {
  color: #fff;
  text-decoration: none;
}
/* Galerie */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
}
.gallery .item {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  transition: transform .3s;
}
.gallery .item:hover {
  transform: translateY(-5px);
}
.gallery img {
  width: 100%;
  display: block;
}
.item h2 {
  margin: 1rem;
}
.item p {
  margin: 0 1rem 1rem;
}
footer {
  background: #222;
  color: #ccc;
  text-align: center;
  padding: 1rem;
}
