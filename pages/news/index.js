// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a great-framework">
            Next JS is a Great IDE.
          </Link>
        </li>
        <li>Ful stack Framework.</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
