import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ViewItems = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.coverImage}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="mt-2 font-semibold">{item.name}</h2>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        {selectedItem && (
          <div className="bg-white p-4 rounded max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <h2 className="text-xl text-black font-bold mb-2">
              {selectedItem.name}
            </h2>
            <p className="italic text-sm text-gray-800 mb-2">
              {selectedItem.type}
            </p>
            <p className="text-black mb-2">{selectedItem.description}</p>
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {selectedItem.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`item-${i}`}
                    className="h-64 object-contain"
                  />
                </div>
              ))}
            </Carousel>
            <button
              onClick={() => alert("Enquiry sent to seller@example.com")}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Enquire
            </button>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default ViewItems;
