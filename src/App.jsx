import { useState } from "react";

import ClientDetaills from "./components/clientDetails";
import Dates from "./components/dates";
import Footer from "./components/footer";
import Header from "./components/header";
import MainDetails from "./components/mainDetails";
import Notes from "./components/notes";
import Table from "./components/table";

export default function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAdress, setClientAdress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 print:hidden">
        <ul className="flex items-center justify-between flex-wrap">
          <li>
            <button
              className="bg-purple-500 hover:bg-purple-200 hover:border-2 hover:border-purple-500 text-slate-950 py-1 px-8 rounded-md shadow-md transition-all duration-200"
              onClick={handlePrint}
            >
              Print
            </button>
          </li>
          <li>
            <button className="bg-amber-500 hover:bg-amber-100 hover:border-2 mx-3 hover:border-amber-500 text-slate-950 py-1 px-8 rounded-md shadow-md transition-all duration-200">
              Download
            </button>
          </li>
          <li>
            <button className="bg-emerald-500 hover:bg-emerald-100 hover:border-2 hover:border-emerald-500 text-slate-950 py-1 px-8 rounded-md shadow-md transition-all duration-200">
              Send
            </button>
          </li>
        </ul>
      </div>
      <main className="p-6 md:max-w-xl md:mx-auto lg:max-w-4xl lg:mx-auto bg-slate-200 shadow-md rounded-md m-4">
        {/* HEADER */}
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />
            {/* HEADER */}
            {/* Your details */}
            <MainDetails name={name} address={adress} />
            {/* End of Your details */}
            {/* Client details */}
            <ClientDetaills
              clientName={clientName}
              clientAdress={clientAdress}
            />
            {/* End of Client details */}
            {/* Date */}
            <Dates
              invoiceNumber={invoiceNumber}
              dueDate={dueDate}
              invoiceDate={invoiceDate}
            />
            {/* End of  Date */}
            {/* Table */}
            <Table />
            {/* End Of Table */}
            {/* Notes */}
            <Notes notes={notes} />
            {/* End of Notes */}
            {/* Footer */}
            <Footer
              name={name}
              phone={phone}
              email={email}
              bankName={bankName}
              bankAccNum={bankAccount}
            />
            {/* End of Footer */}
          </div>
        ) : (
          <>
            {/* Name, Address, email,Bank Name, Bank Account, website, Client Name, Client address, invoice number, invoice date, due date, notes,*/}
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Name</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    placeholder="enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Adress</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="text"
                    name="adress"
                    id="adress"
                    value={adress}
                    placeholder="enter your adress"
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Email</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Phone</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    placeholder="enter your phone number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Bank Name</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="text"
                    name="bankName"
                    id="bankName"
                    value={bankName}
                    placeholder="Enter your Bank Name"
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your Bank A/C Number</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    value={bankAccount}
                    placeholder="Enter your Bank A/C number"
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Client's Name</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="text"
                    name="clientName"
                    id="clientName"
                    value={clientName}
                    placeholder="Enter client's name "
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Client's Adress</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="text"
                    name="clientAdress"
                    id="clientAdress"
                    value={clientAdress}
                    placeholder="Enter client's adress "
                    onChange={(e) => setClientAdress(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Invoice Date</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    value={invoiceDate}
                    placeholder="Enter client's date "
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Due Date</label>
                  <input
                    className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    value={dueDate}
                    placeholder="Enter client's date "
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </div>
              <label htmlFor="name">Enter Invoice Number</label>
              <input
                className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                value={invoiceNumber}
                placeholder="Enter Invoice Number "
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <label htmlFor="name">Additional Notes</label>
              <textarea
                cols={30}
                rows={10}
                className="rounded-md p-2 my-2 bg-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-slate-50"
                type="text"
                name="notes"
                id="notes"
                value={notes}
                placeholder="Additional Notes for the client "
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </>
        )}
      </main>
      <div className="max-w-4xl mx-auto print:hidden ">
        {showInvoice ? (
          <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-purple-500 hover:bg-purple-200 hover:border-2 hover:border-purple-500 text-slate-950 py-2 px-8 rounded-md shadow-md transition-all duration-200"
          >
            Edit Invoice
          </button>
        ) : (
          <button
            onClick={() => setShowInvoice(true)}
            className="bg-purple-500 mb-4 hover:bg-purple-200 hover:border-2 hover:border-purple-500 text-slate-950 py-2 px-8 rounded-md shadow-md transition-all duration-200"
          >
            Preview Invoice
          </button>
        )}
      </div>
    </>
  );
}
