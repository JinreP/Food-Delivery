import { LeftNavbar } from "./_components/Navbar.Left";
import { Orders } from "./_components/Orders";

export default function Order() {
  return (
    <div className="w-full h-screen bg-gray-500">
      <div className="flex">
        <LeftNavbar />
        <div className="pl-10 mt-10 ">
          <Orders />
        </div>
      </div>
    </div>
  );
}
