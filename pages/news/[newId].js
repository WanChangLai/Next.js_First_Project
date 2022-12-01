import { useRouter } from "next/router";

// our-domain.com/news/anything
//special syntax [] means anything

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newId;

  //send to request to API
  //to fetch the news item with newsId

  return (<h1>The Detail Page</h1>), (<p>{newsId}</p>);
}

export default DetailPage;
