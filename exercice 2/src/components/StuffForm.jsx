import { useState } from "react";

export default function StuffForm({stuffs, setStuffs}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0.0);
  function changeStuffs (e) {
    e.preventDefault();
    if (name.length === 0 || price === 0) {
      alert("Initialize value before add stuff");
    } else {
      setStuffs([...stuffs, {name: name, price: price}]);
      // document.getElementsByClassName("stuff-from")[0].reset();
    }
    e.target.reset();
  }
  return (
    <form className="stuff-form" onSubmit={changeStuffs}>
      <p>Stuff name</p>
      <input type="search" onChange={e => setName(e.target.value)} placeholder="Banana" />

      <p>Stuff price</p>
      <input type="search" onChange={e => setPrice(parseFloat(e.target.value))} placeholder="15" />

      <button>Add Stuff</button>
    </form>
  );
}
