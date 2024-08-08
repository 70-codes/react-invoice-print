const Footer = ({ name, email, phone, bankName, bankAccNum }) => {
  return (
    <footer className="border-t-2 border-slate-700 pt-6">
      <ul className="flex flex-wrap items-center justify-center">
        <li className="m-1">
          <span className="font-bold text-slate-700"> Name:</span> {name}
        </li>
        <li className="m-1">
          <span className="font-bold text-slate-700"> Email Adress:</span>
          {"  "}
          {email}
        </li>
        <li className="m-1">
          <span className="font-bold text-slate-700">Phone number:</span>
          {"  "}
          {phone}
        </li>
        <li className="m-1">
          <span className="font-bold text-slate-700">Bank:</span> {bankName}
        </li>
        <li className="m-1">
          <span className="font-bold text-slate-700">Account Holder:</span>
          {"  "}
          {name}
        </li>
        <li className="m-1">
          <span className="font-bold text-slate-700">Bank A/C Number:</span>
          {"  "}
          {bankAccNum}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
