const Dates = ({ invoiceNumber, dueDate, invoiceDate }) => {
  return (
    <article className="my-5 flex items-end">
      <ul>
        <li className="p-1">
          <span className="font-bold text-slate-800">Invoice Number</span>
          <span className="text-sm text-slate-500">
            {"  "}INV
            {invoiceNumber}
          </span>
        </li>
        <li className="p-1">
          <span className="font-bold text-slate-800">Invoice Date</span>{" "}
          <span className="text-sm text-slate-500">
            {"  "}
            {invoiceDate}
          </span>
        </li>
        <li className="p-1">
          <span className="font-bold text-slate-800">Due Date</span>{" "}
          <span className="text-sm text-slate-500">
            {"  "}
            {dueDate}
          </span>
        </li>
      </ul>
    </article>
  );
};

export default Dates;
