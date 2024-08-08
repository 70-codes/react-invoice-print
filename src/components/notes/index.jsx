const Notes = ({ notes }) => {
  return (
    <section className="mb-5 max-w-[90%] mx-auto">
      <p className="text-justify">{notes}</p>
    </section>
  );
};

export default Notes;
