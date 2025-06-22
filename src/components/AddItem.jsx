import { useState } from "react";

const AddItem = ({ addItem }) => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: "",
    images: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = {
      ...form,
      images: form.images.split(",").map((img) => img.trim()),
    };
    await addItem(item);
    setSuccess(true);
    setForm({
      name: "",
      type: "",
      description: "",
      coverImage: "",
      images: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <input
        type="text"
        placeholder="Item Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        placeholder="Item Type"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="w-full border p-2"
        required
      />
      <textarea
        placeholder="Item Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        placeholder="Cover Image URL"
        value={form.coverImage}
        onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
        className="w-full border p-2"
        required
      />
      <input
        type="text"
        placeholder="Additional Images URLs (comma separated)"
        value={form.images}
        onChange={(e) => setForm({ ...form, images: e.target.value })}
        className="w-full border p-2"
        required
      />
      <button className="bg-blue-500 text-white p-2 rounded">Add Item</button>
      {success && <p className="text-green-500">Item successfully added</p>}
    </form>
  );
};

export default AddItem;
