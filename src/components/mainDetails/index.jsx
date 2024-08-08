const MainDetails = ({ name, address }) => {
  return (
    <section className="flex items-end flex-col">
      <h2 className="text-xl uppercase">{name}</h2>
      <p className="">{address}</p>
    </section>
  );
};

export default MainDetails;
