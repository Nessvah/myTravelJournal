function Footer() {
  return (
    <footer>
      <div className="footer--img">
        {" "}
        <img src="/logomark_nobg.svg"></img>
      </div>
      <div className="footer--copy">
        © Developed by
        <a href="https://github.com/Nessvah" className="footer--link">
          Sílvia Vanessa
        </a>{" "}
        - An open source project
      </div>
    </footer>
  );
}

export default Footer;
