const Footer = () => {
  return (
    <footer className="bg-shade2 text-white py-3 md:py-9 h-[1/4]">
      <div className="container mx-auto text-center font-robotoMono">
        <p className="text-md">
          &copy; {new Date().getFullYear()} Mortgage Calculator App
        </p>
        <p className="text-sm mt-2">
          Designed and Developed with{" "}
          <span className="text-red-500">&#10084;</span> by Sushant
        </p>
      </div>
    </footer>
  );
};

export default Footer;
