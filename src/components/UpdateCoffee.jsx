import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, photo, quantity, supplier, taste, category, details } =
    coffee;
  console.log(coffee);

  const handleUpdateCoffee = (e) => {
    console.log(_id);
    e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee);

        fetch(`https://coffee-store-server-9witg7lfw-md-monir-uddins-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Coffee updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            navigate(`/`);
        })
        
  };
  return (
    <div className="bg-[#F4F3F0] rounded">
      <h2 className="text-xl pt-6">
        Update a Coffee:
        <span className="font-semibold pl-2">{name}</span>
      </h2>
      <div className=" p-20">
        <form onSubmit={handleUpdateCoffee} className="border-2 p-4">
          {/* row-1 (Name and Quantity)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <span>QTY</span>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-2 (Supplier Taste)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <span>Taste</span>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-3 (category and Details)*/}
          <div className=" md:flex mb-8 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category Details</span>
              </label>
              <label className="input-group">
                <span>Details</span>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Category Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-4 (Photo URL)*/}
          <div className=" mb-8">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <span>URL</span>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            className="btn btn-block bg-slate-600 text-white"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
