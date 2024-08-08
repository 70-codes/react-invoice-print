const ClientDetaills = ({ clientName, clientAdress }) => {
  return (
    <section className="mt-5">
      <h2 className=" text-xl uppercase">{clientName}</h2>
      <p>{clientAdress}</p>
    </section>
  );
};

export default ClientDetaills;
