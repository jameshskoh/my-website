import ReactSvg from "../assets/react.svg";

export function Header() {
  return (
    <div className="m-2 bg-gray-800">
      <img src={ReactSvg} alt="My Logo" />
    </div>
  );
}
