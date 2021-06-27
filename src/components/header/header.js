import TopNavigation from "../navigation/TopNavigation";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      {/* Logo and name here */}
      <div className="header-branding">
        {/* Logo goes here */}
        <p>Swusic</p>
      </div>
      <TopNavigation />
      {/* Log in component here */}
    </div>
  );
}
