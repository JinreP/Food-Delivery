import { ForgotPassword } from "./_components/forgot";
import { Img } from "../_components/image";

export default function ForgotHome() {
  return (
    <div className="flex gap-5 items-center justify-center">
      <ForgotPassword />
      <Img />
    </div>
  );
}
