import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__gitHub gitHub">
          <a
            className="gitHub__evg"
            href="https://github.com/evg-zlg"
            target="_blank"
            rel="noreferrer"
          >
            github evg-zlg
          </a>
          <a
            className="gitHub__kar"
            href="https://github.com/Karinaguseva"
            target="_blank"
            rel="noreferrer"
          >
            github Karinaguseva
          </a>
        </div>
        <div className="footer__year">&copy; 2022</div>
        <a
          className="footer__rss"
          href="https://rs.school/js/"
          target="_blank"
          rel="noreferrer"
        >
          rs school course js
        </a>
      </div>
    </footer>
  );
}
