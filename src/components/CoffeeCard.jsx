import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, quantity, supplier, taste, category, details } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://coffee-store-server-8t2rtsu7r-md-monir-uddins-projects.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-300 gap-3 items-center">
        <div className="">
          <img className="w-full" src={photo} alt="Movie" />
        </div>
        <div className="flex flex-col gap-3 justify-start text-left">
          <p className="text-lg">
            <span className="font-semibold">Name:</span>
            <span className="text-gray-500"> {name}</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Supplier:</span>
            <span className="text-gray-500"> {supplier}</span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Name:</span>
            <span className="text-gray-500"> {name}</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link>
            <button className="bg-stone-400 p-2 rounded-lg">
              {" "}
              <FaEye className="text-white"></FaEye>{" "}
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="bg-stone-800 p-2 rounded-lg">
              {" "}
              <FaPen className="text-white"></FaPen>{" "}
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-600 p-2 rounded-lg"
          >
            {" "}
            <FaTrash className="text-white"></FaTrash>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
